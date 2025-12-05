// Utility functions for asset management

// Import all assets to get their Vite-resolved public URLs
import Profile_Image from '../assets/profile/Profile_Image.png';

import Thumbnail_CBA from '../assets/thumbnails/Thumbnail_CBA.png';
import Thumbnail_ADCircular from '../assets/thumbnails/Thumbnail_ADCircular.png';
import Thumbnail_Flexcellence from '../assets/thumbnails/Thumbnail_Flexcellence.png';
import Thumbnail_AIGovernance from '../assets/thumbnails/Thumbnail_AIGovernance.png';
import Thumbnail_ADAM from '../assets/thumbnails/Thumbnail_ADAM.png';
import Thumbnail_JohnCoffeeBeans from '../assets/thumbnails/Thumbnail_JohnCoffeeBeans.png';
import Thumbnail_VR from '../assets/thumbnails/Thumbnail_VR.png';

import Logo_Verizon from '../assets/logos/Logo_Verizon.png';
import Logo_CBA from '../assets/logos/Logo_CBA.png';
import Logo_Avery from '../assets/logos/Logo_Avery.png';
import Logo_TCS from '../assets/logos/Logo_TCS.png';
import Logo_Brillio from '../assets/logos/Logo_Brillio.png';
import Logo_Flexcellence from '../assets/logos/Logo_Flexcellence.png';
import Logo_Stellantis from '../assets/logos/Logo_Stellantis.png';
import Logo_Aurum from '../assets/logos/Logo_Aurum.png';
import Logo_ADCircular from '../assets/logos/Logo_ADCircular.png';
import Logo_AdobeXD from '../assets/logos/Logo_AdobeXD.png';
import Logo_Dropout from '../assets/logos/Logo_Dropout.png';
import Logo_Figma from '../assets/logos/Logo_Figma.png';
import Logo_Maze from '../assets/logos/Logo_Maze.png';
import Logo_Outsystems from '../assets/logos/Logo_Outsystems.png';
import Logo_Pega from '../assets/logos/Logo_Pega.png';
import Logo_Sketch from '../assets/logos/Logo_Sketch.png';

import ResumePDF from '../assets/Ajay_Kumar_Resume_Oct25.pdf';
import FaviconAsset from '../assets/Favicon.svg'; // Renamed to avoid conflict

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
  'Profile Image': Profile_Image,
  
  // Thumbnails
  'Thumbnail CBA': Thumbnail_CBA,
  'Thumbnail ADCircular': Thumbnail_ADCircular,
  'Thumbnail Flexcellence': Thumbnail_Flexcellence,
  'Thumbnail AIGovernance': Thumbnail_AIGovernance,
  'Thumbnail ADAM': Thumbnail_ADAM,
  'Thumbnail JohnCoffeeBeans': Thumbnail_JohnCoffeeBeans,
  'Thumbnail VR': Thumbnail_VR,
  
  // Logos
  'Logo Verizon': Logo_Verizon,
  'Logo CBA': Logo_CBA,
  'Logo Avery': Logo_Avery,
  'Logo TCS': Logo_TCS,
  'Logo Brillio': Logo_Brillio,
  'Logo Flexcellence': Logo_Flexcellence,
  'Logo Stellantis': Logo_Stellantis,
  'Logo Aurum': Logo_Aurum,
  'Logo ADCircular': Logo_ADCircular,
  'Logo AdobeXD': Logo_AdobeXD,
  'Logo Dropout': Logo_Dropout,
  'Logo Figma': Logo_Figma,
  'Logo Maze': Logo_Maze,
  'Logo Outsystems': Logo_Outsystems,
  'Logo Pega': Logo_Pega,
  'Logo Sketch': Logo_Sketch,
  
  // Other assets
  'Resume PDF': ResumePDF,
  'Favicon': FaviconAsset
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