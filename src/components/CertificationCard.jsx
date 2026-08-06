import { Expand, Award } from "lucide-react";
import PdfThumbnail from "./PdfThumbnail";

function CertificationCard({ cert, onExpand }) {
  return (
    <div className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-black flex flex-col select-none">
      <div className="relative h-36 bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center">
        {cert.pdf ? (
          <PdfThumbnail src={cert.pdf} alt={cert.title} />
        ) : (
          <Award size={40} className="text-neutral-300 dark:text-neutral-700" />
        )}
        <button
          onClick={() => onExpand(cert)}
          className="absolute top-2 right-2 p-1.5 rounded-full bg-black text-white dark:bg-white dark:text-black shadow hover:opacity-80 transition-opacity"
          aria-label="Ver certificado completo"
        >
          <Expand size={14} />
        </button>
      </div>
      <div className="p-4 h-[84px]">
        <h3 className="font-semibold text-sm mb-1 line-clamp-2 leading-tight">
          {cert.title}
        </h3>
        <p className="text-xs text-neutral-500">{cert.institution}</p>
      </div>
    </div>
  );
}

export default CertificationCard;
