import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectsList from '../components/projects/ProjectsList';
import { Project } from '../types/project';

// Mock data - Replace with actual API call
const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Sistema de Monitorización IoT',
    description: 'Sistema de monitorización ambiental utilizando sensores IoT y análisis de datos en tiempo real.',
    category: 'Tecnología e Innovación',
    center: 'IES Tecnológico',
    department: 'Informática',
    status: 'reviewing',
    submissionDate: '2024-03-01',
    lastModified: '2024-03-15',
    presenters: ['1', '2'],
    reviewers: ['3'],
    score: 8.5,
    documents: [
      {
        id: '1',
        name: 'Memoria Técnica',
        type: 'pdf',
        url: '/documents/memoria.pdf',
        uploadDate: '2024-03-01',
        status: 'approved'
      }
    ],
    convocatoriaId: '1'
  },
  {
    id: '2',
    title: 'Plataforma de Aprendizaje Adaptativo',
    description: 'Sistema educativo que adapta el contenido según el progreso y necesidades del estudiante.',
    category: 'Educación Digital',
    center: 'IES Innovación',
    department: 'Pedagogía',
    status: 'submitted',
    submissionDate: '2024-03-10',
    lastModified: '2024-03-10',
    presenters: ['4'],
    documents: [
      {
        id: '2',
        name: 'Propuesta Pedagógica',
        type: 'pdf',
        url: '/documents/propuesta.pdf',
        uploadDate: '2024-03-10',
        status: 'pending'
      }
    ],
    convocatoriaId: '1'
  },
  {
    id: '3',
    title: 'Gestión de Residuos Inteligente',
    description: 'Sistema de optimización para la gestión y reciclaje de residuos en centros educativos.',
    category: 'Sostenibilidad',
    center: 'IES Tecnológico',
    department: 'Medio Ambiente',
    status: 'draft',
    lastModified: '2024-03-12',
    presenters: ['5', '6'],
    documents: [
      {
        id: '3',
        name: 'Borrador Inicial',
        type: 'pdf',
        url: '/documents/borrador.pdf',
        uploadDate: '2024-03-12',
        status: 'pending'
      }
    ],
    convocatoriaId: '1'
  }
];

const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();

  const handleProjectClick = (id: string) => {
    navigate(`/projects/edit/${id}`);
  };

  const handleNewProject = () => {
    navigate('/projects/new');
  };

  return (
    <ProjectsList
      projects={mockProjects}
      onProjectClick={handleProjectClick}
      onNewProject={handleNewProject}
    />
  );
};

export default ProjectsPage;