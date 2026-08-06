import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { certifications } from "../data/certifications";
import CertificationCard from "./CertificationCard";
import CertificationModal from "./CertificationModal";

function Certifications() {
  const [selected, setSelected] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 3000, stopOnInteraction: false })],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = (i) => emblaApi && emblaApi.scrollTo(i);

  return (
    <section
      id="certifications"
      className="py-8 px-6 max-w-2xl mx-auto text-black dark:text-white"
    >
      <h2 className="text-2xl font-bold mb-4">Certificaciones</h2>

      {certifications.length === 0 ? (
        <p className="text-neutral-500 italic">Próximamente...</p>
      ) : (
        <div className="flex flex-col items-center">
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="flex-[0_0_70%] sm:flex-[0_0_45%] min-w-0 px-2"
                >
                  <CertificationCard cert={cert} onExpand={setSelected} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            {certifications.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === selectedIndex
                    ? "w-6 bg-black dark:bg-white"
                    : "w-2 bg-neutral-300 dark:bg-neutral-700"
                }`}
                aria-label={`Ir a certificación ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      <CertificationModal cert={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

export default Certifications;
