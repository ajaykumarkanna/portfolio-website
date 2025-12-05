// Utility functions for asset management

// We'll manually maintain a mapping of assets since dynamic imports with subdirectories
// can cause TypeScript issues
const assetMap: Record<string, string> = {
  // Profile images
  'Profile Image': '/src/assets/profile/Profile_Image.png',
  
  // Thumbnails
  'Thumbnail CBA': '/src/assets/thumbnails/Thumbnail_CBA.png',
  'Thumbnail ADCircular': '/src/assets/thumbnails/Thumbnail_ADCircular.png',
  'Thumbnail Flexcellence': '/src/assets/thumbnails/Thumbnail_Flexcellence.png',
  'Thumbnail AIGovernance': '/src/assets/thumbnails/Thumbnail_AIGovernance.png',
  'Thumbnail ADAM': '/src/assets/thumbnails/Thumbnail_ADAM.png',
  'Thumbnail JohnCoffeeBeans': '/src/assets/thumbnails/Thumbnail_JohnCoffeeBeans.png',
  'Thumbnail VR': '/src/assets/thumbnails/Thumbnail_VR.png',
  
  // Logos
  'Logo Verizon': '/src/assets/logos/Logo_Verizon.png',
  'Logo CBA': '/src/assets/logos/Logo_CBA.png',
  'Logo Avery': '/src/assets/logos/Logo_Avery.png',
  'Logo TCS': '/src/assets/logos/Logo_TCS.png',
  'Logo Brillio': '/src/assets/logos/Logo_Brillio.png',
  'Logo Flexcellence': '/src/assets/logos/Logo_Flexcellence.png',
  'Logo Stellantis': '/src/assets/logos/Logo_Stellantis.png',
  'Logo Aurum': '/src/assets/logos/Logo_Aurum.png',
  'Logo ADCircular': '/src/assets/logos/Logo_ADCircular.png',
  'Logo AdobeXD': '/src/assets/logos/Logo_AdobeXD.png',
  'Logo Dropout': '/src/assets/logos/Logo_Dropout.png',
  'Logo Figma': '/src/assets/logos/Logo_Figma.png',
  'Logo Maze': '/src/assets/logos/Logo_Maze.png',
  'Logo Outsystems': '/src/assets/logos/Logo_Outsystems.png',
  'Logo Pega': '/src/assets/logos/Logo_Pega.png',
  'Logo Sketch': '/src/assets/logos/Logo_Sketch.png',
  
  // Other assets
  'Resume PDF': '/src/assets/Ajay_Kumar_Resume_Oct25.pdf',
  'Favicon': '/src/assets/Favicon.svg'
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