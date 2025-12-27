interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
}

export default function ProjectCard({ title, description, technologies }: ProjectCardProps) {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/30 hover:border-gray-600/50 transition">
      <h4 className="text-xl font-semibold text-white mb-3">{title}</h4>
      <p className="text-sm text-gray-300 leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, i) => (
          <span key={i} className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
