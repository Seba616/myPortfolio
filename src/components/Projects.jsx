import { useLanguage } from "../context/LanguageContext";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className="py-8 px-6 max-w-2xl mx-auto text-black dark:text-white"
    >
      <h2 className="text-2xl font-bold mb-4">{t.projectsTitle}</h2>
      {projects.length === 0 ? (
        <p className="text-neutral-500 dark:text-neutral-500 italic">
          {t.projectsEmpty}
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;
