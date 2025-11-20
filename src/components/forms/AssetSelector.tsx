import React, { useState, useEffect } from 'react';
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

  // Initialize on mount and when value changes
  useEffect(() => {
    refreshAssets();
  }, [value]);

  const handleAssetChange = (assetName: string) => {
    setSelectedAsset(assetName);
    const assetPath = assetPathMap[assetName] || '';
    onChange(assetPath);
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
          className="bg-white border-slate-200 p-1 max-h-60 overflow-y-auto"
          position="popper"
          sideOffset={5}
        >
          {assetNames.map((assetName) => (
            <SelectItem 
              key={assetName} 
              value={assetName}
              className="hover:bg-slate-100 focus:bg-slate-100 py-2 px-3 rounded cursor-pointer"
            >
              {assetName}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}
