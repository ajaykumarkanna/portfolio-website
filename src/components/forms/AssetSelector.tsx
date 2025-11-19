import React, { useState } from 'react';
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
  const assetNames = getAssetNames();
  const assetPathMap = getAssetPathMap();
  
  // Find the asset name that matches the current value
  const getCurrentAssetName = () => {
    const entry = Object.entries(assetPathMap).find(([_, path]) => path === value);
    return entry ? entry[0] : '';
  };

  const [selectedAsset, setSelectedAsset] = useState(getCurrentAssetName());

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
      <Select value={selectedAsset} onValueChange={handleAssetChange}>
        <SelectTrigger 
          id={id}
          className={error ? 'border-red-500' : ''}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {assetNames.map((assetName) => (
            <SelectItem key={assetName} value={assetName}>
              {assetName}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}