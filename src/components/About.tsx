import { motion } from 'motion/react';
import { FileText, User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass-card p-2">
              <img
                src="https://picsum.photos/seed/coding/800/800"
                alt="Working on code"
                className="w-full h-full object-cover rounded-2xl opacity-80 hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-neon-cyan/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-neon-cyan font-bold uppercase tracking-widest text-sm mb-4">
              <User size={18} />
              About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-8">
              Turning complex problems into <span className="text-gradient">elegant solutions</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              I am a passionate developer specializing in frontend, backend, and mobile app development. With a strong foundation in computer science and a keen eye for design, I create responsive web applications, scalable APIs, and modern mobile apps.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              My goal is to build software that not only works perfectly but also provides an exceptional user experience. I thrive in challenging environments and am always eager to learn new technologies.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl glass border border-white/10 flex items-center gap-3 font-bold hover:bg-white/10 transition-all"
            >
              <FileText size={20} className="text-neon-cyan" />
              View Full Resume
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
