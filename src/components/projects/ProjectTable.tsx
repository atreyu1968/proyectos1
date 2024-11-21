import React from 'react';
import { Star, Eye } from 'lucide-react';
import { Project, statusColors, statusLabels } from '../../types/project';

interface ProjectTableProps {
  projects: Project[];
  onProjectClick: (id: string) => void;
  onView: (id: string) => void;
}

const ProjectTable: React.FC<ProjectTableProps> = ({ projects, onProjectClick, onView }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Proyecto
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Categoría
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Centro
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Estado
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Última modificación
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Puntuación
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {projects.map((project) => (
            <tr
              key={project.id}
              onClick={() => onProjectClick(project.id)}
              className="hover:bg-gray-50 cursor-pointer"
            >
              <td className="px-6 py-4">
                <div>
                  <div className="text-sm font-medium text-gray-900">{project.title}</div>
                  <div className="text-sm text-gray-500 line-clamp-1">{project.description}</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {project.category}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{project.center}</div>
                <div className="text-sm text-gray-500">{project.department}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[project.status].bg} ${statusColors[project.status].text}`}>
                  {statusLabels[project.status]}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(project.lastModified).toLocaleDateString('es-ES')}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {project.score !== undefined ? (
                  <div className="flex items-center text-sm text-gray-900">
                    <Star size={16} className="mr-1 text-yellow-400" />
                    <span>{project.score}/10</span>
                  </div>
                ) : (
                  <span className="text-sm text-gray-500">-</span>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onView(project.id);
                  }}
                  className="btn btn-secondary flex items-center space-x-2 text-sm"
                >
                  <Eye size={16} />
                  <span>Ver</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;