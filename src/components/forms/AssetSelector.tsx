import React, { useState, useEffect, useMemo } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { getAssetNames, getAssetPathMap } from '../../utils/assetUtils';

interface AssetSelectorProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
}

export function AssetSelector({
  id,
  label,
  value,
  onChange,
  placeholder = 'Select an asset',
  error
}: AssetSelectorProps) {
  const [assetNames, setAssetNames] = useState<string[]>([]);
  const [assetPathMap, setAssetPathMap] = useState<Record<string, string>>({});
  const [selectedAsset, setSelectedAsset] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Refresh assets when dropdown opens
  const refreshAssets = () => {
    const names = getAssetNames();
    const pathMap = getAssetPathMap();
    setAssetNames(names);
    setAssetPathMap(pathMap);
    
    // Find the asset name that matches the current value
    const entry = Object.entries(pathMap).find(([_, path]) => path === value);
    setSelectedAsset(entry ? entry[0] : '');
  };

  // Filter asset names based on search term
  const filteredAssetNames = useMemo(() => {
    if (!searchTerm) return assetNames;
    return assetNames.filter(name => 
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [assetNames, searchTerm]);

  // Initialize on mount and when value changes
  useEffect(() => {
    refreshAssets();
  }, [value]);

  const handleAssetChange = (assetName: string) => {
    setSelectedAsset(assetName);
    const assetPath = assetPathMap[assetName] || '';
    onChange(assetPath);
    setSearchTerm(''); // Clear search when selection is made
  };

  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-slate-700 mb-2 block">
        {label}
      </label>
      <Select 
        value={selectedAsset} 
        onValueChange={handleAssetChange}
        onOpenChange={(open) => {
          setIsOpen(open);
          if (open) {
            refreshAssets(); // Refresh assets when dropdown opens
            setSearchTerm(''); // Clear search when opening
          }
        }}
      >
        <SelectTrigger 
          id={id}
          className={`bg-white ${error ? 'border-red-500' : 'border-slate-300'} min-h-10`}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent 
          className="bg-white border-slate-200 p-1 max-h-60 overflow-hidden rounded-md shadow-lg"
          position="popper"
          sideOffset={5}
        >
          {/* Search input */}
          <div className="p-2 border-b border-slate-200 sticky top-0 bg-white z-10">
            <input
              type="text"
              placeholder="Search assets..."
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={(e) => e.stopPropagation()} // Prevent closing dropdown when clicking input
            />
          </div>
          
          {/* Scrollable list of assets */}
          <div className="max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100">
            {filteredAssetNames.length > 0 ? (
              filteredAssetNames.map((assetName) => (
                <SelectItem 
                  key={assetName} 
                  value={assetName}
                  className="hover:bg-slate-100 focus:bg-slate-100 py-2 px-3 rounded cursor-pointer"
                >
                  {assetName}
                </SelectItem>
              ))
            ) : (
              <div className="py-2 px-3 text-slate-500 text-sm">No assets found</div>
            )}
          </div>
        </SelectContent>
      </Select>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}