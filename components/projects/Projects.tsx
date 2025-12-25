import React, { useState, useEffect } from 'react';
import { Folder, ExternalLink, Star, GitFork } from 'lucide-react';
import { PROJECTS } from '../../constants';
import { motion } from 'framer-motion';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

const Projects: React.FC = () => {
  const [showFallback, setShowFallback] = useState(false);
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/masnajiib/repos?sort=updated&per_page=6')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data);
        }
      })
      .catch(err => console.error("Failed to fetch repos", err));
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-dark relative transition-colors duration-500">
        {/* Subtle grid pattern bg */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mb-8">
            A selection of AI, Computer Vision, and Data Analysis projects I've developed for enterprise and research.
          </p>

          {/* Featured Video Section - Universal Fallback */}
          <div className="w-full max-w-3xl mx-auto mb-16">
            {!showFallback ? (
              /* LinkedIn Iframe Embed - Try first for all browsers */
              <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl bg-white dark:bg-black relative">
                <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                  <iframe 
                    src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7289203499630829568?compact=1" 
                    className="absolute inset-0 w-full h-full bg-white dark:bg-black"
                    frameBorder="0" 
                    allowFullScreen={true}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    title="Featured Project Video"
                    onError={() => setShowFallback(true)}
                  ></iframe>
                </div>
                
                {/* Fallback Link */}
                <div className="text-center py-3 bg-gray-50/50 dark:bg-card/50 border-t border-gray-200 dark:border-gray-800">
                  <a 
                    href="https://www.linkedin.com/feed/update/urn:li:ugcPost:7289203499630829568" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowFallback(true);
                    }}
                    className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-primary transition-colors"
                  >
                    <ExternalLink size={12} />
                    <span>Can't see the video? Click here</span>
                  </a>
                </div>
              </div>
            ) : (
              /* Clickable Preview - Fallback for all browsers that block iframe */
              <a 
                href="https://www.linkedin.com/feed/update/urn:li:ugcPost:7289203499630829568" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl bg-gray-100 dark:bg-gray-900 hover:border-primary/50 transition-all duration-500">
                  <div className="relative w-full aspect-video">
                    <motion.img 
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                      src="/assets/project/elang_ai.jpg" 
                      alt="Featured Project - Elang AI"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay with Play Button */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent dark:from-black/80 dark:via-black/40 dark:to-transparent flex items-center justify-center">
                      <div className="bg-primary/90 group-hover:bg-primary rounded-full p-6 transition-all duration-500 transform group-hover:scale-110 shadow-lg">
                        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 bg-white/80 dark:bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                        <ExternalLink size={16} className="text-primary" />
                        Watch on LinkedIn
                      </span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="p-6 bg-white/50 dark:bg-card/50 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                      Featured: Elang AI Launch Event
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Official AI model launch at the Circle Java Kick-Off Meeting in Surabaya with executives and 400+ participants from Indosat Ooredoo Hutchison.
                    </p>
                  </div>
                </div>
              </a>
            )}
          </div>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-8"
        >
          {PROJECTS.map((project) => (
            <motion.div 
              key={project.id} 
              variants={item}
              whileHover={{ y: -8 }}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.4rem)] bg-white dark:bg-card rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-colors group flex flex-col shadow-sm dark:shadow-none"
            >
              {/* Project Image - Updated to 16:9 Aspect Ratio (PowerPoint Style) */}
              <div className="aspect-video w-full overflow-hidden relative bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                  
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-pointer">
                      <motion.img 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                        src={project.image || "https://picsum.photos/400/250"} 
                        alt={project.title}
                        className="w-full h-full object-contain" 
                      />
                    </a>
                  ) : (
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      src={project.image || "https://picsum.photos/400/250"} 
                      alt={project.title}
                      className="w-full h-full object-contain"
                    />
                  )}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-gray-100 dark:bg-gray-900 rounded-lg text-primary">
                    <Folder size={20} />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">{project.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                  {project.description[0]}
                </p>

                {/* Footer: Tags and External Link Symbol */}
                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between gap-4">
                   <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-2 py-1 text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                   </div>

                   {/* Icon Only Link */}
                   {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-all"
                      >
                        <ExternalLink size={18} />
                      </a>
                   )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Open Source Contributions */}
        {repos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mt-24"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Latest Open Source Contributions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo) => (
                <a 
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-white dark:bg-card rounded-xl border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-all hover:-translate-y-1 shadow-sm dark:shadow-none group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <Folder className="text-primary w-6 h-6" />
                    <ExternalLink className="text-gray-400 group-hover:text-primary w-5 h-5 transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    {repo.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 h-10">
                    {repo.description || "No description available."}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3" />
                      {repo.forks_count}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;