import { useState, useEffect } from 'react';
import { portfolioData as defaultData, type PortfolioData } from '../data/portfolio-data';

/**
 * Custom hook to manage portfolio data
 * Syncs with localStorage to persist admin panel changes
 */
export function usePortfolioData() {
  const [data, setData] = useState<PortfolioData>(defaultData);

  useEffect(() => {
    const loadData = () => {
      const stored = localStorage.getItem('portfolioData_v3');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          // Ensure skills is always an array, even if localStorage provides malformed data
          if (!Array.isArray(parsed.skills)) {
            parsed.skills = [];
          }
          setData(parsed);
        } catch (error) {
          console.error('Error loading portfolio data from localStorage, resetting:', error);
          localStorage.removeItem('portfolioData_v3'); // Clear corrupted data
          setData(defaultData); // Explicitly set default data
        }
      } else {
        setData(defaultData); // Ensure defaultData is set if nothing in localStorage
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
