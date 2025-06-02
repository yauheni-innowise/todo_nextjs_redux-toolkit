'use client';

import { useState, useEffect } from 'react';
import { Todo } from '@/types/todo';
import { useAppDispatch } from '@/redux/hooks';
import { createTodo, updateTodo } from '@/redux/features/todoSlice';
import { Modal } from '@/components/ui/modal';
import { FormInput } from '@/components/ui/form-input';
import { Button } from '@/components/ui/button';

interface TodoFormProps {
  todo?: Todo;
  onClose: () => void;
}

export function TodoForm({ todo, onClose }: TodoFormProps): React.ReactElement {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [errors, setErrors] = useState<{ title?: string; description?: string }>({});

  const isEditMode = !!todo;

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
    }
  }, [todo]);

  const validateForm = (): boolean => {
    const newErrors: { title?: string; description?: string } = {};
    
    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    if (isEditMode && todo) {
      dispatch(updateTodo({
        id: todo.id,
        title,
        description
      }));
    } else {
      dispatch(createTodo({
        title,
        description
      }));
    }
    
    resetForm();
    onClose();
  };

  const resetForm = (): void => {
    setTitle('');
    setDescription('');
    setErrors({});
  };

  return (
    <Modal
      isOpen={true}
      onClose={() => {
        resetForm();
        onClose();
      }}
      title={isEditMode ? 'Edit Todo' : 'Create New Todo'}
      size="md"
    >
      <form onSubmit={handleSubmit}>
        <FormInput
          id="title"
          label="Title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          error={errors.title}
          required
        />
        
        <FormInput
          id="description"
          label="Description"
          type="textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          error={errors.description}
          required
          rows={4}
        />
        
        <div className="flex justify-end space-x-3 mt-6">
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              resetForm();
              onClose();
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
          >
            {isEditMode ? 'Update' : 'Create'}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
