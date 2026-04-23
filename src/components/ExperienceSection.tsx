import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, TrendingUp } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "MJ Scannell Safety (Group RG Ireland)",
      position: "Technology Consultant | Digital Solutions",
      location: "Ireland",
      duration: "Jan 2026 – Present",
      logoSrc: "/mjs-logo",
      logoAlt: "MJ Scannell Safety",
      achievements: [
        {
          impact: "Azure Open AI Pipeline",
          description:
            "Implemented an Azure Open AI pipeline to auto-classify call transcripts, cutting analysis turnaround from 1 day to 15 mins.",
        },
        {
          impact: "Workflow Automation",
          description:
            "Facilitated As-Is workflow analysis across operations and procurement teams, producing gap analysis that justified automating manual workflows saving an estimated 32 hrs/month and deferring a planned junior hire worth €35,000/year.",
        },
        {
          impact: "Secure Power BI Dashboards",
          description:
            "Operationalized role-based Power BI dashboards across on-prem and cloud using Azure Active Directory and Power BI RLS, scaling secure adoption by 25% for executive and manager views across multiple operating systems.",
        },
      ],
      technologies: [
        "Azure Open AI",
        "Power BI",
        "Azure Active Directory",
        "RLS",
        "Process Automation",
      ],
    },
    {
      company: "Fractal Analytics",
      position: "Data Consultant",
      location: "India",
      duration: "Jan 2024 – Jul 2024",
      logoSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUnFd9vYz3KUrukw4-cJmZpk-chNBw2hgdQw&s",
      logoAlt: "Fractal Analytics",
      achievements: [
        {
          impact: "Power BI Optimization",
          description:
            "Audited 5+ Power BI data models and migrated calculated columns to DAX measures, reducing in-memory model size by 25% and improving dashboard load performance by 40% without loss of analytical functionality.",
        },
        {
          impact: "Knowledge Management",
          description:
            "Conducted workshops with business users and created a structured knowledge base glossary, improving stakeholder alignment and reducing duplicate metric requests by 40% across Sales and Operations.",
        },
        {
          impact: "Anomaly Detection",
          description:
            "Implemented an anomaly detection model on Operations KPIs using Python, training on data extracted from Microsoft SQL Server, flagging revenue leakage and process exceptions and reducing missed anomalies by 35%.",
        },
      ],
      technologies: [
        "Power BI",
        "DAX",
        "Python",
        "Microsoft SQL Server",
        "Anomaly Detection",
      ],
    },
    {
      company: "HCL Tech",
      position: "Data Specialist",
      location: "India",
      duration: "Apr 2023 – Dec 2023",
      logoSrc: "/hcltech.png",
      logoAlt: "HCL Tech",
      achievements: [
        {
          impact: "Next-Gen ETL Design",
          description:
            "Led design of next-gen ETL using PySpark and Spark SQL, standardising Parquet outputs and query optimisations to shorten end-to-end processing by 66% and improve downstream analytics performance by 50%.",
        },
        {
          impact: "Automated Data Pipelines",
          description:
            "Automated end-to-end data pipelines with ADF and Synapse/Azure SQL, triggering scheduled report updates and email alerts, reducing analyst touch time by 60%.",
        },
      ],
      technologies: [
        "PySpark",
        "Spark SQL",
        "ADF",
        "Synapse",
        "Azure SQL",
        "ETL",
      ],
    },
    {
      company: "CBRE",
      position: "Sr. Data Analyst",
      location: "India",
      duration: "Nov 2020 – Apr 2023",
      logoSrc: "/cbre.jpg",
      logoAlt: "CBRE",
      achievements: [
        {
          impact: "SQL Optimization",
          description:
            "Strengthened marketing and regulatory reporting by refactoring 50+ SQL queries through joins and CTE transformations, reducing data-quality exceptions by 45% and increasing stakeholder confidence in published metrics.",
        },
        {
          impact: "Mentorship",
          description:
            "Mentored and shadowed 5+ new analysts on Power BI standards, data modelling, and ETL workflows, slashing onboarding time by 30% and boosting self-serve analytics adoption across finance and customer teams.",
        },
      ],
      technologies: [
        "SQL",
        "Power BI",
        "ETL",
        "Data Modelling",
        "Mentorship",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground font-space-grotesk">
            Work{" "}
            <span className="bg-gradient-to-r from-[hsl(202_100%_42%)] to-[hsl(202_85%_28%)] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            4+ years of experience architecting production-grade pipelines and cloud analytics platforms
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="rounded-lg border border-border/70 bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                    {exp.logoSrc ? (
                      <div className="h-16 w-32 sm:h-20 sm:w-[10.5rem] shrink-0 rounded-xl bg-white border border-border px-2.5 py-2 shadow-sm flex items-center justify-center">
                        <img
                          src={exp.logoSrc}
                          alt={exp.logoAlt}
                          className="h-10 sm:h-16 w-auto max-w-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="h-16 w-32 sm:h-20 sm:w-[10.5rem] shrink-0 rounded-xl bg-white border border-border px-2.5 py-2 shadow-sm flex items-center justify-center">
                        <Building2 className="h-10 w-10 text-[hsl(var(--primary))]" />
                      </div>
                    )}
                    <div className="space-y-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground font-space-grotesk leading-tight">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 text-[hsl(var(--primary))] font-semibold text-base sm:text-lg">
                        <Building2 className="w-4 h-4 shrink-0" />
                        {exp.company}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row flex-wrap lg:flex-col lg:items-end gap-x-4 gap-y-2 text-sm sm:text-base text-muted-foreground border-t lg:border-t-0 pt-4 lg:pt-0">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 shrink-0 text-[hsl(var(--primary))]" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 shrink-0 text-[hsl(var(--primary))]" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div
                      key={achIndex}
                      className="flex gap-4 p-4 bg-muted/40 rounded-lg border border-primary/10 hover:border-primary/20 transition-colors"
                    >
                      <div className="flex-shrink-0 mt-1 hidden sm:block">
                        <div className="w-8 h-8 bg-primary/15 rounded-full flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-[hsl(var(--primary))]" />
                        </div>
                      </div>
                      <div className="space-y-1.5 min-w-0">
                        <div className="text-[hsl(var(--primary))] font-semibold text-base sm:text-lg leading-snug">
                          {achievement.impact}
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-border">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                    Technologies used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-[hsl(var(--skill-bg))] text-foreground border border-border/60"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;