import { motion } from 'motion/react';
import { Layout, Server, Smartphone, Figma, Globe, Zap } from 'lucide-react';

const services = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, high-performance web applications with modern frameworks like React and Next.js.',
    icon: <Layout className="text-neon-cyan" />,
  },
  {
    title: 'Backend Development',
    description: 'Creating scalable APIs and robust server-side logic using Node.js, Express, and various databases.',
    icon: <Server className="text-neon-blue" />,
  },
  {
    title: 'Mobile App Development',
    description: 'Developing cross-platform mobile applications for iOS and Android using Flutter and React Native.',
    icon: <Smartphone className="text-purple-500" />,
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive and visually appealing user interfaces with a focus on user experience and accessibility.',
    icon: <Figma className="text-pink-500" />,
  },
  {
    title: 'Web Optimization',
    description: 'Optimizing web performance, SEO, and ensuring cross-browser compatibility for a seamless experience.',
    icon: <Zap className="text-yellow-500" />,
  },
  {
    title: 'Cloud Solutions',
    description: 'Deploying and managing applications on cloud platforms like AWS, Google Cloud, and Firebase.',
    icon: <Globe className="text-green-500" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">My <span className="text-gradient">Services</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            I offer a wide range of development and design services to help you bring your ideas to life and grow your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-10 rounded-3xl group hover:border-neon-cyan/40 transition-all cursor-default"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-neon-cyan transition-colors">{service.title}</h3>
              <p className="text-white/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
