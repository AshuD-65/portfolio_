import { Github, Linkedin, Send, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <a href="#home" className="text-2xl font-bold font-display tracking-tighter">
              <span className="text-white">Ashenafi</span>
              <span className="text-neon-cyan">.</span>
            </a>
            <p className="text-white/40 text-sm mt-2 max-w-xs">
              Building the future of the web and mobile applications with passion and precision.
            </p>
          </div>

          <div className="flex gap-6">
            {[
              { icon: <Github size={20} />, href: '#' },
              { icon: <Linkedin size={20} />, href: '#' },
              { icon: <Send size={20} />, href: '#' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs font-medium uppercase tracking-widest">
          <div>© 2026 Ashenafi Abera. All rights reserved.</div>
          <div className="flex items-center gap-1">
            Made with <Heart size={12} className="text-red-500 fill-red-500" /> by Ashenafi
          </div>
        </div>
      </div>
    </footer>
  );
}
