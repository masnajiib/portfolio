
// Define your custom theme colors here
// You can use Hex codes (e.g., #3b82f6)
// Changes here will apply across the entire website

export const THEME_COLORS = {
  // Primary: Main brand color, buttons, highlights (Default: Blue)
  primary: '#3b82f6', 

  // Secondary: Accents, gradients, decorative elements (Default: Cyan)
  secondary: '#06b6d4', 

  // Dark: Background color in dark mode (Default: Slate 900)
  dark: '#0f172a', 

  // Card: Component background color in dark mode (Default: Slate 800)
  card: '#1e293b', 
};

/**
 * Helper function to convert hex to RGB string for CSS variables
 * @param hex Hex color code (e.g., #ffffff)
 * @returns RGB string (e.g., "255 255 255")
 */
export const hexToRgb = (hex: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}`
    : '0 0 0'; // Fallback to black if invalid
};
