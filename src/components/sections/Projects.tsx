import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/config/projects";

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl">
            A showcase of enterprise applications and monitoring systems I have architected and developed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group bg-zinc-900/40 border-zinc-800 flex flex-col overflow-hidden hover:border-zinc-600 transition-all duration-300">
              <div className="relative h-64 overflow-hidden bg-zinc-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 right-4">
                  <Badge 
                    className={`
                      ${project.category === 'Enterprise System' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : ''}
                      ${project.category === 'Thesis Project' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' : ''}
                      backdrop-blur-md
                    `}
                  >
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl text-zinc-100">{project.title}</CardTitle>
                <CardDescription className="text-base text-zinc-400 mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start text-zinc-300 text-sm">
                      <span className="mr-2 text-zinc-500 mt-0.5">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-zinc-700 text-zinc-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
