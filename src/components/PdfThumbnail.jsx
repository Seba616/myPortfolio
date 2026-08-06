import { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.mjs?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function PdfThumbnail({ src, alt }) {
  const canvasRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function renderThumbnail() {
      try {
        const pdf = await pdfjsLib.getDocument({ url: src }).promise;
        const page = await pdf.getPage(1);

        const viewport = page.getViewport({ scale: 1 });
        const scale = 300 / viewport.width;
        const scaledViewport = page.getViewport({ scale });

        const canvas = canvasRef.current;
        if (!canvas || cancelled) return;

        canvas.width = scaledViewport.width;
        canvas.height = scaledViewport.height;

        const ctx = canvas.getContext("2d");
        await page.render({ canvasContext: ctx, viewport: scaledViewport })
          .promise;

        if (!cancelled) setLoaded(true);
      } catch (err) {
        console.error("Error al generar miniatura del PDF:", err);
      }
    }

    renderThumbnail();

    return () => {
      cancelled = true;
    };
  }, [src]);

  return (
    <canvas
      ref={canvasRef}
      aria-label={alt}
      className={`w-full h-full object-cover object-top transition-opacity ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}

export default PdfThumbnail;
