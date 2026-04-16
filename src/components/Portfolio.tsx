import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web App',
    image: 'https://picsum.photos/seed/shop/800/600',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    github: '#'
  },
  {
    title: 'Fitness Tracker App',
    category: 'Mobile App',
    image: 'https://picsum.photos/seed/fitness/800/600',
    tags: ['Flutter', 'Firebase', 'Google Fit API'],
    link: '#',
    github: '#'
  },
  {
    title: 'AI Image Generator',
    category: 'Full Stack',
    image: 'https://picsum.photos/seed/ai/800/600',
    tags: ['Next.js', 'OpenAI API', 'Tailwind CSS'],
    link: '#',
    github: '#'
  },
  {
    title: 'Real-time Chat App',
    category: 'Web App',
    image: 'https://picsum.photos/seed/chat/800/600',
    tags: ['Socket.io', 'Express', 'React', 'Redis'],
    link: '#',
    github: '#'
  },
  {
    title: 'Task Management System',
    category: 'Backend',
    image: 'https://picsum.photos/seed/task/800/600',
    tags: ['Node.js', 'PostgreSQL', 'Docker', 'JWT'],
    link: '#',
    github: '#'
  },
  {
    title: 'Weather Dashboard',
    category: 'Web App',
    image: 'https://picsum.photos/seed/weather/800/600',
    tags: ['JavaScript', 'OpenWeather API', 'Chart.js'],
    link: '#',
    github: '#'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Featured <span className="text-gradient">Projects</span></h2>
            <p className="text-white/60 max-w-xl">
              A selection of my recent work, ranging from full-stack web applications to cross-platform mobile apps.
            </p>
          </div>
          <div className="flex gap-4">
            {['All', 'Web', 'Mobile', 'Backend'].map((cat) => (
              <button
                key={cat}
                className="px-6 py-2 rounded-full glass border border-white/10 text-sm font-medium hover:bg-neon-cyan hover:text-dark-blue transition-all"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass border border-white/10"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-blue via-dark-blue/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-neon-cyan text-xs font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] px-2 py-1 rounded-md bg-white/10 text-white/80 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <a href={project.link} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-neon-cyan hover:text-dark-blue transition-all">
                    <ExternalLink size={18} />
                  </a>
                  <a href={project.github} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-neon-cyan hover:text-dark-blue transition-all">
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
