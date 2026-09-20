import React from 'react';
import { SKILLS, SECTION_CONTENT } from '../../src/constants';
import { parseBoldText } from '../../src/utils';
import { 
  Box, Brain, Database, Cloud, Terminal, Code2, Tag, Cpu, Globe, Rocket, Monitor, 
  Wrench, Users, MessageSquare, Lightbulb, Target, Clock, Layers, BarChart, Search,
  Eye, Activity, MessageCircle, RefreshCcw, GraduationCap, Network, LineChart
} from 'lucide-react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {

  const getSkillIcon = (skillName: string) => {
    const name = skillName.toLowerCase();
    if (name.includes('python')) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="w-5 h-5 object-contain" />;
    if (name.includes('mysql')) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" className="w-5 h-5 object-contain" />;
    if (name.includes('postgresql')) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-5 h-5 object-contain" />;
    if (name.includes('redis')) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" alt="Redis" className="w-5 h-5 object-contain" />;
    if (name.includes('c/c++')) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C/C++" className="w-5 h-5 object-contain" />;
    if (name.includes('dbeaver')) return <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/DBeaver_logo.svg" alt="DBeaver" className="w-5 h-5 object-contain" />;
    if (name.includes('tensorflow')) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" className="w-5 h-5 object-contain" />;
    if (name.includes('pytorch')) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" alt="PyTorch" className="w-5 h-5 object-contain" />;
    if (name.includes('streamlit')) return <img src="https://cdn.simpleicons.org/streamlit/FF4B4B" alt="Streamlit" className="w-5 h-5 object-contain" />;
    if (name.includes('docker')) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" className="w-5 h-5 object-contain" />;
    if (name.includes('git')) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" className="w-5 h-5 object-contain" />;
    if (name.includes('google cloud') || name.includes('big query')) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" alt="GCP" className="w-5 h-5 object-contain" />;
    if (name.includes('flask')) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" alt="Flask" className="w-5 h-5 object-contain dark:invert" />;
    if (name.includes('elastic search') || name.includes('elasticsearch')) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original.svg" alt="Elastic Search" className="w-5 h-5 object-contain" />;
    if (name.includes('jira')) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" alt="Jira" className="w-5 h-5 object-contain" />;
    if (name.includes('visual studio code') || name.includes('vs code')) return <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="VS Code" className="w-5 h-5 object-contain" />;
    
    if (name.includes('google colab')) return <img src="https://cdn.simpleicons.org/googlecolab/F9AB00" alt="Google Colab" className="w-5 h-5 object-contain" />;
    if (name.includes('datagrip')) return <img src="https://cdn.simpleicons.org/datagrip/000000" alt="Datagrip" className="w-5 h-5 object-contain dark:invert" />;
    if (name.includes('meta')) return <img src="https://cdn.simpleicons.org/meta/0468FF" alt="Meta" className="w-5 h-5 object-contain" />;
    if (name.includes('microsoft')) return <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft Office" className="w-5 h-5 object-contain" />;
    if (name.includes('tableau')) return <img src="https://github.com/tableau.png" alt="Tableau" className="w-5 h-5 rounded-md object-contain" />;
    if (name.includes('navicat')) return <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Navicat_Premium_v12.png" alt="Navicat" className="w-5 h-5 object-contain" />;
    if (name.includes('trae')) return <img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://trae.ai&size=64" alt="Trae" className="w-5 h-5 rounded-md object-contain" />;
    if (name.includes('antigravity')) return <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Antigravity" className="w-5 h-5 object-contain" />;
    if (name.includes('n8n')) return <img src="https://cdn.simpleicons.org/n8n/E83462" alt="n8n" className="w-5 h-5 object-contain" />;
    if (name.includes('ollama')) return <img src="https://cdn.simpleicons.org/ollama/000000" alt="Ollama" className="w-5 h-5 object-contain dark:invert" />;
    if (name.includes('openrouter')) return <img src="https://cdn.simpleicons.org/openrouter/3668CE" alt="OpenRouter" className="w-5 h-5 object-contain" />;
    if (name.includes('flowise')) return <img src="https://github.com/FlowiseAI.png" alt="Flowise" className="w-5 h-5 rounded-md object-contain" />;
    if (name.includes('langflow')) return <img src="https://github.com/langflow-ai.png" alt="Langflow" className="w-5 h-5 rounded-md object-contain" />;
    if (name.includes('ragflow')) return <img src="https://github.com/infiniflow.png" alt="RagFlow" className="w-5 h-5 rounded-md object-contain" />;
    if (name.includes('hermes')) return <img src="https://github.com/NousResearch.png" alt="Hermes Agent" className="w-5 h-5 rounded-md object-contain" />;
    if (name.includes('groq')) return <img src="https://github.com/groq.png" alt="Groq" className="w-5 h-5 rounded-md object-contain" />;
    if (name.includes('rovo')) return <img src="https://github.com/atlassian.png" alt="Rovo" className="w-5 h-5 rounded-md object-contain" />;
    if (name.includes('machine learning')) return <Brain className="w-5 h-5 text-secondary" />;
    if (name.includes('deep learning')) return <Layers className="w-5 h-5 text-secondary" />;
    if (name.includes('data science') || name.includes('data analysis')) return <BarChart className="w-5 h-5 text-secondary" />;
    if (name.includes('data visualization')) return <LineChart className="w-5 h-5 text-secondary" />;
    if (name.includes('nlp') || name.includes('natural language')) return <MessageSquare className="w-5 h-5 text-secondary" />;
    if (name.includes('computer vision')) return <Eye className="w-5 h-5 text-secondary" />;
    if (name.includes('object detection')) return <Target className="w-5 h-5 text-secondary" />;
    if (name.includes('agentic systems')) return <Network className="w-5 h-5 text-secondary" />;
    if (name.includes('prompt engineering')) return <Terminal className="w-5 h-5 text-secondary" />;
    if (name.includes('ai model')) return <Cpu className="w-5 h-5 text-secondary" />;
    if (name.includes('problem solving')) return <Lightbulb className="w-5 h-5 text-primary" />;
    if (name.includes('critical thinking') || name.includes('analytical')) return <Search className="w-5 h-5 text-primary" />;
    if (name.includes('team collaboration')) return <Users className="w-5 h-5 text-primary" />;
    if (name.includes('mentorship')) return <GraduationCap className="w-5 h-5 text-primary" />;
    if (name.includes('communication')) return <MessageCircle className="w-5 h-5 text-primary" />;
    if (name.includes('adaptability')) return <RefreshCcw className="w-5 h-5 text-primary" />;
    if (name.includes('time management')) return <Clock className="w-5 h-5 text-primary" />;
    return <Code2 size={18} className="text-gray-500" />;
  };

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-dark relative overflow-hidden transition-colors duration-500">
      

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
            {parseBoldText(SECTION_CONTENT.skills.description)}
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
              className="bg-white dark:bg-gray-900 p-8 border border-gray-200 dark:border-gray-800 transition-all"
            >
              <h3 className="text-xl font-bold text-secondary mb-6 border-b border-gray-200 dark:border-gray-800 pb-3 flex items-center gap-2">
                {skillGroup.category.includes("Technical") && <Wrench className="w-5 h-5" />}
                {skillGroup.category.includes("Hard") && <Cpu className="w-5 h-5" />}
                {skillGroup.category.includes("Soft") && <Users className="w-5 h-5" />}
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
                    className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 text-sm rounded border border-gray-200 dark:border-gray-800 transition-all cursor-default"
                  >
                    <span className="text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors flex items-center justify-center">
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
