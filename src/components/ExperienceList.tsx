interface ExperienceData {
  company: string;
  role: string;
  duration: string;
  icon: string;
  link: string;
}

interface ExperienceListProps {
  experiences: ExperienceData[];
  onTitleClick?: () => void;
}

export default function ExperienceList({ experiences, onTitleClick }: ExperienceListProps) {
  return (
    <section id="experience" className="space-y-6">
      <h3 
        onClick={onTitleClick}
        className="text-3xl font-bold text-white cursor-pointer transition-colors hover:text-indigo-400 underline decoration-indigo-400 decoration-2 underline-offset-4"
      >
        Work Experience
      </h3>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <a key={index} href={exp.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/30 hover:border-indigo-500/50 transition cursor-pointer">
            <div className="h-12 w-12 rounded-lg bg-gray-800 border border-gray-700 overflow-hidden flex items-center justify-center">
              <img src={exp.icon} alt={`${exp.company} logo`} className="h-full w-full object-cover scale-100" loading="lazy" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-semibold">{exp.role}</span>
              <span className="text-gray-300 text-sm">{exp.company}</span>
              <span className="text-gray-400 text-xs">{exp.duration}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
