// Utility functions for asset management

// Dynamically import all assets from the assets directory
// This will be handled by Vite's import.meta.glob
const assetModules = import.meta.glob('../assets/*.{png,jpg,jpeg,gif,svg,webp}', { eager: true });

// Get all available assets dynamically
export const getAvailableAssets = (): string[] => {
  const assets: string[] = [];
  
  // Convert the glob import results to asset paths
  Object.keys(assetModules).forEach((key) => {
    // Convert the import path to our asset path format
    const fileName = key.split('/').pop();
    if (fileName) {
      assets.push(`/src/assets/${fileName}`);
    }
  });
  
  return assets;
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
    const fileName = assetPath.split('/').pop();
    if (!fileName) {
      return assetPath;
    }
    
    // Look up the asset in the eager-loaded modules
    const moduleKey = `../assets/${fileName}`;
    const module = assetModules[moduleKey] as { default: string } | undefined;
    
    if (module && module.default) {
      return module.default;
    }
    
    return assetPath;
  } catch (error) {
    console.error(`Failed to resolve asset: ${assetPath}`, error);
    return assetPath;
  }
};