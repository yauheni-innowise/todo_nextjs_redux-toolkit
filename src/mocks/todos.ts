import { Todo } from '@/types/todo';

export const mockTodos: Todo[] = [
  {
    id: '1',
    title: 'Complete project documentation',
    description: 'Write comprehensive documentation for the new API endpoints',
    completed: false,
    createdAt: '2025-05-28T10:00:00Z',
    updatedAt: '2025-05-28T10:00:00Z',
  },
  {
    id: '2',
    title: 'Fix navigation bug',
    description: 'Address the navigation issue in the mobile view',
    completed: true,
    createdAt: '2025-05-27T14:30:00Z',
    updatedAt: '2025-05-29T09:15:00Z',
  },
  {
    id: '3',
    title: 'Implement user settings page',
    description: 'Create the user settings page with theme options',
    completed: false,
    createdAt: '2025-05-26T11:45:00Z',
    updatedAt: '2025-05-26T11:45:00Z',
  },
  {
    id: '4',
    title: 'Optimize database queries',
    description: 'Review and optimize slow database queries',
    completed: false,
    createdAt: '2025-05-25T16:20:00Z',
    updatedAt: '2025-05-25T16:20:00Z',
  },
  {
    id: '5',
    title: 'Update dependencies',
    description: 'Update all project dependencies to their latest versions',
    completed: true,
    createdAt: '2025-05-24T13:10:00Z',
    updatedAt: '2025-05-30T10:45:00Z',
  }
];
