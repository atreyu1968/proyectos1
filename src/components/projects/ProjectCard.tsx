import React from 'react';
import { FileText, Users, Calendar, Star, Eye } from 'lucide-react';
import { Project, statusColors, statusLabels } from '../../types/project';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  onView: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, onView }) => {
  const handleViewClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onView();
  };

  return (
    <div
      className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{project.title}</h3>
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[project.status].bg} ${statusColors[project.status].text}`}>
          {statusLabels[project.status]}
        </span>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

      <div className="space-y-2">
        <div className="flex items-center text-sm text-gray-600">
          <FileText size={16} className="mr-2" />
          <span>{project.category}</span>
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <Users size={16} className="mr-2" />
          <span>{project.presenters.length} presentadores</span>
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <Calendar size={16} className="mr-2" />
          <span>Modificado: {new Date(project.lastModified).toLocaleDateString('es-ES')}</span>
        </div>

        {project.score !== undefined && (
          <div className="flex items-center text-sm text-gray-600">
            <Star size={16} className="mr-2" />
            <span>Puntuación: {project.score}/10</span>
          </div>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            <span className="block">{project.center}</span>
            <span className="block">{project.department}</span>
          </div>
          <button
            onClick={handleViewClick}
            className="btn btn-secondary flex items-center space-x-2 text-sm"
          >
            <Eye size={16} />
            <span>Ver</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;