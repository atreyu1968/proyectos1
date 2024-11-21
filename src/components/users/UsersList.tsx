import React, { useState } from 'react';
import { Plus, Search, Filter, LayoutGrid, List } from 'lucide-react';
import UserCard from './UserCard';
import UserTable from './UserTable';
import { User, UserRole, roleLabels } from '../../types/user';

interface UsersListProps {
  users: User[];
  onUserClick: (id: string) => void;
  onNewUser: () => void;
}

const UsersList: React.FC<UsersListProps> = ({ users, onUserClick, onNewUser }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState<UserRole | 'all'>('all');
  const [activeFilter, setActiveFilter] = useState<boolean | 'all'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.center?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.department?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    const matchesActive = activeFilter === 'all' || user.active === activeFilter;

    return matchesSearch && matchesRole && matchesActive;
  });

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Usuarios</h2>
        <button
          onClick={onNewUser}
          className="btn btn-primary flex items-center space-x-2"
        >
          <Plus size={20} />
          <span>Nuevo Usuario</span>
        </button>
      </div>

      <div className="mb-6 space-y-4">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar por nombre, email, centro o departamento..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <Filter size={20} className="text-gray-400" />
            
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value as UserRole | 'all')}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">Todos los roles</option>
              {Object.entries(roleLabels).map(([role, label]) => (
                <option key={role} value={role}>
                  {label}
                </option>
              ))}
            </select>

            <select
              value={String(activeFilter)}
              onChange={(e) => setActiveFilter(e.target.value === 'all' ? 'all' : e.target.value === 'true')}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">Todos los estados</option>
              <option value="true">Activos</option>
              <option value="false">Inactivos</option>
            </select>

            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${
                  viewMode === 'grid'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
                title="Vista en cuadrícula"
              >
                <LayoutGrid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${
                  viewMode === 'list'
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
                title="Vista en lista"
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} onClick={() => onUserClick(user.id)} />
          ))}
        </div>
      ) : (
        <UserTable users={filteredUsers} onUserClick={onUserClick} />
      )}

      {filteredUsers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No se encontraron usuarios con los filtros seleccionados.</p>
        </div>
      )}
    </div>
  );
};

export default UsersList;