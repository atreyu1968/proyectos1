export type ConvocatoriaStatus = 'draft' | 'active' | 'closed' | 'archived';

export interface Convocatoria {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: ConvocatoriaStatus;
  year: number;
  documentationDeadline: string;
  reviewDeadline: string;
  categories: Category[];
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  maxParticipants: number;
  requirements: string[];
}