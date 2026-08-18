import { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.mjs?url";
import { Award } from "lucide-react";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function PdfThumbnail({ src, alt }) {
  const canvasRef = useRef(null);
  const [status, setStatus] = useState("loading"); // loading | ready | error

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

        if (!cancelled) setStatus("ready");
      } catch (err) {
        console.error("Error al generar miniatura del PDF:", err);
        if (!cancelled) setStatus("error");
      }
    }

    renderThumbnail();

    return () => {
      cancelled = true;
    };
  }, [src]);

  if (status === "error") {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Award size={40} className="text-neutral-300 dark:text-neutral-700" />
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      aria-label={alt}
      className={`w-full h-full object-cover object-top transition-opacity ${
        status === "ready" ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}

export default PdfThumbnail;
