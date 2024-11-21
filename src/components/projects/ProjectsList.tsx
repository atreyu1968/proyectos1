import React, { useState } from 'react';
import { Plus, Search, Filter, LayoutGrid, List } from 'lucide-react';
import ProjectCard from './ProjectCard';
import ProjectTable from './ProjectTable';
import ProjectDetails from './ProjectDetails';
import { Project, ProjectStatus, statusLabels } from '../../types/project';

interface ProjectsListProps {
  projects: Project[];
  onProjectClick: (id: string) => void;
  onNewProject: () => void;
}

const ProjectsList: React.FC<ProjectsListProps> = ({
  projects,
  onProjectClick,
  onNewProject,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<ProjectStatus | 'all'>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = Array.from(new Set(projects.map(p => p.category)));

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.center.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.department.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || project.category === categoryFilter;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Proyectos</h2>
        <button
          onClick={onNewProject}
          className="btn btn-primary flex items-center space-x-2"
        >
          <Plus size={20} />
          <span>Nuevo Proyecto</span>
        </button>
      </div>

      <div className="mb-6 space-y-4">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar por título, descripción, centro o departamento..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <Filter size={20} className="text-gray-400" />
            
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as ProjectStatus | 'all')}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">Todos los estados</option>
              {Object.entries(statusLabels).map(([status, label]) => (
                <option key={status} value={status}>
                  {label}
                </option>
              ))}
            </select>

            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">Todas las categorías</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
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
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => onProjectClick(project.id)}
              onView={() => setSelectedProject(project)}
            />
          ))}
        </div>
      ) : (
        <ProjectTable
          projects={filteredProjects}
          onProjectClick={onProjectClick}
          onView={(id) => setSelectedProject(projects.find(p => p.id === id) || null)}
        />
      )}

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No se encontraron proyectos con los filtros seleccionados.</p>
        </div>
      )}

      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default ProjectsList;