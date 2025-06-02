import { mockTodos } from '@/mocks/todos';
import { mockUser } from '@/mocks/user';
import { CreateTodoDto, Todo, UpdateTodoDto } from '@/types/todo';
import { User } from '@/types/user';

// Simulate API delay
const delay = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

// Todo API service
export const todoApi = {
  async fetchTodos(): Promise<Todo[]> {
    await delay(800);
    return [...mockTodos];
  },

  async createTodo(todoData: CreateTodoDto): Promise<Todo> {
    await delay(800);
    const newTodo: Todo = {
      id: Date.now().toString(),
      title: todoData.title,
      description: todoData.description,
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return newTodo;
  },

  async updateTodo(todoData: UpdateTodoDto): Promise<Todo> {
    await delay(800);
    const todoToUpdate = mockTodos.find(todo => todo.id === todoData.id);
    
    if (!todoToUpdate) {
      throw new Error('Todo not found');
    }
    
    const updatedTodo: Todo = {
      ...todoToUpdate,
      ...(todoData.title && { title: todoData.title }),
      ...(todoData.description && { description: todoData.description }),
      ...(todoData.completed !== undefined && { completed: todoData.completed }),
      updatedAt: new Date().toISOString(),
    };
    
    return updatedTodo;
  },

  async deleteTodo(id: string): Promise<string> {
    await delay(800);
    return id;
  }
};

// User API service
export const userApi = {
  async fetchUser(): Promise<User> {
    await delay(800);
    return { ...mockUser };
  }
};
