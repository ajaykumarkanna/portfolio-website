import React, { useState, useEffect, useMemo, useRef } from 'react';

interface AssetSelectorProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  assetType?: 'thumbnail' | 'logo' | 'profile' | 'pdf' | 'favicon'; // Add asset type filter
}

export function AssetSelector({
  id,
  label,
  value,
  onChange,
  placeholder = 'Select an asset',
  error,
  assetType // New prop for filtering assets
}: AssetSelectorProps) {
  const [assetNames, setAssetNames] = useState<string[]>([]);
  const [selectedAsset, setSelectedAsset] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Refresh assets when dropdown opens
  const refreshAssets = async () => {
    try {
      // Dynamically import asset utilities when needed
      const { getAssetNames, getAssetPathMap, getAssetNameFromPath } = await import('../../utils/assetUtils');
      let names = getAssetNames();
      const pathMap = getAssetPathMap();
      
      // Filter assets based on assetType prop
      if (assetType) {
        names = names.filter(name => {
          switch (assetType) {
            case 'thumbnail':
              return name.toLowerCase().includes('thumbnail');
            case 'logo':
              return name.toLowerCase().includes('logo');
            case 'profile':
              return name.toLowerCase().includes('profile');
            case 'pdf':
              return name.toLowerCase().includes('pdf') || name.toLowerCase().includes('resume');
            case 'favicon':
              return name.toLowerCase().includes('favicon');
            default:
              return true;
          }
        });
      }
      
      setAssetNames(names);
      
      // Find the asset name that matches the current value
      const assetName = getAssetNameFromPath(value);
      setSelectedAsset(assetName);
    } catch (error) {
      console.error('Failed to load asset utilities:', error);
    }
  };

  // Filter asset names based on search term
  const filteredAssetNames = useMemo(() => {
    if (!searchTerm) return assetNames;
    return assetNames.filter(name => 
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [assetNames, searchTerm]);

  // Handle outside clicks to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Initialize on mount and when value changes
  useEffect(() => {
    const initialize = async () => {
      try {
        const { getAssetNameFromPath } = await import('../../utils/assetUtils');
        const assetName = getAssetNameFromPath(value);
        setSelectedAsset(assetName);
      } catch (error) {
        console.error('Failed to initialize asset selector:', error);
      }
    };
    
    initialize();
  }, [value]);

  const handleAssetChange = async (assetName: string) => {
    setSelectedAsset(assetName);
    setSearchTerm('');
    setIsOpen(false);
    
    try {
      const { getAssetPathMap } = await import('../../utils/assetUtils');
      const pathMap = getAssetPathMap();
      const assetPath = pathMap[assetName] || '';
      onChange(assetPath);
    } catch (error) {
      console.error('Failed to get asset path:', error);
      onChange('');
    }
  };

  const toggleDropdown = async () => {
    const newState = !isOpen;
    setIsOpen(newState);
    
    if (newState) {
      await refreshAssets();
      setSearchTerm('');
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <label htmlFor={id} className="text-sm font-medium text-slate-700 mb-2 block">
        {label}
      </label>
      
      {/* Custom trigger button */}
      <button
        id={id}
        type="button"
        className={`w-full flex items-center justify-between px-4 py-3 text-left bg-white border rounded-lg shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 min-h-10 ${
          error ? 'border-red-500' : 'border-slate-300'
        }`}
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={selectedAsset ? 'text-slate-900' : 'text-slate-500'}>
          {selectedAsset || placeholder}
        </span>
        <svg 
          className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {/* Custom dropdown */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-slate-300 rounded-lg shadow-lg overflow-hidden">
          {/* Search input */}
          <div className="p-2 border-b border-slate-200 sticky top-0 bg-white">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search assets..."
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Scrollable list of assets */}
          <div className="max-h-60 overflow-y-auto">
            {filteredAssetNames.length > 0 ? (
              <ul role="listbox" className="py-1">
                {filteredAssetNames.map((assetName) => (
                  <li
                    key={assetName}
                    role="option"
                    aria-selected={assetName === selectedAsset}
                    className={`px-4 py-2 cursor-pointer hover:bg-slate-100 ${
                      assetName === selectedAsset ? 'bg-indigo-50 text-indigo-700' : 'text-slate-700'
                    }`}
                    onClick={() => handleAssetChange(assetName)}
                  >
                    {assetName}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="px-4 py-6 text-center text-slate-500 text-sm">
                No assets found
              </div>
            )}
          </div>
        </div>
      )}
      
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}