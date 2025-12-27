import { useEffect } from 'react';
import { METADATA } from '../constants';

const SEO = () => {
  useEffect(() => {
    // Update Title
    document.title = METADATA.title;
    
    // Helper to update or create meta tags
    const updateMeta = (selector: string, attribute: string, value: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        // Parse selector to set attributes for new element
        // e.g. meta[name="description"] -> setAttribute('name', 'description')
        const nameMatch = selector.match(/name="([^"]+)"/);
        const propertyMatch = selector.match(/property="([^"]+)"/);
        
        if (nameMatch) element.setAttribute('name', nameMatch[1]);
        if (propertyMatch) element.setAttribute('property', propertyMatch[1]);
        
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    // Standard Meta
    updateMeta('meta[name="description"]', 'content', METADATA.description);

    // Open Graph
    updateMeta('meta[property="og:type"]', 'content', METADATA.type);
    updateMeta('meta[property="og:url"]', 'content', METADATA.url);
    updateMeta('meta[property="og:title"]', 'content', METADATA.title);
    updateMeta('meta[property="og:description"]', 'content', METADATA.description);
    updateMeta('meta[property="og:image"]', 'content', METADATA.image);

    // Twitter
    updateMeta('meta[property="twitter:card"]', 'content', METADATA.twitterCard);
    updateMeta('meta[property="twitter:url"]', 'content', METADATA.url);
    updateMeta('meta[property="twitter:title"]', 'content', METADATA.title);
    updateMeta('meta[property="twitter:description"]', 'content', METADATA.description);
    updateMeta('meta[property="twitter:image"]', 'content', METADATA.image);

  }, []);

  return null;
};

export default SEO;
