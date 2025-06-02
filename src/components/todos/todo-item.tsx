'use client';

import { useState } from 'react';
import { Todo } from '@/types/todo';
import { useAppDispatch } from '@/redux/hooks';
import { deleteTodo, updateTodo } from '@/redux/features/todoSlice';

interface TodoItemProps {
  todo: Todo;
  onEdit: (todo: Todo) => void;
}

export function TodoItem({ todo, onEdit }: TodoItemProps): React.ReactElement {
  const dispatch = useAppDispatch();
  const [isConfirmingDelete, setIsConfirmingDelete] = useState<boolean>(false);

  const handleToggleComplete = (): void => {
    dispatch(updateTodo({
      id: todo.id,
      completed: !todo.completed
    }));
  };

  const handleDelete = (): void => {
    if (isConfirmingDelete) {
      dispatch(deleteTodo(todo.id));
      setIsConfirmingDelete(false);
    } else {
      setIsConfirmingDelete(true);
    }
  };

  const cancelDelete = (): void => {
    setIsConfirmingDelete(false);
  };

  return (
    <div className="border rounded-lg p-4 mb-3 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3 flex-1">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggleComplete}
            className="h-5 w-5 mt-1 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <div className="flex-1">
            <h3 className={`text-lg font-medium ${todo.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
              {todo.title}
            </h3>
            <p className={`mt-1 text-sm ${todo.completed ? 'text-gray-400' : 'text-gray-600'}`}>
              {todo.description}
            </p>
            <div className="mt-2 text-xs text-gray-500">
              Created: {new Date(todo.createdAt).toLocaleDateString()}
              {todo.updatedAt !== todo.createdAt && 
                ` • Updated: ${new Date(todo.updatedAt).toLocaleDateString()}`}
            </div>
          </div>
        </div>
        
        <div className="flex space-x-2 ml-4">
          <button
            onClick={() => onEdit(todo)}
            className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Edit
          </button>
          
          {isConfirmingDelete ? (
            <>
              <button
                onClick={handleDelete}
                className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Confirm
              </button>
              <button
                onClick={cancelDelete}
                className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={handleDelete}
              className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
