import React from 'react';
import { X, Download, FileText, Users, Calendar, Star, Building2, Briefcase } from 'lucide-react';
import { Project, statusColors, statusLabels } from '../../types/project';

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full mx-4 max-h-[90vh] flex flex-col">
        <div className="p-6 border-b border-gray-200 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
            <span className={`mt-2 inline-block px-2.5 py-0.5 rounded-full text-sm font-medium ${statusColors[project.status].bg} ${statusColors[project.status].text}`}>
              {statusLabels[project.status]}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Descripción</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Información General</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <FileText size={20} className="mr-3" />
                  <div>
                    <span className="block font-medium">Categoría</span>
                    <span>{project.category}</span>
                  </div>
                </div>

                <div className="flex items-center text-gray-600">
                  <Building2 size={20} className="mr-3" />
                  <div>
                    <span className="block font-medium">Centro</span>
                    <span>{project.center}</span>
                  </div>
                </div>

                <div className="flex items-center text-gray-600">
                  <Briefcase size={20} className="mr-3" />
                  <div>
                    <span className="block font-medium">Departamento</span>
                    <span>{project.department}</span>
                  </div>
                </div>

                <div className="flex items-center text-gray-600">
                  <Users size={20} className="mr-3" />
                  <div>
                    <span className="block font-medium">Presentadores</span>
                    <span>{project.presenters.length} participantes</span>
                  </div>
                </div>

                {project.score !== undefined && (
                  <div className="flex items-center text-gray-600">
                    <Star size={20} className="mr-3" />
                    <div>
                      <span className="block font-medium">Puntuación</span>
                      <span>{project.score}/10</span>
                    </div>
                  </div>
                )}

                <div className="flex items-center text-gray-600">
                  <Calendar size={20} className="mr-3" />
                  <div>
                    <span className="block font-medium">Última modificación</span>
                    <span>{new Date(project.lastModified).toLocaleDateString('es-ES')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Documentos</h3>
              <div className="space-y-3">
                {project.documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <FileText className="text-gray-400" size={20} />
                      <div>
                        <p className="font-medium text-gray-900">{doc.name}</p>
                        <p className="text-sm text-gray-500">
                          Subido el {new Date(doc.uploadDate).toLocaleDateString('es-ES')}
                        </p>
                      </div>
                    </div>
                    <a
                      href={doc.url}
                      download
                      className="p-2 text-gray-400 hover:text-blue-600"
                      title="Descargar documento"
                    >
                      <Download size={20} />
                    </a>
                  </div>
                ))}

                {project.documents.length === 0 && (
                  <p className="text-gray-500 text-center py-4">
                    No hay documentos disponibles
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="btn btn-primary w-full"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;