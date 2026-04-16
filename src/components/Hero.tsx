import { motion } from 'motion/react';
import { Github, Linkedin, Send, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-xs font-bold tracking-widest uppercase mb-6"
          >
            Available for Hire
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl font-bold font-display leading-[1.1] mb-6">
            Hello, I'm <br />
            <span className="text-gradient">Ashenafi Abera</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-white/80 font-medium mb-8">
            Full Stack & Mobile App Developer
          </h2>
          
          <p className="text-white/60 text-lg max-w-lg mb-10 leading-relaxed">
            I build modern websites, powerful backend systems, and user-friendly mobile applications with a focus on performance and clean design.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl bg-neon-cyan text-dark-blue font-bold flex items-center gap-2 neon-border-strong transition-all"
            >
              Hire Me <ArrowRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl glass text-white font-bold border border-white/10 hover:bg-white/10 transition-all"
            >
              Contact Me
            </motion.button>
          </div>

          <div className="flex items-center gap-6">
            {[
              { icon: <Github size={22} />, href: 'https://github.com' },
              { icon: <Linkedin size={22} />, href: 'https://linkedin.com' },
              { icon: <Send size={22} />, href: 'https://t.me' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5, color: '#00f2ff' }}
                className="text-white/40 transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Animated Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 border-2 border-dashed border-neon-cyan/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-4 border border-neon-blue/20 rounded-full"
            />
            
            {/* Profile Image Container */}
            <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white/10 glass shadow-2xl">
              <img
                src="https://picsum.photos/seed/ashenafi/800/800"
                alt="Ashenafi Abera"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 glass-card p-4 rounded-2xl"
            >
              <div className="text-neon-cyan font-bold text-xl">5+</div>
              <div className="text-white/60 text-[10px] uppercase tracking-tighter">Years Exp.</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -left-4 glass-card p-4 rounded-2xl"
            >
              <div className="text-neon-blue font-bold text-xl">50+</div>
              <div className="text-white/60 text-[10px] uppercase tracking-tighter">Projects</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
