import { useCallback, useEffect } from 'react';

export function useAccessibility() {
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Skip to content functionality
    if (event.altKey && event.key === 'S') {
      const mainContent = document.querySelector('main, [role="main"]');
      if (mainContent) {
        (mainContent as HTMLElement).focus();
      }
    }
    
    // Focus management for modals
    if (event.key === 'Escape') {
      const modal = document.querySelector('[role="dialog"]');
      if (modal) {
        const closeButtons = modal.querySelectorAll('[data-close-button]');
        if (closeButtons.length > 0) {
          (closeButtons[0] as HTMLElement).click();
        }
      }
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const skipToContent = () => {
    const mainContent = document.querySelector('main, [role="main"]');
    if (mainContent) {
      (mainContent as HTMLElement).focus();
    }
  };

  return { skipToContent };
}