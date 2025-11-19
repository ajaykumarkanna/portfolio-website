import React from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface FormInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
}

export function FormInput({
  id,
  label,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  required = false,
  error
}: FormInputProps) {
  return (
    <div>
      <Label htmlFor={id}>
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={error ? 'border-red-500' : ''}
      />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}