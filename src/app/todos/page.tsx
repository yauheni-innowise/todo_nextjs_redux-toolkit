'use client';

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchTodos, selectFilteredTodos, selectTodosStatus } from '@/redux/features/todoSlice';
import { TodoItem } from '@/components/todos/todo-item';
import { TodoForm } from '@/components/todos/todo-form';
import { TodoFilter } from '@/components/todos/todo-filter';
import { Todo } from '@/types/todo';

export default function TodosPage(): React.ReactElement {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectFilteredTodos);
  const status = useAppSelector(selectTodosStatus);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [editingTodo, setEditingTodo] = useState<Todo | undefined>(undefined);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTodos());
    }
  }, [status, dispatch]);

  const handleAddTodo = (): void => {
    setEditingTodo(undefined);
    setIsFormOpen(true);
  };

  const handleEditTodo = (todo: Todo): void => {
    setEditingTodo(todo);
    setIsFormOpen(true);
  };

  const handleCloseForm = (): void => {
    setIsFormOpen(false);
    setEditingTodo(undefined);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Todo List</h1>
        <button
          onClick={handleAddTodo}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Todo
        </button>
      </div>

      <TodoFilter />

      {status === 'loading' && (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      )}

      {status === 'succeeded' && todos.length === 0 && (
        <div className="text-center py-8 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No todos found. Create a new one!</p>
        </div>
      )}

      {status === 'succeeded' && todos.length > 0 && (
        <div className="space-y-4">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onEdit={handleEditTodo} />
          ))}
        </div>
      )}

      {status === 'failed' && (
        <div className="text-center py-8 bg-red-50 rounded-lg">
          <p className="text-red-500">Failed to load todos. Please try again later.</p>
        </div>
      )}

      {isFormOpen && (
        <TodoForm todo={editingTodo} onClose={handleCloseForm} />
      )}
    </div>
  );
}
