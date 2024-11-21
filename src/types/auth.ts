export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'coordinator' | 'presenter' | 'reviewer';
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}