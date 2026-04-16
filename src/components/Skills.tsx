import { motion } from 'motion/react';
import { Code2, Database, Smartphone, Palette } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Code2 className="text-neon-cyan" />,
    skills: [
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
    ]
  },
  {
    title: 'Backend',
    icon: <Database className="text-neon-blue" />,
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 87 },
      { name: 'MongoDB', level: 82 },
      { name: 'MySQL', level: 80 },
    ]
  },
  {
    title: 'Mobile',
    icon: <Smartphone className="text-purple-500" />,
    skills: [
      { name: 'Flutter', level: 85 },
      { name: 'React Native', level: 80 },
      { name: 'Dart', level: 83 },
      { name: 'Firebase', level: 88 },
    ]
  },
  {
    title: 'Design',
    icon: <Palette className="text-pink-500" />,
    skills: [
      { name: 'Figma', level: 75 },
      { name: 'UI/UX Design', level: 70 },
      { name: 'Responsive Design', level: 90 },
      { name: 'Motion Design', level: 65 },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Technical <span className="text-gradient">Expertise</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different domains of software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl hover:border-neon-cyan/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:neon-border transition-all">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white/80">{skill.name}</span>
                      <span className="text-neon-cyan font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
