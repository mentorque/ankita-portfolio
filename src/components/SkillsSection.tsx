import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Data Visualisation",
      skills: ["Power BI (DAX, TMDL, RLS, Semantic Model, Bookmarks)", "SSRS", "Crystal Reports", "Advanced Excel (Power Pivot, Power Query, VBA, Functions)", "Power Platform (Power Apps, Power Automate, Dataverse)"]
    },
    {
      title: "Data Engineering", 
      skills: ["Microsoft Fabric (ETL, Dataflow Gen1 & Gen2, OneLake, Data Factory, Apache Spark, Synapse Analytics)", "Azure (Active Directory, Purview, Copilot)", "SAP Analytics (Datasphere, SAC, S/4HANA, BTP, SLT)"]
    },
    {
      title: "Other Skills",
      skills: ["Stakeholder Management", "Performance Optimization", "Process Automation", "SOP Development", "UI/UX"]
    },
    {
      title: "Delivery & Tools",
      skills: ["Agile", "JIRA", "Postman", "Microsoft Office 365", "MS Project", "Confluence", "Git and GitHub", "Project Management"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--primary))] mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technical skills in data engineering, cloud analytics, and business intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-[hsl(var(--skill-bg))] border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-foreground">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-[hsl(var(--primary))] text-white hover:bg-[hsl(var(--primary))]/90 px-3 py-1 text-sm font-medium"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;