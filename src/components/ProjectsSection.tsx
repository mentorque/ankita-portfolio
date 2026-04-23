import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import projectESG from "@/assets/project-esg.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "ESG Analytics | Deloitte Ireland",
      description: "Launched an end-to-end analytics prototype on Microsoft Fabric and Power BI, giving economic regulation and retail insights driving 20% food waste reduction and 22% CO2e improvement. Built GHG-aligned medallion architecture in Microsoft Fabric, improving data integrity to 98% and reducing defects.",
      image: projectESG,
      technologies: ["Microsoft Fabric", "Power BI", "ETL", "Data Architecture", "GHG Analytics"],
      link: ""
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--primary))] mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Key projects showcasing expertise in data engineering, cloud analytics, and sustainability
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-[hsl(var(--primary))] transition-colors duration-200">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="bg-[hsl(var(--skill-bg))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-white transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {project.link && (
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-white transition-all duration-200"
                      onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;