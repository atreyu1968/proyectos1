import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  FileText, 
  CheckSquare, 
  Users, 
  Settings,
  Calendar
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

const Sidebar = () => {
  const { user } = useAuth();

  return (
    <div className="w-64 bg-blue-50 border-r border-blue-100 flex flex-col h-full">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-blue-900">FP Innova</h2>
      </div>
      
      <nav className="flex-1 px-4 space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              isActive
                ? 'bg-blue-100 text-blue-900'
                : 'text-blue-700 hover:bg-blue-100'
            }`
          }
        >
          <Home size={20} />
          <span>Inicio</span>
        </NavLink>

        <NavLink
          to="/convocatorias"
          className={({ isActive }) =>
            `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              isActive
                ? 'bg-blue-100 text-blue-900'
                : 'text-blue-700 hover:bg-blue-100'
            }`
          }
        >
          <Calendar size={20} />
          <span>Convocatorias</span>
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              isActive
                ? 'bg-blue-100 text-blue-900'
                : 'text-blue-700 hover:bg-blue-100'
            }`
          }
        >
          <FileText size={20} />
          <span>Proyectos</span>
        </NavLink>

        <NavLink
          to="/reviews"
          className={({ isActive }) =>
            `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              isActive
                ? 'bg-blue-100 text-blue-900'
                : 'text-blue-700 hover:bg-blue-100'
            }`
          }
        >
          <CheckSquare size={20} />
          <span>Revisiones</span>
        </NavLink>

        {user.role === 'admin' && (
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-100 text-blue-900'
                  : 'text-blue-700 hover:bg-blue-100'
              }`
            }
          >
            <Users size={20} />
            <span>Usuarios</span>
          </NavLink>
        )}
      </nav>

      <div className="p-4 border-t border-blue-100">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              isActive
                ? 'bg-blue-100 text-blue-900'
                : 'text-blue-700 hover:bg-blue-100'
            }`
          }
        >
          <Settings size={20} />
          <span>Configuración</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;