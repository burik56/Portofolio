import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Real-time analytics dashboard for tracking social media metrics with interactive charts and data visualization.',
      tech: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, team collaboration features, and project tracking.',
      tech: ['Next.js', 'Supabase', 'Tailwind CSS', 'WebSocket'],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
    },
    {
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with accurate forecasts, location search, and interactive weather maps.',
      tech: ['React', 'OpenWeather API', 'Mapbox', 'CSS Modules'],
      image: 'https://images.pexels.com/photos/1242348/pexels-photo-1242348.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
    },
    {
      title: 'Portfolio CMS',
      description: 'Headless CMS for managing portfolio content with drag-and-drop interface and real-time preview.',
      tech: ['React', 'Express', 'MongoDB', 'AWS S3'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
    },
    {
      title: 'Fitness Tracking Platform',
      description: 'Comprehensive fitness tracker with workout plans, progress monitoring, and nutrition tracking.',
      tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Chart.js'],
      image: 'https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 glow-blue">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto glow-blue"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="cyber-border rounded-lg overflow-hidden bg-gradient-to-br from-blue-500/5 to-transparent backdrop-blur-sm group hover:from-blue-500/10 transition-all duration-300"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-blue-400 glow-blue">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Github size={20} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
