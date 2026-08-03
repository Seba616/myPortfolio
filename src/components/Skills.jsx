import {
  SiPython,
  SiJavascript,
  SiReact,
  SiGit,
  SiHtml5,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiDjango,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "SQL", icon: SiMysql, color: "#4479A1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Django", icon: SiDjango, color: "#092E20" },
  ];

  return (
    <section
      id="skills"
      className="py-8 px-6 max-w-2xl mx-auto bg-white dark:bg-black text-black dark:text-white"
    >
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map(({ name, icon: Icon, color }) => (
          <span
            key={name}
            className="flex items-center gap-2 px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-full text-sm"
          >
            <Icon size={16} color={color} />
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
