import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Download, ChevronRight, MessageCircle, Mail } from 'lucide-react';
import { PERSONAL_INFO, RESUME_URL, SOCIAL_LINKS, PROFILE_BACKGROUND_STYLE, PROFILE_BORDER_STYLE } from '../../src/constants';
import { parseBoldText } from '../../src/utils';
import { THEME_COLORS } from '../../src/theme';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import ImageWithLoader from '../common/ImageWithLoader';

const Hero: React.FC = () => {
  const [displayRole, setDisplayRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const networkDots = useMemo(() => {
    return [...Array(15)].map((_, i) => ({
      id: i,
      top: `${Math.floor(Math.random() * 90) + 5}%`,
      left: `${Math.floor(Math.random() * 90) + 5}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${2 + Math.random() * 3}s`
    }));
  }, []);
  const rotation = useMotionValue(0);
  const velocity = useRef(0.5); // Initial idle speed (clockwise)
  const isDragging = useRef(false);
  const lastTime = useRef(performance.now());
  useAnimationFrame((time) => {
    const now = performance.now();
    const deltaTime = Math.min(now - lastTime.current, 32); // Cap delta to avoid jumps
    lastTime.current = now;

    if (!isDragging.current) {
      const friction = Math.pow(0.98, deltaTime / 16);
      const idleSpeed = 0.5; 
      
      if (Math.abs(velocity.current) > idleSpeed) {
        velocity.current *= friction;
      } else {
        const recoveryFactor = 0.002 * deltaTime; 
        velocity.current = velocity.current * (1 - recoveryFactor) + idleSpeed * recoveryFactor;
      }
      rotation.set(rotation.get() + velocity.current * (deltaTime / 16));
    }
  });

  const handlePanStart = () => {
    isDragging.current = true;
  };

  const handlePan = (event: any, info: any) => {
    const sensitivity = 0.4; 
    const dragForce = (info.delta.x - info.delta.y) * sensitivity;
    velocity.current = dragForce;
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
  const whatsappLink = SOCIAL_LINKS.find(link => link.name === 'WhatsApp')?.href || "#";
  const renderProfileBackground = () => {
    switch (PROFILE_BACKGROUND_STYLE) {
      case 'gradient-blob':
        return (
          <div className="absolute inset-0 bg-white dark:bg-gray-900">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-purple-500/40 to-secondary/40 blur-2xl scale-110 animate-pulse" />
          </div>
        );
      case 'geometric-circle':
        return (
          <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
             <div className="absolute w-[90%] h-[90%] border border-gray-300 dark:border-gray-700 rounded-full" />
             <div className="absolute w-[70%] h-[70%] border border-dashed border-secondary/30 rounded-full animate-[spin_10s_linear_infinite]" />
          </div>
        );
      case 'tech-dots':
        return (
          <div className="absolute inset-0 bg-white dark:bg-gray-900">
            <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-gray-900" />
          </div>
        );
      case 'solid-accent':
        return (
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900" />
        );
      case 'tech-ring':
        return (
          <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
             <div className="absolute w-[95%] h-[95%] border-2 border-dashed border-primary/40 rounded-full animate-[spin_20s_linear_infinite]" />
             <div className="absolute w-[85%] h-[85%] border border-secondary/30 rounded-full" />
             <div className="absolute w-[75%] h-[75%] border-t-2 border-r-2 border-primary/60 rounded-full animate-[spin_3s_linear_infinite]" />
             <div className="absolute w-[60%] h-[60%] bg-primary/10 blur-xl rounded-full" />
          </div>
        );
              case 'ai-network':
          return (
            <div className="absolute inset-0 bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden">
               <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                 <path d="M 10,20 L 30,40 L 70,30 L 90,60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-400 dark:text-gray-500" />
                 <path d="M 30,40 L 40,80 L 90,60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-400 dark:text-gray-500" />
                 <path d="M 10,70 L 40,80 L 60,95" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-400 dark:text-gray-500" />
                 <circle cx="10" cy="20" r="1.5" className="fill-gray-400 dark:fill-gray-500" />
                 <circle cx="30" cy="40" r="2" className="fill-secondary opacity-70" />
                 <circle cx="70" cy="30" r="1.5" className="fill-gray-400 dark:fill-gray-500" />
                 <circle cx="90" cy="60" r="2" className="fill-primary opacity-70" />
                 <circle cx="40" cy="80" r="2" className="fill-secondary opacity-70" />
                 <circle cx="10" cy="70" r="1.5" className="fill-gray-400 dark:fill-gray-500" />
                 <circle cx="60" cy="95" r="1.5" className="fill-gray-400 dark:fill-gray-500" />
               </svg>
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,white_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_40%,#0f172a_100%)] pointer-events-none" />
            </div>
          );case 'none':
      default:
        return <div className="absolute inset-0 bg-white dark:bg-gray-900" />;
    }
  };
  const renderProfileBorder = () => {
    switch (PROFILE_BORDER_STYLE) {
              case 'simple-rotate':
          return (
            <motion.div 
              className="absolute inset-0 z-0"
              style={{ rotate: rotation }}
            >
               <svg className="w-full h-full overflow-visible pointer-events-none" viewBox="0 0 100 100">
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="48" 
                    fill="none" 
                    stroke={THEME_COLORS.primary} 
                    strokeWidth="2" 
                    strokeDasharray="24 16"
                    strokeLinecap="round"
                    className="opacity-70 dark:opacity-100"
                  />
               </svg>
            </motion.div>
          );case 'pulse-glow':
        return (
          <div className="absolute inset-0 z-0 rounded-full animate-pulse">
             <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/50 to-secondary/50 blur-xl opacity-50" />
             <div className="absolute inset-0 rounded-full border-4 border-primary/30" />
          </div>
        );
      case 'tech-dashed':
        return (
          <div className="absolute inset-0 z-0 animate-[spin_10s_linear_infinite]">
             <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100">
                <circle 
                  cx="50" 
                  cy="50" 
                  r="48" 
                  fill="none" 
                  stroke={THEME_COLORS.primary} 
                  strokeWidth="1" 
                  strokeDasharray="4 4"
                />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="44" 
                  fill="none" 
                  stroke={THEME_COLORS.secondary} 
                  strokeWidth="1" 
                  strokeDasharray="10 10"
                  strokeOpacity="0.5"
                />
             </svg>
          </div>
        );
      case 'gradient-flow':
        return (
          <div className="absolute inset-0 z-0 rounded-full p-1 bg-gradient-to-r from-primary via-purple-500 to-secondary animate-spin-slow">
             <div className="absolute inset-0 rounded-full bg-white dark:bg-dark m-[2px]" />
          </div>
        );
      case 'none':
      default:
        return null;
    }
  };

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
    <section id="home" className="min-h-screen flex items-center pt-20 pb-20 relative overflow-hidden dark:bg-dark transition-colors duration-500" style={{ backgroundColor: document.documentElement.classList.contains('dark') ? '' : THEME_COLORS.light }}>
      

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
              <span className="text-primary">
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
            {parseBoldText(PERSONAL_INFO.about)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap gap-2 justify-center md:justify-start mt-4 mb-8"
          >
            {PERSONAL_INFO.typingRoles.map((role, index) => (
              <span 
                key={index} 
                className="px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md transition-all hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-900 dark:hover:text-white cursor-default"
              >
                {role}
              </span>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap gap-3 justify-center md:justify-start"
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary hover:bg-blue-600 text-white font-bold rounded-full flex items-center justify-center transition-all shadow-lg shadow-blue-500/25 border border-transparent"
            >
              Chat on WhatsApp <MessageCircle className="ml-2 w-4 h-4 fill-current" />
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="px-6 py-3 bg-primary hover:bg-blue-600 text-white font-bold rounded-full flex items-center justify-center transition-all shadow-lg shadow-blue-500/25 border border-transparent"
            >
              Get in Touch <Mail className="ml-2 w-4 h-4" />
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={RESUME_URL}
              target="_blank"
              download
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:border-gray-900 dark:hover:border-white text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium rounded-full flex items-center justify-center transition-all group"
            >
              <Download className="mr-2 w-4 h-4 group-hover:animate-bounce" />
              Download CV
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex items-center gap-6 pt-2 justify-center md:justify-start mb-12"
          >
            {SOCIAL_LINKS.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
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
           <motion.div 
             className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px] flex items-center justify-center cursor-grab active:cursor-grabbing"
             onPanStart={handlePanStart}
             onPan={handlePan}
             onPanEnd={handlePanEnd}
             style={{ touchAction: 'none' }} // CRITICAL: Prevents scrolling interference on mobile/tablet
           >
              {renderProfileBorder()}
              <div className="relative w-[85%] h-[85%] rounded-full border border-gray-200 dark:border-gray-800 overflow-hidden z-10 pointer-events-none select-none">
                 {renderProfileBackground()}
                 <ImageWithLoader 
                   src={PERSONAL_INFO.profileImage}
                   alt={`${PERSONAL_INFO.firstName} ${PERSONAL_INFO.lastName}`}
                   className="relative w-full h-full rounded-full object-cover z-10" priorityLcp={true}
                   containerClassName="w-full h-full"
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
