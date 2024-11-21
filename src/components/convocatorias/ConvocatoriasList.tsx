import React from 'react';
import { Plus } from 'lucide-react';
import ConvocatoriaCard from './ConvocatoriaCard';
import { Convocatoria } from '../../types/convocatoria';

interface ConvocatoriasListProps {
  convocatorias: Convocatoria[];
  onConvocatoriaClick: (id: string) => void;
  onNewConvocatoria: () => void;
}

const ConvocatoriasList: React.FC<ConvocatoriasListProps> = ({
  convocatorias,
  onConvocatoriaClick,
  onNewConvocatoria,
}) => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Convocatorias</h2>
        <button
          onClick={onNewConvocatoria}
          className="btn btn-primary flex items-center space-x-2"
        >
          <Plus size={20} />
          <span>Nueva Convocatoria</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {convocatorias.map((convocatoria) => (
          <ConvocatoriaCard
            key={convocatoria.id}
            convocatoria={convocatoria}
            onClick={onConvocatoriaClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ConvocatoriasList;