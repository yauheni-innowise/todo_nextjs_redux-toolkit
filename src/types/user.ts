export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  photoUrl: string;
  createdAt: string;
}

export interface UserState {
  user: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
