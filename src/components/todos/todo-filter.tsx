'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectTodosFilter, setFilter } from '@/redux/features/todoSlice';

export function TodoFilter(): React.ReactElement {
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector(selectTodosFilter);
  
  const handleFilterChange = (filter: 'all' | 'active' | 'completed'): void => {
    dispatch(setFilter(filter));
  };
  
  return (
    <div className="flex space-x-2 mb-4">
      <button
        onClick={() => handleFilterChange('all')}
        className={`px-3 py-1.5 text-sm font-medium rounded-md ${
          currentFilter === 'all'
            ? 'bg-indigo-600 text-white'
            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
        }`}
      >
        All
      </button>
      <button
        onClick={() => handleFilterChange('active')}
        className={`px-3 py-1.5 text-sm font-medium rounded-md ${
          currentFilter === 'active'
            ? 'bg-indigo-600 text-white'
            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
        }`}
      >
        Active
      </button>
      <button
        onClick={() => handleFilterChange('completed')}
        className={`px-3 py-1.5 text-sm font-medium rounded-md ${
          currentFilter === 'completed'
            ? 'bg-indigo-600 text-white'
            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
        }`}
      >
        Completed
      </button>
    </div>
  );
}
