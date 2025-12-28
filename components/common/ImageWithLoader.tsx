import React, { useState } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface ImageWithLoaderProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
  motionProps?: MotionProps;
  useMotion?: boolean;
}

const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({ 
  src, 
  alt, 
  className, 
  containerClassName = "",
  motionProps,
  useMotion = false,
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const Component = useMotion ? motion.img : 'img';

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 z-10">
          <div className="flex space-x-1 mb-2">
            <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"></div>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium animate-pulse">Loading preview...</span>
        </div>
      )}
      
      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-400">
          <span className="text-xs">Failed to load</span>
        </div>
      ) : (
        // @ts-ignore - motion props are compatible but TS might complain about specific HTML attributes
        <Component
          src={src}
          alt={alt}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onLoad={handleLoad}
          onError={handleError}
          {...(useMotion ? motionProps : {})}
          {...props}
        />
      )}
    </div>
  );
};

export default ImageWithLoader;
