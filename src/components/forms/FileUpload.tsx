import React, { useState } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';
import { Button } from '../ui/button';

interface FileUploadProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onFileUpload: (event: React.ChangeEvent<HTMLInputElement>, callback: (url: string) => void) => void;
  accept?: string;
  placeholder?: string;
  preview?: boolean;
  error?: string;
}

export function FileUpload({
  id,
  label,
  value,
  onChange,
  onFileUpload,
  accept = '*',
  placeholder = 'https://...',
  preview = false,
  error
}: FileUploadProps) {
  const [previewUrl, setPreviewUrl] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFileUpload(event, (url) => {
      onChange(url);
      if (preview) {
        setPreviewUrl(url);
      }
    });
  };

  return (
    <div>
      <label className="text-sm font-medium text-slate-700 mb-2 block">
        {label}
      </label>
      <div className="space-y-2">
        <input
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
            error ? 'border-red-500' : 'border-slate-300'
          }`}
        />
        <div className="flex gap-2">
          <input
            type="file"
            accept={accept}
            onChange={handleFileChange}
            className="hidden"
            id={`${id}-upload`}
          />
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => document.getElementById(`${id}-upload`)?.click()}
            className="flex-1"
          >
            {accept.includes('image') ? (
              <>
                <ImageIcon className="w-4 h-4 mr-2" />
                Upload Image
              </>
            ) : (
              <>
                <Upload className="w-4 h-4 mr-2" />
                Upload File
              </>
            )}
          </Button>
        </div>
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        {preview && previewUrl && (
          <div className="mt-2 p-4 border border-slate-200 rounded-lg bg-slate-50 flex items-center gap-4">
            {accept.includes('image') ? (
              <img src={previewUrl} alt="Preview" className="w-20 h-20 rounded-full object-cover" />
            ) : (
              <div className="flex items-center gap-2 text-emerald-700">
                <Upload className="w-5 h-5" />
                <span className="text-sm">File uploaded successfully</span>
              </div>
            )}
            <div className="text-sm text-slate-600">
              {accept.includes('image') ? 'Image preview' : 'File ready'}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}