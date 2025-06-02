'use client';

import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LoadingSpinner({ 
  size = 'md', 
  className = ''
}: LoadingSpinnerProps): React.ReactElement {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <div className="flex justify-center py-8">
      <div 
        className={`animate-spin rounded-full ${sizeClasses[size]} border-t-2 border-b-2 border-indigo-500 ${className}`}
      ></div>
    </div>
  );
}
