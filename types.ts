export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  github?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  website: string;
  period: string;
  description: string;
  highlights?: string[];
  images?: string[];
}
export interface SkillDomain {
  domain: string;
  categories: SkillSubCategory[];
}

export interface SkillSubCategory {
  name: string;
  items: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  courses: string[];
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'system';
  text: string;
  isStreaming?: boolean;
}