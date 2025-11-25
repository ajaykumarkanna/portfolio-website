import { useState, useEffect } from 'react';
import { portfolioData as defaultData, type PortfolioData } from '../data/portfolio-data';

/**
 * Custom hook to manage portfolio data
 * Syncs with localStorage to persist admin panel changes
 */
export function usePortfolioData() {
  const [data, setData] = useState<PortfolioData>(defaultData);

  useEffect(() => {
    // Load from localStorage if available
    const stored = localStorage.getItem('portfolioData_v2');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setData(parsed);
      } catch (error) {
        console.error('Error loading portfolio data from localStorage:', error);
      }
    }
  }, []);

  return data;
}
