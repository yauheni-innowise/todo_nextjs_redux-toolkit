'use client';

import React from 'react';
import { Todo } from '@/types/todo';
import { TodoItem } from './todo-item';

interface TodoListProps {
  todos: Todo[];
  onEdit: (todo: Todo) => void;
}

export function TodoList({ 
  todos, 
  onEdit 
}: TodoListProps): React.ReactElement {
  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onEdit={onEdit} />
      ))}
    </div>
  );
}
