import React, { useState } from 'react'

// Default error image
const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

// Function to convert asset path to actual import
const getAssetImport = (src: string) => {
  // If it's an asset path, we need to map it to the actual import
  if (src.startsWith('/src/assets/')) {
    // For now, we'll just return the path as is
    // In a real implementation, you would map this to the actual import
    return src;
  }
  return src;
}

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

  // Process the source to handle asset paths
  const processedSrc = getAssetImport(src);

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
      src={processedSrc}
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