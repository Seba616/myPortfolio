import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

function CertificationModal({ cert, onClose }) {
  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white dark:bg-black rounded-2xl w-full max-w-3xl h-[85vh] border border-neutral-200 dark:border-neutral-800 overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-black text-white dark:bg-white dark:text-black shadow"
              aria-label="Cerrar"
            >
              <X size={16} />
            </button>

            {cert.pdf ? (
              <iframe
                src={cert.pdf}
                title={cert.title}
                className="w-full h-full"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-neutral-500 text-sm">
                Certificado no disponible aún.
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CertificationModal;
