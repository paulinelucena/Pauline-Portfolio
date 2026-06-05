export interface Inquiry {
  id: string;
  name: string;
  email: string;
  serviceInterest: string;
  message: string;
  timestamp: string;
  status: 'Received' | 'Reviewed' | 'Closed';
}

export interface Competency {
  id: string;
  title: string;
  iconName: string;
  items: string[];
}

export interface ProfessionalTool {
  name: string;
  category: 'ERP & Accounting' | 'Productivity' | 'Project Management' | 'Collaboration';
  description: string;
}
