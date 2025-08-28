import { useState, useEffect, useMemo } from 'react';
import { ArrowRight, Code, Sparkles, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import SearchFilter, { FilterState } from '@/components/SearchFilter';
import { apiService } from '@/services/api';
import type { Project } from '@/types/project';

const Index = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    category: '',
    sortBy: 'newest'
  });
  const [categories, setCategories] = useState<string[]>([]);

  // Load initial data
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [projectsData, categoriesData] = await Promise.all([
          apiService.fetchProjects(),
          apiService.getCategories()
        ]);
        setProjects(projectsData);
        setCategories(categoriesData);
      } catch (err) {
        setError('Failed to load projects. Please try again.');
        console.error('Error loading data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Filter projects when filters change
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects;

    // Apply search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }

    // Apply category filter
    if (filters.category) {
      filtered = filtered.filter(project => project.category === filters.category);
    }

    // Apply sorting
    switch (filters.sortBy) {
      case 'oldest':
        return filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      case 'title':
        return filtered.sort((a, b) => a.title.localeCompare(b.title));
      case 'newest':
      default:
        return filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
  }, [projects, filters]);

  if (error) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg inline-block mb-4">
            <Code className="h-12 w-12 text-destructive mx-auto" />
          </div>
          <h2 className="text-2xl font-semibold text-foreground mb-2">Something went wrong</h2>
          <p className="text-muted-foreground mb-4">{error}</p>
          <Button onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex justify-center mb-6 animate-fade-in">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl">
                <Code className="h-12 w-12" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              Developer{' '}
              <span className="relative">
                Blog
                <Sparkles className="absolute -top-2 -right-2 h-8 w-8 text-yellow-300 animate-pulse" />
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in">
              Crafting beautiful digital experiences with modern web technologies. 
              Explore my latest projects and insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button 
                size="lg" 
                variant="gradient"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured Projects & Posts
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A collection of my recent work, thoughts, and experiments in web development and design.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-12 animate-fade-in">
              <SearchFilter
                filters={filters}
                onFiltersChange={setFilters}
                categories={categories}
                totalResults={filteredAndSortedProjects.length}
              />
            </div>

            {/* Loading State */}
            {loading && (
              <div className="flex justify-center py-16">
                <div className="text-center">
                  <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Loading amazing content...</p>
                </div>
              </div>
            )}

            {/* Projects Grid */}
            {!loading && filteredAndSortedProjects.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                {filteredAndSortedProjects.map((project, index) => (
                  <div 
                    key={project.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            )}

            {/* Empty State */}
            {!loading && filteredAndSortedProjects.length === 0 && (
              <div className="text-center py-12 animate-fade-in">
                <div className="p-4 bg-muted rounded-lg inline-block mb-4">
                  <Code className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No results found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have a project in mind? I'd love to help bring your ideas to life with clean code and beautiful design.
            </p>
            <Button size="lg" variant="gradient">
              Start a Conversation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
