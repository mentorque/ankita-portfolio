import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Linkedin, GraduationCap, Calendar, Globe, Award } from "lucide-react";

const AboutSection = () => {
  const quickFacts = [
    { icon: MapPin, label: "Location", value: "Dublin, Ireland" },
    { icon: GraduationCap, label: "Education", value: "MSc. Business Analytics" },
    { icon: Calendar, label: "Experience", value: "4+ Years" },
    { icon: Globe, label: "Specialization", value: "Data Engineering & Cloud Analytics" },
  ];

  const contactInfo = [
    { icon: Phone, value: "+353-894 222 284", href: "tel:+353-894222284" },
    { icon: Mail, value: "ankita.s.info29@gmail.com", href: "mailto:ankita.s.info29@gmail.com" },
    { icon: MapPin, value: "Dublin, Ireland", href: "" },
    { icon: Linkedin, value: "LinkedIn Profile", href: "https://www.linkedin.com/in/ankita-s29-/" },
  ];

  return (
    <section id="about" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--primary))] mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Data Engineering Professional
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Data Engineering Professional with 4+ years architecting production-grade pipelines and cloud analytics platforms across Finance, Retail, CPG, and ESG sectors. Proficient in Python, SQL, Azure Data Factory, and Microsoft Fabric, with deep experience in data governance, regulatory reporting, and CI/CD pipeline development. Engineered Azure OpenAI pipelines and Power Platform automation across 4+ client teams and driving digital transformation across Customer and Supply Chain department through A/B testing and behavioural analytics.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-white/50 hover:bg-white transition-colors duration-200">
                    <contact.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                    {contact.href ? (
                      <a 
                        href={contact.href} 
                        target={contact.href.startsWith('http') ? '_blank' : undefined} 
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-foreground font-medium hover:text-[hsl(var(--primary))]"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <span className="text-foreground font-medium">{contact.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-foreground mb-6 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-[hsl(var(--primary))]" />
                    Quick Facts
                  </h4>
                  <div className="space-y-6">
                    {quickFacts.map((fact, index) => (
                      <div key={index} className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                        <div className="flex-shrink-0 mt-1">
                          <fact.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-foreground text-sm uppercase tracking-wide">
                            {fact.label}:
                          </p>
                          <p className="text-muted-foreground mt-1 font-medium">{fact.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;