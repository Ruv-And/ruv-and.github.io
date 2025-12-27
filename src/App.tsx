import './App.css'
import Dock, { type DockItemData } from './components/Dock'
import ResumeViewer from './components/ResumeViewer'
import ExperienceList from './components/ExperienceList'
import ProjectCard from './components/ProjectCard'
import { useHash } from './hooks/useHash'

declare global {
  interface Window {
    gtag?: (command: 'event' | 'config' | 'js' | 'set', ...args: any[]) => void;
  }
}

function GithubIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function ResumeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6 2h7l5 5v13a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z" fillRule="evenodd" clipRule="evenodd" />
      <path d="M13 2.5v4a.5.5 0 00.5.5h4" stroke="currentColor" strokeWidth="1.25" />
      <path d="M8 12h8M8 15h8M8 18h5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  )
}

function HomeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.707 3.293a1 1 0 00-1.414 0l-8 8A1 1 0 004 13h1v7a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-7h1a1 1 0 00.707-1.707l-8-8z" />
    </svg>
  )
}

interface ExperienceData {
  company: string;
  role: string;
  duration: string;
  icon: string;
  link: string;
}

interface ProjectData {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

function App() {
  const { hash, navigate } = useHash()

  const experiences: ExperienceData[] = [
    {
      company: "GEICO",
      role: "Software Development Intern",
      duration: "Jun 2025 – Aug 2025",
      icon: "/assets/icons/geico.png",
      link: "https://www.geico.com"
    },
    {
      company: "E42.ai",
      role: "Software Engineering Intern",
      duration: "Jun 2024 – Aug 2024",
      icon: "/assets/icons/e42ai.jpg",
      link: "https://www.e42.ai"
    },
    {
      company: "Bear Paddle Swim School",
      role: "Swimming Instructor",
      duration: "Jun 2021 – Aug 2021",
      icon: "/assets/icons/bearpaddle.png",
      link: "https://www.bearpaddle.com"
    }
  ]

  const projects: ProjectData[] = [
    {
      id: "snipiddy",
      title: "Snipiddy",
      description: "Sign in and enter your dietary restrictions, such as food allergies or irritating ingredients, along with any diets or price restrictions. Then, snap a photo of your menu and let an AI-powered scanner take over. Within seconds, it identifies potential allergens and offers dietary recommendations tailored to your needs, helping you make confident, informed food choices!",
      technologies: ["TypeScript", "SQL", "Next.js", "Tailwind", "PostgreSQL"],
    },
    {
      id: "mileage-masters",
      title: "Mileage Masters",
      description: "My team's entry for the Business Professionals of America 2023 Website Design Team competition. A used car marketplace with cross-platform functionality, advanced payment calculators, and a contact form. This earned us first place nationally.",
      technologies: ["JavaScript", "Bootstrap", "HTML", "CSS", "Sass", "PHPMailer"],
    },
    {
      id: "qlearning-snake",
      title: "QLearning Snake Agent",
      description: "An agent trained using Q-Learning with Temporal Difference to learn how to play the classic Snake game. Also allows the user to customize the training parameters and play the game themselves.",
      technologies: ["Python", "NumPy"],
    }
  ]

  const dockItems: DockItemData[] = [
    {
      icon: <HomeIcon />, label: 'Home', onClick: () => {
        window.gtag?.('event', 'dock_click', {
          item_name: 'Home',
          click_location: 'dock'
        });
        navigate('home')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },
    {
      icon: <GithubIcon />, label: 'GitHub', onClick: () => {
        window.gtag?.('event', 'dock_click', {
          item_name: 'GitHub',
          click_location: 'dock',
          outbound: true
        });
        window.open('https://github.com/Ruv-And', '_blank', 'noreferrer')
      }
    },
    {
      icon: <LinkedinIcon />, label: 'LinkedIn', onClick: () => {
        window.gtag?.('event', 'dock_click', {
          item_name: 'LinkedIn',
          click_location: 'dock',
          outbound: true
        });
        window.open('https://linkedin.com/in/aruv-dand', '_blank', 'noreferrer')
      }
    },
    {
      icon: <ResumeIcon />, label: 'Resume', onClick: () => {
        window.gtag?.('event', 'dock_click', {
          item_name: 'Resume',
          click_location: 'dock'
        });
        navigate('resume')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  ]

  const currentProject = hash.startsWith('project/') ? hash.split('/')[1] : null
  const projectDetail = currentProject ? projects.find(p => p.id === currentProject) : null

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-400 via-gray-800 to-black">
      <Dock items={dockItems} panelHeight={68} baseItemSize={46} magnification={70} />

      <main className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        {hash === 'resume' ? (
          <ResumeViewer />
        ) : hash === 'projects' ? (
          <div className="space-y-8">
           
            <section className="space-y-8">
              <h1 className="text-5xl font-bold text-white">Projects</h1>
              <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                  />
                ))}
              </div>
            </section>
          </div>
        ) : projectDetail ? (
          <div className="space-y-8">
            
            <section className="space-y-6">
              <h1 className="text-5xl font-bold text-white">{projectDetail.title}</h1>
              <p className="text-lg text-gray-300 leading-relaxed">{projectDetail.description}</p>
              <div className="flex flex-wrap gap-2">
                {projectDetail.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-sm bg-indigo-500/20 text-indigo-200 rounded-full border border-indigo-500/30">
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>
        ) : (
          <div className="space-y-24">
            <section id="about" className="space-y-6">
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="flex-1">
                  <h2 className="text-5xl font-bold text-white">Hi, I'm Aruv Dand</h2>
                  <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mt-4">
                    I'm a student at the University of Illinois Urbana Champaign,
                    pursuing Computer Science and a certificate in data science.
                    I love finding problems and learning while trying to solve them.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <img 
                    src="/assets/images/canada.jpg" 
                    alt="Aruv" 
                    className="w-48 h-48 md:w-64 md:h-64 rounded-lg object-cover shadow-lg"
                  />
                </div>
              </div>
            </section>

            <ExperienceList experiences={experiences} onTitleClick={() => {
              window.gtag?.('event', 'section_click', {
                item_name: 'Work Experiences',
                click_location: 'main_page',
                destination: 'resume'
              });
              navigate('resume')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }} />

            <section id="projects" className="space-y-8">
              <h3 
                onClick={() => {
                  window.gtag?.('event', 'section_click', {
                    item_name: 'Projects',
                    click_location: 'main_page',
                    destination: 'projects'
                  });
                  navigate('projects')
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="text-3xl font-bold text-white cursor-pointer transition-colors hover:text-indigo-400 underline decoration-indigo-400 decoration-2 underline-offset-4"
              >
                Projects
              </h3>
            </section>
            <section className="surprise-container-right surprise-spacer">
              <div className="surprise-inline">
                <span className="surprise-boo">Boo!</span>
                <img
                  src="/assets/images/sprite.png"
                  alt="Gengar"
                  className="surprise-image-static"
                />
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
