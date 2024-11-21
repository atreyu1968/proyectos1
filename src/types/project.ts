export type ProjectStatus = 'draft' | 'submitted' | 'reviewing' | 'approved' | 'rejected' | 'needs_changes';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  center: string;
  department: string;
  status: ProjectStatus;
  submissionDate?: string;
  lastModified: string;
  presenters: string[];
  reviewers?: string[];
  score?: number;
  documents: ProjectDocument[];
  convocatoriaId: string;
}

export interface ProjectDocument {
  id: string;
  name: string;
  type: string;
  url: string;
  uploadDate: string;
  status: 'pending' | 'approved' | 'rejected';
}

export const statusLabels: Record<ProjectStatus, string> = {
  draft: 'Borrador',
  submitted: 'Presentado',
  reviewing: 'En revisión',
  approved: 'Aprobado',
  rejected: 'Rechazado',
  needs_changes: 'Requiere cambios'
};

export const statusColors: Record<ProjectStatus, { bg: string; text: string }> = {
  draft: { bg: 'bg-gray-100', text: 'text-gray-700' },
  submitted: { bg: 'bg-blue-100', text: 'text-blue-700' },
  reviewing: { bg: 'bg-yellow-100', text: 'text-yellow-700' },
  approved: { bg: 'bg-green-100', text: 'text-green-700' },
  rejected: { bg: 'bg-red-100', text: 'text-red-700' },
  needs_changes: { bg: 'bg-orange-100', text: 'text-orange-700' }
};