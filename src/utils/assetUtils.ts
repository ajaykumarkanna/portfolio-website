// Utility functions for asset management

// Dynamically get all available assets in the assets directory
export const getAvailableAssets = (): string[] => {
  // This would normally read the directory dynamically
  // For now, we'll return the actual assets we have
  return [
    '/src/assets/Logo_ADCircular.png',
    '/src/assets/Logo_AdobeXD.png',
    '/src/assets/Logo_Aurum.png',
    '/src/assets/Logo_Avery.png',
    '/src/assets/Logo_Brillio.png',
    '/src/assets/Logo_CBA.png',
    '/src/assets/Logo_Dropout.png',
    '/src/assets/Logo_Figma.png',
    '/src/assets/Logo_Flexcellence.png',
    '/src/assets/Logo_Maze.png',
    '/src/assets/Logo_Outsystems.png',
    '/src/assets/Logo_Pega.png',
    '/src/assets/Logo_Sketch.png',
    '/src/assets/Logo_Stellantis.png',
    '/src/assets/Logo_TCS.png',
    '/src/assets/Logo_Verizon.png',
    '/src/assets/Thumbnail_AD Circular.png',
    '/src/assets/Thumbnail_ADAM.png',
    '/src/assets/Thumbnail_AIGovernance.png',
    '/src/assets/Thumbnail_CBA.png',
    '/src/assets/Thumbnail_Dropout.png',
    '/src/assets/Thumbnail_Flexcellence.png'
  ];
};

// Get asset names for dropdown display (derived from file names)
export const getAssetNames = (): string[] => {
  const assets = getAvailableAssets();
  return assets.map(assetPath => {
    // Extract filename without extension
    const fileName = assetPath.split('/').pop() || '';
    const nameWithoutExt = fileName.split('.')[0];
    // Convert underscores and hyphens to spaces and title case
    return nameWithoutExt
      .replace(/[_-]/g, ' ')
      .replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  });
};

// Map asset names to their paths
export const getAssetPathMap = (): Record<string, string> => {
  const assets = getAvailableAssets();
  const names = getAssetNames();
  const map: Record<string, string> = {};
  
  names.forEach((name, index) => {
    map[name] = assets[index];
  });
  
  return map;
};

// Get asset name from path
export const getAssetNameFromPath = (path: string): string => {
  const map = getAssetPathMap();
  const entry = Object.entries(map).find(([_, assetPath]) => assetPath === path);
  return entry ? entry[0] : path; // Return path if not found
};

// Function to dynamically import an asset by its path
export const importAsset = async (assetPath: string): Promise<string> => {
  try {
    // Convert the asset path to a relative path for import
    const relativePath = assetPath.replace('/src/assets/', './');
    
    // Dynamically import the asset
    const module = await import(relativePath);
    return module.default;
  } catch (error) {
    console.error(`Failed to import asset: ${assetPath}`, error);
    // Return a fallback image or the original path
    return assetPath;
  }
};