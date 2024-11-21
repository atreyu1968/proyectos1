import React from 'react';
import { Bell, Search, LogOut } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-16 bg-blue-900 text-white px-6 flex items-center justify-between">
      <div className="flex items-center space-x-4 flex-1">
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" size={20} />
          <input
            type="text"
            placeholder="Buscar proyectos, usuarios o documentos..."
            className="w-full pl-10 pr-4 py-2 bg-blue-800 text-white placeholder-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative p-2 hover:bg-blue-800 rounded-full">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <div className="font-medium">Juan Pérez</div>
            <div className="text-sm text-blue-300">Administrador</div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Avatar del usuario"
            className="w-10 h-10 rounded-full border-2 border-blue-700"
          />
        </div>

        <button className="flex items-center space-x-2 px-3 py-2 hover:bg-blue-800 rounded-lg transition-colors ml-4">
          <LogOut size={20} />
          <span>Cerrar sesión</span>
        </button>
      </div>
    </header>
  );
};

export default Header;