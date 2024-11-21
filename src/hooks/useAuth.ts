import { useContext, createContext } from 'react';
import { AuthState } from '../types/auth';

const initialState: AuthState = {
  user: {
    id: '1',
    name: 'Juan Pérez',
    email: 'juan@example.com',
    role: 'admin',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  isAuthenticated: true,
};

const AuthContext = createContext<AuthState>(initialState);

export const useAuth = () => {
  return useContext(AuthContext);
};