export type UserRole = 'admin' | 'coordinator' | 'presenter' | 'reviewer';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  center?: string;
  department?: string;
  active: boolean;
  createdAt: string;
  lastLogin?: string;
}

export const roleLabels: Record<UserRole, string> = {
  admin: 'Administrador',
  coordinator: 'Coordinador',
  presenter: 'Presentador',
  reviewer: 'Revisor',
};