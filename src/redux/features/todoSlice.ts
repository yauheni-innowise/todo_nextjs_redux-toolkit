import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { CreateTodoDto, Todo, TodoState, UpdateTodoDto } from '@/types/todo';
import { todoApi } from '@/services/api';

const initialState: TodoState = {
  todos: [],
  status: 'idle',
  error: null,
  filter: 'all',
};

// Async thunks
export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async () => {
    return await todoApi.fetchTodos();
  }
);

export const createTodo = createAsyncThunk(
  'todos/createTodo',
  async (todoData: CreateTodoDto) => {
    return await todoApi.createTodo(todoData);
  }
);

export const updateTodo = createAsyncThunk(
  'todos/updateTodo',
  async (todoData: UpdateTodoDto) => {
    return await todoApi.updateTodo(todoData);
  }
);

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (id: string) => {
    return await todoApi.deleteTodo(id);
  }
);

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<'all' | 'completed' | 'active'>) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch todos
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch todos';
      })
      
      // Create todo
      .addCase(createTodo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todos.push(action.payload);
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to create todo';
      })
      
      // Update todo
      .addCase(updateTodo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const updatedTodo = action.payload;
        const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
        if (index !== -1) {
          state.todos[index] = updatedTodo;
        }
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to update todo';
      })
      
      // Delete todo
      .addCase(deleteTodo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const id = action.payload;
        state.todos = state.todos.filter(todo => todo.id !== id);
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to delete todo';
      });
  },
});

export const { setFilter } = todoSlice.actions;

// Selectors
export const selectAllTodos = (state: { todos: TodoState }) => state.todos.todos;
export const selectTodoById = (state: { todos: TodoState }, todoId: string) => 
  state.todos.todos.find(todo => todo.id === todoId);
export const selectFilteredTodos = (state: { todos: TodoState }) => {
  const { todos, filter } = state.todos;
  
  switch (filter) {
    case 'completed':
      return todos.filter(todo => todo.completed);
    case 'active':
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
};
export const selectTodosStatus = (state: { todos: TodoState }) => state.todos.status;
export const selectTodosError = (state: { todos: TodoState }) => state.todos.error;
export const selectTodosFilter = (state: { todos: TodoState }) => state.todos.filter;

export default todoSlice.reducer;
