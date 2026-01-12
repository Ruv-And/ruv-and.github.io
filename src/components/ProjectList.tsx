function ChevronRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
}

interface ProjectData {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectListProps {
  projects: ProjectData[];
  onTitleClick?: () => void;
  onProjectClick: (projectId: string) => void;
  maxPreview?: number;
}

export default function ProjectList({ projects, onTitleClick, onProjectClick, maxPreview }: ProjectListProps) {
  const displayProjects = maxPreview ? projects.slice(0, maxPreview) : projects;
  const hasMore = maxPreview && projects.length > maxPreview;

  return (
    <section id="projects" className="space-y-6">
      <div 
        onClick={onTitleClick}
        className="flex items-center gap-3 cursor-pointer group w-fit"
      >
        <h3 className="text-3xl font-bold text-white transition-colors group-hover:text-indigo-400">
          Projects
        </h3>
        <div className="text-indigo-400 transition-transform group-hover:translate-x-1 flex items-center">
          <ChevronRightIcon />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {displayProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => {
              window.gtag?.('event', 'project_preview_click', {
                item_name: project.title,
                click_location: 'home_preview'
              });
              onProjectClick(project.id);
            }}
            className="cursor-pointer group"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700/30 hover:border-indigo-500/50 transition-all hover:scale-[1.02]">
              <div className="aspect-video w-full overflow-hidden bg-gray-800">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 text-xs bg-gray-700/50 text-gray-300 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-0.5 text-xs text-gray-400">+{project.technologies.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {hasMore && (
        <div className="flex justify-center pt-2">
          <button
            onClick={onTitleClick}
            className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors flex items-center gap-2 group"
          >
            <span>View all projects</span>
          </button>
        </div>
      )}
    </section>
  )
}
