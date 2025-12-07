import { useState, useEffect } from 'react';
import { portfolioData as defaultData, type PortfolioData } from '../data/portfolio-data';
import savedData from '../data/saved-data.json';

/**
 * Custom hook to manage portfolio data
 * Syncs with localStorage and local filesystem (via server) to persist admin panel changes
 */
export function usePortfolioData() {
  const [data, setData] = useState<PortfolioData>(() => {
    // 1. Try to use saved data from file (server persisted)
    if (Object.keys(savedData).length > 0) {
      // Cast savedData to PortfolioData, ensuring types align
      return savedData as unknown as PortfolioData;
    }
    // 2. Fallback to default data
    return defaultData;
  });

  useEffect(() => {
    const loadData = () => {
      const stored = localStorage.getItem('portfolioData_v3');
      
      // If we have savedData from file, that should be the source of truth initially,
      // but localStorage might have *newer* unsaved changes for this specific session.
      // However, usually "Server Data" > "Local Storage". 
      // Let's say: If localStorage exists, use it (it might be a WIP). 
      // If not, use savedData.
      
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (!Array.isArray(parsed.skills)) {
            parsed.skills = [];
          }
          setData(parsed);
        } catch (error) {
          console.error('Error loading portfolio data from localStorage:', error);
          localStorage.removeItem('portfolioData_v3');
          // Fallback to file data or default
          setData(Object.keys(savedData).length > 0 ? (savedData as unknown as PortfolioData) : defaultData);
        }
      } else if (Object.keys(savedData).length > 0) {
         setData(savedData as unknown as PortfolioData);
      } else {
        setData(defaultData);
      }
    };

    // Initial load
    loadData();

    // Listen for changes
    window.addEventListener('storage', loadData);
    window.addEventListener('portfolio-data-update', loadData);

    return () => {
      window.removeEventListener('storage', loadData);
      window.removeEventListener('portfolio-data-update', loadData);
    };
  }, []);

  return data;
}
