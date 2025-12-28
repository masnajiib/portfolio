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
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-800 animate-pulse z-10">
          <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
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
