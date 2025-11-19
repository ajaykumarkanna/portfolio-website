// Utility functions for asset management

// Get all available assets in the assets directory
export const getAvailableAssets = (): string[] => {
  // In a real implementation, this would dynamically read the assets directory
  // For now, we'll return a predefined list of sample assets
  return [
    '/src/assets/profile-image.png',
    '/src/assets/project-image-1.jpg',
    '/src/assets/project-image-2.jpg',
    '/src/assets/client-logo-1.png',
    '/src/assets/testimonial-1.jpg'
  ];
};

// Get asset names for dropdown display
export const getAssetNames = (): string[] => {
  return [
    'Profile Image',
    'Project Image 1',
    'Project Image 2',
    'Client Logo 1',
    'Testimonial Image 1'
  ];
};

// Map asset names to their paths
export const getAssetPathMap = (): Record<string, string> => {
  return {
    'Profile Image': '/src/assets/profile-image.png',
    'Project Image 1': '/src/assets/project-image-1.jpg',
    'Project Image 2': '/src/assets/project-image-2.jpg',
    'Client Logo 1': '/src/assets/client-logo-1.png',
    'Testimonial Image 1': '/src/assets/testimonial-1.jpg'
  };
};