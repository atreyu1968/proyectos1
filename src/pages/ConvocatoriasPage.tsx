import React from 'react';
import { useNavigate } from 'react-router-dom';
import ConvocatoriasList from '../components/convocatorias/ConvocatoriasList';
import { Convocatoria } from '../types/convocatoria';

// Mock data - Replace with actual API calls
const mockConvocatorias: Convocatoria[] = [
  {
    id: '1',
    title: 'Convocatoria FP Innova 2024',
    description: 'Proyectos de innovación en Formación Profesional para el año académico 2024.',
    startDate: '2024-03-01',
    endDate: '2024-06-30',
    status: 'active',
    year: 2024,
    documentationDeadline: '2024-05-15',
    reviewDeadline: '2024-06-15',
    categories: [
      {
        id: '1',
        name: 'Tecnología e Innovación',
        description: 'Proyectos tecnológicos innovadores',
        maxParticipants: 4,
        requirements: ['Memoria técnica', 'Presupuesto', 'Video demostrativo'],
      },
      {
        id: '2',
        name: 'Sostenibilidad',
        description: 'Proyectos enfocados en sostenibilidad y medio ambiente',
        maxParticipants: 4,
        requirements: ['Memoria técnica', 'Estudio de impacto ambiental'],
      },
    ],
    createdAt: '2024-02-01',
    updatedAt: '2024-02-01',
  },
];

const ConvocatoriasPage: React.FC = () => {
  const navigate = useNavigate();

  const handleConvocatoriaClick = (id: string) => {
    navigate(`/convocatorias/edit/${id}`);
  };

  const handleNewConvocatoria = () => {
    navigate('/convocatorias/new');
  };

  return (
    <ConvocatoriasList
      convocatorias={mockConvocatorias}
      onConvocatoriaClick={handleConvocatoriaClick}
      onNewConvocatoria={handleNewConvocatoria}
    />
  );
};

export default ConvocatoriasPage;