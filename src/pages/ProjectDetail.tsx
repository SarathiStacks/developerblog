import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, ExternalLink, Github, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getProjectById } from '@/data/projects';
import Layout from '@/components/Layout';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(Number(id));

  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Link to="/">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary-hover mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>
            
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-4">
                  {project.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground animate-fade-in">
                  {project.title}
                </h1>
              </div>
              
              <p className="text-xl text-muted-foreground max-w-3xl animate-fade-in">
                {project.description}
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 animate-fade-in">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  {project.date}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {(project.githubUrl || project.liveUrl) && (
                <div className="flex gap-4 animate-fade-in">
                  {project.githubUrl && (
                    <Button variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button className="bg-gradient-primary hover:shadow-hover" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-card animate-fade-in">
              <CardContent className="p-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-card animate-fade-in">
              <CardContent className="p-8">
                {project.content ? (
                  <div 
                    className="prose prose-gray max-w-none
                      prose-headings:text-foreground 
                      prose-p:text-muted-foreground 
                      prose-a:text-primary hover:prose-a:text-primary-hover
                      prose-code:text-primary prose-code:bg-accent prose-code:px-2 prose-code:py-1 prose-code:rounded
                      prose-pre:bg-muted prose-pre:border prose-pre:border-border
                      prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground"
                    dangerouslySetInnerHTML={{ 
                      __html: project.content.replace(/\n/g, '<br>').replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>').replace(/`([^`]+)`/g, '<code>$1</code>').replace(/^# (.*$)/gm, '<h1>$1</h1>').replace(/^## (.*$)/gm, '<h2>$1</h2>').replace(/^### (.*$)/gm, '<h3>$1</h3>') 
                    }}
                  />
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      Detailed content for this project is coming soon.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;