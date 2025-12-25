import React, { useState, useEffect, useRef } from 'react';
import { Download, ChevronRight, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO, RESUME_URL, SOCIAL_LINKS } from '../../constants';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';

const Hero: React.FC = () => {
  const [displayRole, setDisplayRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Physics based rotation state
  const rotation = useMotionValue(0);
  const velocity = useRef(0.5); // Initial idle speed (clockwise)
  const isDragging = useRef(false);
  const lastTime = useRef(performance.now());

  // Physics Loop for Fidget Spinner Effect
  useAnimationFrame((time) => {
    const now = performance.now();
    const deltaTime = Math.min(now - lastTime.current, 32); // Cap delta to avoid jumps
    lastTime.current = now;

    if (!isDragging.current) {
      // Time-normalized friction (roughly 0.98 per 16ms frame)
      const friction = Math.pow(0.98, deltaTime / 16);
      const idleSpeed = 0.5; 
      
      if (Math.abs(velocity.current) > idleSpeed) {
        velocity.current *= friction;
      } else {
        // Recovery towards idle clockwise rotation
        const recoveryFactor = 0.002 * deltaTime; 
        velocity.current = velocity.current * (1 - recoveryFactor) + idleSpeed * recoveryFactor;
      }
      
      // Update rotation based on velocity and time
      rotation.set(rotation.get() + velocity.current * (deltaTime / 16));
    }
  });

  const handlePanStart = () => {
    isDragging.current = true;
  };

  const handlePan = (event: any, info: any) => {
    // Calculate velocity based on drag movement delta
    // We use info.delta.x and y to make it feel responsive in all drag directions
    const sensitivity = 0.4; 
    const dragForce = (info.delta.x - info.delta.y) * sensitivity;
    velocity.current = dragForce;
    
    // Immediate feedback
    rotation.set(rotation.get() + dragForce);
  };

  const handlePanEnd = () => {
    isDragging.current = false;
  };

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000; // 1 second for smooth scroll
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Easing function for smooth animation (easeInOutCubic)
        const easeInOutCubic = (t: number): number => {
          return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };
        
        window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };
      
      requestAnimationFrame(animation);
    }
  };

  // Find WhatsApp link
  const whatsappLink = SOCIAL_LINKS.find(link => link.name === 'WhatsApp')?.href || "#";

  useEffect(() => {
    const roles = PERSONAL_INFO.typingRoles;
    const currentRole = roles[roleIndex];
    
    let timeout: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      if (displayRole.length > 0) {
        timeout = setTimeout(() => {
          setDisplayRole(currentRole.substring(0, displayRole.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    } else {
      if (displayRole.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayRole(currentRole.substring(0, displayRole.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayRole, isDeleting, roleIndex]);

  return (
    <section id="about" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-gray-50 dark:bg-dark transition-colors duration-500">
      {/* Texture Pattern: Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#00000033_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.1] z-0"></div>

      {/* Background Glows */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="order-2 lg:order-1 space-y-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-medium tracking-wider text-sm uppercase">Welcome to my portfolio</span>
            <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 dark:drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                {PERSONAL_INFO.firstName} <br className="hidden md:block" /> {PERSONAL_INFO.lastName}
              </span>
            </h1>
            <h2 className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light flex items-center justify-center md:justify-start h-8">
              <span>{displayRole}</span>
              <span className="animate-pulse ml-1 text-primary">|</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-600 dark:text-gray-400 text-lg max-w-lg leading-relaxed mx-auto md:mx-0"
          >
            {PERSONAL_INFO.about}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-secondary to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-bold rounded-full flex items-center justify-center transition-all shadow-lg shadow-cyan-500/25 border border-transparent"
            >
              Hire Me Now <MessageCircle className="ml-2 w-4 h-4 fill-current" />
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#projects');
              }}
              className="px-8 py-3 bg-primary hover:bg-blue-600 text-white font-medium rounded-full flex items-center justify-center transition-all shadow-lg shadow-blue-500/25"
            >
              View Projects <ChevronRight className="ml-2 w-4 h-4" />
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={RESUME_URL}
              target="_blank"
              download
              className="px-8 py-3 border border-gray-300 dark:border-gray-600 hover:border-gray-900 dark:hover:border-white text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium rounded-full flex items-center justify-center transition-all group"
            >
              <Download className="mr-2 w-4 h-4 group-hover:animate-bounce" />
              Download CV
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex items-center gap-6 pt-2 justify-center md:justify-start"
          >
            {SOCIAL_LINKS.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#3b82f6' }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-500 dark:text-gray-400 transition-colors"
                title={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
        >
           {/* Interactive Fidget Spinner Area */}
           <motion.div 
             className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px] flex items-center justify-center cursor-grab active:cursor-grabbing"
             onPanStart={handlePanStart}
             onPan={handlePan}
             onPanEnd={handlePanEnd}
             style={{ touchAction: 'none' }} // CRITICAL: Prevents scrolling interference on mobile/tablet
           >
              {/* Rotating Segmented Border */}
              <motion.div 
                className="absolute inset-0 z-0"
                style={{ rotate: rotation }}
              >
                 <svg className="w-full h-full dark:drop-shadow-[0_0_15px_rgba(6,182,212,0.3)] pointer-events-none" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="48" 
                      fill="none" 
                      stroke="url(#borderGradient)" 
                      strokeWidth="2" 
                      strokeDasharray="24 16"
                      strokeLinecap="round"
                    />
                 </svg>
              </motion.div>
              
              {/* Inner Profile Image - Remains Static */}
              <div className="relative w-[85%] h-[85%] rounded-full border border-gray-200 dark:border-gray-800 overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.3)] dark:shadow-[0_0_30px_rgba(6,182,212,0.5)] z-10 bg-white dark:bg-gray-900 pointer-events-none select-none">
                 <img 
                   src={PERSONAL_INFO.profileImage}
                   alt={`${PERSONAL_INFO.firstName} ${PERSONAL_INFO.lastName}`}
                   className="w-full h-full rounded-full object-cover"
                   draggable="false"
                 />
              </div>
           </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;