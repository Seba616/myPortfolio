import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-black flex flex-col"
    >
      <div className="relative h-40 bg-neutral-100 dark:bg-neutral-900">
        {project.video && (
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute top-2 right-2 flex gap-1.5">
          <a
            href={project.website}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 px-2 py-1 rounded-full bg-black text-white dark:bg-white dark:text-black text-[10px] font-medium shadow"
          >
            <Globe size={10} />
            Website
          </a>

          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 px-2 py-1 rounded-full bg-black text-white dark:bg-white dark:text-black text-[10px] font-medium shadow"
          >
            <FaGithub size={10} />
            Source
          </a>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-sm mb-0.5">{project.title}</h3>
        <p className="text-[11px] text-neutral-500 mb-2">{project.dateRange}</p>
        <p className="text-neutral-600 dark:text-neutral-400 text-xs mb-3 leading-relaxed line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 border border-neutral-300 dark:border-neutral-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
