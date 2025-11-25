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
      // Use the actual module path for assets
      const module = assetModules[key] as { default: string } | undefined;
      if (module && module.default) {
        assets.push(module.default);
      } else {
        assets.push(fileName);
      }
    }
  });
  
  return assets;
};

// Get asset names for dropdown display (derived from file names)
export const getAssetNames = (): string[] => {
  const names: string[] = [];
  
  // Get names directly from the asset modules
  Object.keys(assetModules).forEach((key) => {
    const fileName = key.split('/').pop();
    if (fileName) {
      // Create the display name from the file name
      const nameWithoutExt = fileName.split('.')[0];
      const displayName = nameWithoutExt
        .replace(/[_-]/g, ' ')
        .replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
      names.push(displayName);
    }
  });
  
  return names;
};

// Map asset names to their paths
export const getAssetPathMap = (): Record<string, string> => {
  const map: Record<string, string> = {};
  
  // Directly map from the asset modules
  Object.keys(assetModules).forEach((key) => {
    const fileName = key.split('/').pop();
    if (fileName) {
      // Create the display name from the file name
      const nameWithoutExt = fileName.split('.')[0];
      const displayName = nameWithoutExt
        .replace(/[_-]/g, ' ')
        .replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
      
      // Use the actual module path for assets
      const module = assetModules[key] as { default: string } | undefined;
      if (module && module.default) {
        map[displayName] = module.default;
      } else {
        map[displayName] = fileName;
      }
    }
  });
  
  return map;
};

// Get asset name from path
export const getAssetNameFromPath = (path: string): string => {
  const map = getAssetPathMap();
  const entry = Object.entries(map).find(([_, assetPath]) => assetPath === path);
  return entry ? entry[0] : ''; // Return empty string if not found
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