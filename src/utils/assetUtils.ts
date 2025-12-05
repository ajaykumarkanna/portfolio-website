// Utility functions for asset management

// Simple approach to avoid TypeScript issues with import.meta.glob
// We'll manually maintain a mapping of assets since dynamic imports with subdirectories
// can cause TypeScript issues

// Helper function to create display names from file names
const createDisplayName = (fileName: string): string => {
  const nameWithoutExt = fileName.split('.')[0];
  return nameWithoutExt
    .replace(/[_-]/g, ' ')
    .replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};

// Manually maintained asset map - this will be updated when assets change
const assetMap: Record<string, string> = {
  // Profile images
  'Profile Image': '../assets/profile/Profile_Image.png',
  
  // Thumbnails
  'Thumbnail CBA': '../assets/thumbnails/Thumbnail_CBA.png',
  'Thumbnail ADCircular': '../assets/thumbnails/Thumbnail_ADCircular.png',
  'Thumbnail Flexcellence': '../assets/thumbnails/Thumbnail_Flexcellence.png',
  'Thumbnail AIGovernance': '../assets/thumbnails/Thumbnail_AIGovernance.png',
  'Thumbnail ADAM': '../assets/thumbnails/Thumbnail_ADAM.png',
  'Thumbnail JohnCoffeeBeans': '../assets/thumbnails/Thumbnail_JohnCoffeeBeans.png',
  'Thumbnail VR': '../assets/thumbnails/Thumbnail_VR.png',
  
  // Logos
  'Logo Verizon': '../assets/logos/Logo_Verizon.png',
  'Logo CBA': '../assets/logos/Logo_CBA.png',
  'Logo Avery': '../assets/logos/Logo_Avery.png',
  'Logo TCS': '../assets/logos/Logo_TCS.png',
  'Logo Brillio': '../assets/logos/Logo_Brillio.png',
  'Logo Flexcellence': '../assets/logos/Logo_Flexcellence.png',
  'Logo Stellantis': '../assets/logos/Logo_Stellantis.png',
  'Logo Aurum': '../assets/logos/Logo_Aurum.png',
  'Logo ADCircular': '../assets/logos/Logo_ADCircular.png',
  'Logo AdobeXD': '../assets/logos/Logo_AdobeXD.png',
  'Logo Dropout': '../assets/logos/Logo_Dropout.png',
  'Logo Figma': '../assets/logos/Logo_Figma.png',
  'Logo Maze': '../assets/logos/Logo_Maze.png',
  'Logo Outsystems': '../assets/logos/Logo_Outsystems.png',
  'Logo Pega': '../assets/logos/Logo_Pega.png',
  'Logo Sketch': '../assets/logos/Logo_Sketch.png',
  
  // Other assets
  'Resume PDF': '../assets/Ajay_Kumar_Resume_Oct25.pdf',
  'Favicon': '../assets/Favicon.svg'
};

// Get all available assets dynamically
export const getAvailableAssets = (): string[] => {
  return Object.values(assetMap);
};

// Get asset names for dropdown display (derived from file names)
export const getAssetNames = (): string[] => {
  return Object.keys(assetMap);
};

// Map asset names to their paths
export const getAssetPathMap = (): Record<string, string> => {
  return assetMap;
};

// Get asset name from path
export const getAssetNameFromPath = (path: string): string => {
  const entry = Object.entries(assetMap).find(([_, assetPath]) => assetPath === path);
  return entry ? entry[0] : ''; // Return empty string if not found
};

// Function to dynamically import an asset by its path
export const importAsset = async (assetPath: string): Promise<string> => {
  // In this implementation, we're returning the path directly since we're using
  // Vite's asset handling which resolves paths at build time
  return assetPath;
};