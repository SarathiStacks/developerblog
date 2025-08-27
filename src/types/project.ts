export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  category: 'web' | 'mobile' | 'design' | 'blog';
  githubUrl?: string;
  liveUrl?: string;
  content?: string;
  readingTime?: number;
  featured?: boolean;
}

export interface ProjectFilters {
  search: string;
  category: string;
  sortBy: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}