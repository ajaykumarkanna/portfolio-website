import React from 'react';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';

interface FormTextareaProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  error?: string;
}

export function FormTextarea({
  id,
  label,
  value,
  onChange,
  placeholder = '',
  rows = 3,
  required = false,
  error
}: FormTextareaProps) {
  return (
    <div>
      <Label htmlFor={id}>
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      <Textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className={error ? 'border-red-500' : ''}
      />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}