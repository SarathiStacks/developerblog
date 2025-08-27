import { Project } from '@/types/project';

// In a real app, this would be an actual API endpoint
const API_BASE_URL = '/api';

// Simulated API delay for realistic feel
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

class ApiService {
  private static instance: ApiService;
  private projects: Project[] | null = null;

  private constructor() {}

  static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  async fetchProjects(): Promise<Project[]> {
    // Simulate API call delay
    await delay(300);

    // In production, this would be:
    // const response = await fetch(`${API_BASE_URL}/projects`);
    // return response.json();

    // For now, return our static data
    if (!this.projects) {
      // Dynamically import the data to simulate API loading
      const { projects } = await import('@/data/projects');
      this.projects = projects;
    }

    return this.projects;
  }

  async fetchProjectById(id: number): Promise<Project | null> {
    await delay(200);
    
    const projects = await this.fetchProjects();
    return projects.find(project => project.id === id) || null;
  }

  async searchProjects(query: string): Promise<Project[]> {
    await delay(150);
    
    const projects = await this.fetchProjects();
    
    if (!query) return projects;
    
    const lowercaseQuery = query.toLowerCase();
    return projects.filter(project => 
      project.title.toLowerCase().includes(lowercaseQuery) ||
      project.description.toLowerCase().includes(lowercaseQuery) ||
      project.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  }

  async getProjectsByCategory(category: string): Promise<Project[]> {
    await delay(150);
    
    const projects = await this.fetchProjects();
    
    if (!category) return projects;
    return projects.filter(project => project.category === category);
  }

  async getCategories(): Promise<string[]> {
    const projects = await this.fetchProjects();
    return Array.from(new Set(projects.map(project => project.category)));
  }

  // Simulate filtering and sorting on server side
  async getFilteredProjects(filters: {
    search?: string;
    category?: string;
    sortBy?: string;
  }): Promise<Project[]> {
    await delay(250);
    
    let projects = await this.fetchProjects();

    // Apply search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      projects = projects.filter(project =>
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }

    // Apply category filter
    if (filters.category) {
      projects = projects.filter(project => project.category === filters.category);
    }

    // Apply sorting
    switch (filters.sortBy) {
      case 'oldest':
        return projects.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      case 'title':
        return projects.sort((a, b) => a.title.localeCompare(b.title));
      case 'newest':
      default:
        return projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
  }
}

export const apiService = ApiService.getInstance();
export default apiService;