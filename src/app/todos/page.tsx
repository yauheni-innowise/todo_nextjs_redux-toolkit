'use client';

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchTodos, selectFilteredTodos, selectTodosStatus } from '@/redux/features/todoSlice';
import { TodoForm } from '@/components/todos/todo-form';
import { TodoFilter } from '@/components/todos/todo-filter';
import { TodoList } from '@/components/todos/todo-list';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { StatusMessage } from '@/components/ui/status-message';
import { Button } from '@/components/ui/button';
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
        <Button
          onClick={handleAddTodo}
          variant="primary"
          size="md"
        >
          Add Todo
        </Button>
      </div>

      <TodoFilter />

      {status === 'loading' && <LoadingSpinner />}

      {status === 'succeeded' && todos.length === 0 && (
        <StatusMessage 
          type="info" 
          message="No todos found. Create a new one!" 
        />
      )}

      {status === 'succeeded' && todos.length > 0 && (
        <TodoList todos={todos} onEdit={handleEditTodo} />
      )}

      {status === 'failed' && (
        <StatusMessage 
          type="error" 
          message="Failed to load todos. Please try again later." 
        />
      )}

      {isFormOpen && (
        <TodoForm todo={editingTodo} onClose={handleCloseForm} />
      )}
    </div>
  );
}
