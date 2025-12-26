import React from 'react';
import { SKILLS, SECTION_CONTENT } from '../../constants';
import { Box, Brain, Database, Cloud, Terminal, Code2, Tag, Cpu, Globe, Rocket, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {

  // Helper function to map skill names to Devicon classes or Lucide icons
  const getSkillIcon = (skillName: string) => {
    const name = skillName.toLowerCase();
    
    // Custom mapping for items not in Devicon or specific AI tools
    if (name.includes('flowise')) return <Brain size={20} />;
    if (name.includes('roboflow')) return <Box size={20} />;
    if (name.includes('ultralytics')) return <Box size={20} />;
    if (name.includes('label studio')) return <Tag size={20} />;
    if (name.includes('lm studio')) return <Terminal size={20} />;
    if (name.includes('ollama')) return <Terminal size={20} />;
    if (name.includes('tableau')) return <div className="text-xs font-bold">TB</div>;
    if (name.includes('openrouter')) return <Cloud size={20} />;
    if (name.includes('groq')) return <Cpu size={20} />;
    if (name.includes('datagrip')) return <Database size={20} />;
    if (name.includes('navicat')) return <Database size={20} />;
    if (name.includes('trae')) return <Code2 size={20} />;
    if (name.includes('antigravity')) return <Rocket size={20} />;
    if (name.includes('meta')) return <Globe size={20} />;
    if (name.includes('office')) return <Monitor size={20} />;
    
    // Devicon mapping
    const iconMap: {[key: string]: string} = {
      'python': 'devicon-python-plain',
      'c/c++': 'devicon-cplusplus-plain',
      'sql': 'devicon-mysql-plain',
      'mysql': 'devicon-mysql-plain',
      'postgresql': 'devicon-postgresql-plain',
      'redis': 'devicon-redis-plain',
      'docker': 'devicon-docker-plain',
      'git': 'devicon-git-plain',
      'google cloud console': 'devicon-googlecloud-plain',
      'gcp': 'devicon-googlecloud-plain',
      'flask': 'devicon-flask-original',
      'streamlit': 'devicon-python-plain',
      'vs code': 'devicon-vscode-plain',
      'visual studio code': 'devicon-vscode-plain',
      'tensorflow': 'devicon-tensorflow-original',
      'pytorch': 'devicon-pytorch-original',
      'pandas': 'devicon-pandas-original',
      'numpy': 'devicon-numpy-original',
      'google colab': 'devicon-google-plain',
    };

    // Check specific keys first
    if (iconMap[name]) {
      return <i className={`${iconMap[name]} text-lg`} />;
    }

    // Check partial matches for devicons
    if (name.includes('sql')) return <i className="devicon-mysql-plain text-lg" />;
    if (name.includes('python')) return <i className="devicon-python-plain text-lg" />;
    if (name.includes('docker')) return <i className="devicon-docker-plain text-lg" />;

    // Default icons based on category/keywords
    if (name.includes('data')) return <Database size={18} />;
    if (name.includes('vision')) return <Box size={18} />;
    if (name.includes('nlp')) return <Brain size={18} />;
    if (name.includes('learning')) return <Brain size={18} />;

    return <Code2 size={18} />;
  };

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-dark relative overflow-hidden transition-colors duration-500">
       {/* Texture Pattern: Small Isometric-style Rectangular Grid (Millimeter paper) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] z-0"></div>
      
      {/* Radial Gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-200/50 via-gray-50 to-gray-50 dark:from-slate-900/50 dark:via-dark dark:to-dark z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center"
        >
          {SECTION_CONTENT.skills.title}
        </motion.h2>
        {SECTION_CONTENT.skills.description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 text-center"
          >
            {SECTION_CONTENT.skills.description}
          </motion.p>
        )}
        {!SECTION_CONTENT.skills.description && <div className="mb-12"></div>}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((skillGroup, index) => (
            <motion.div 
              key={skillGroup.category} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-700 transition-all shadow-lg shadow-gray-200/50 dark:shadow-none"
            >
              <h3 className="text-xl font-bold text-secondary mb-6 border-b border-gray-200 dark:border-gray-800 pb-3 flex items-center gap-2">
                {skillGroup.category.includes("AI") && <Brain className="w-5 h-5" />}
                {skillGroup.category.includes("Programming") && <Database className="w-5 h-5" />}
                {skillGroup.category.includes("Tools") && <Cloud className="w-5 h-5" />}
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, i) => (
                  <motion.div 
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + (i * 0.05) }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-300 dark:border-gray-700 hover:border-primary hover:text-gray-900 dark:hover:text-white transition-all cursor-default group"
                  >
                    <span className="text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors">
                      {getSkillIcon(skill)}
                    </span>
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;