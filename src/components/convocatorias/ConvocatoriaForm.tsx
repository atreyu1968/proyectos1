import React, { useState } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';
import { Convocatoria, Category } from '../../types/convocatoria';

interface ConvocatoriaFormProps {
  initialData?: Partial<Convocatoria>;
  onSubmit: (data: Partial<Convocatoria>) => void;
  onCancel: () => void;
}

const ConvocatoriaForm: React.FC<ConvocatoriaFormProps> = ({
  initialData,
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState<Partial<Convocatoria>>({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    documentationDeadline: '',
    reviewDeadline: '',
    year: new Date().getFullYear(),
    categories: [],
    status: 'draft',
    ...initialData,
  });

  const [newCategory, setNewCategory] = useState<Partial<Category>>({
    name: '',
    description: '',
    maxParticipants: 4,
    requirements: [],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewCategory((prev) => ({ ...prev, [name]: value }));
  };

  const addRequirement = () => {
    setNewCategory((prev) => ({
      ...prev,
      requirements: [...(prev.requirements || []), ''],
    }));
  };

  const updateRequirement = (index: number, value: string) => {
    setNewCategory((prev) => ({
      ...prev,
      requirements: prev.requirements?.map((req, i) => (i === index ? value : req)),
    }));
  };

  const removeRequirement = (index: number) => {
    setNewCategory((prev) => ({
      ...prev,
      requirements: prev.requirements?.filter((_, i) => i !== index),
    }));
  };

  const addCategory = () => {
    if (newCategory.name && newCategory.description) {
      setFormData((prev) => ({
        ...prev,
        categories: [
          ...(prev.categories || []),
          { ...newCategory, id: Date.now().toString() } as Category,
        ],
      }));
      setNewCategory({
        name: '',
        description: '',
        maxParticipants: 4,
        requirements: [],
      });
    }
  };

  const removeCategory = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories?.filter((cat) => cat.id !== id),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Título</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Descripción</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={3}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Fecha de inicio</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Fecha de fin</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Plazo de documentación
            </label>
            <input
              type="date"
              name="documentationDeadline"
              value={formData.documentationDeadline}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Plazo de revisión
            </label>
            <input
              type="date"
              name="reviewDeadline"
              value={formData.reviewDeadline}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Categorías</h3>
        
        <div className="space-y-4 mb-6">
          {formData.categories?.map((category) => (
            <div
              key={category.id}
              className="bg-gray-50 rounded-lg p-4 relative"
            >
              <button
                type="button"
                onClick={() => removeCategory(category.id)}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
              >
                <X size={20} />
              </button>
              
              <h4 className="font-medium">{category.name}</h4>
              <p className="text-sm text-gray-600 mt-1">{category.description}</p>
              
              <div className="mt-2">
                <span className="text-sm text-gray-500">Requisitos:</span>
                <ul className="list-disc list-inside mt-1">
                  {category.requirements.map((req, index) => (
                    <li key={index} className="text-sm text-gray-600">{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-4 space-y-4">
          <h4 className="font-medium">Nueva Categoría</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="name"
                value={newCategory.name}
                onChange={handleCategoryChange}
                placeholder="Nombre de la categoría"
                className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <input
                type="text"
                name="description"
                value={newCategory.description}
                onChange={handleCategoryChange}
                placeholder="Descripción"
                className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Requisitos
            </label>
            {newCategory.requirements?.map((req, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={req}
                  onChange={(e) => updateRequirement(index, e.target.value)}
                  placeholder="Requisito"
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => removeRequirement(index)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addRequirement}
              className="btn btn-secondary mt-2"
            >
              <Plus size={20} className="mr-2" />
              Añadir requisito
            </button>
          </div>

          <button
            type="button"
            onClick={addCategory}
            className="btn btn-primary w-full"
          >
            Añadir Categoría
          </button>
        </div>
      </div>

      <div className="flex justify-end space-x-4 border-t border-gray-200 pt-6">
        <button
          type="button"
          onClick={onCancel}
          className="btn btn-secondary"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Guardar Convocatoria
        </button>
      </div>
    </form>
  );
};

export default ConvocatoriaForm;