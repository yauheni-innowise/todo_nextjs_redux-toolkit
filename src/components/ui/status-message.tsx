'use client';

import React from 'react';

type StatusType = 'info' | 'warning' | 'error' | 'success';

interface StatusMessageProps {
  type: StatusType;
  message: string;
  className?: string;
}

export function StatusMessage({ 
  type, 
  message, 
  className = '' 
}: StatusMessageProps): React.ReactElement {
  const typeStyles: Record<StatusType, { bg: string; text: string }> = {
    info: { bg: 'bg-gray-50', text: 'text-gray-500' },
    warning: { bg: 'bg-yellow-50', text: 'text-yellow-700' },
    error: { bg: 'bg-red-50', text: 'text-red-500' },
    success: { bg: 'bg-green-50', text: 'text-green-500' }
  };

  const style = typeStyles[type];

  return (
    <div className={`text-center py-8 ${style.bg} rounded-lg ${className}`}>
      <p className={style.text}>{message}</p>
    </div>
  );
}
