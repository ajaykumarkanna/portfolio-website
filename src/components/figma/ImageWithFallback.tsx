import React, { useState, useEffect } from 'react'

// Default error image
const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  lazy?: boolean;
  width?: string | number;
  height?: string | number;
  [key: string]: any;
}

export function ImageWithFallback({ 
  src, 
  alt, 
  className, 
  style, 
  lazy = true, 
  width,
  height,
  ...props 
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  // For imported assets (which are already processed by Vite), use them directly
  // For root paths (like /Logo_Verizon.png), use them directly as they're served from public directory
  // The component doesn't need to do any processing for these cases

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img 
          src={ERROR_IMG_SRC} 
          alt="Error loading image" 
          {...props} 
          data-original-url={src} 
          width={width}
          height={height}
          decoding="async"
        />
      </div>
    </div>
  ) : (
    <img 
      src={src}
      alt={alt}
      className={className}
      style={style}
      {...props} 
      onError={handleError} 
      loading={lazy ? "lazy" : "eager"}
      width={width}
      height={height}
      decoding="async"
    />
  )
}