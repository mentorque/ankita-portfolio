import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Linkedin, Github } from "lucide-react";

const ContactSection = () => {

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+353-894 222 284",
      href: "tel:+353-894222284"
    },
    {
      icon: Mail,
      label: "Email",
      value: "ankita.s.info29@gmail.com",
      href: "mailto:ankita.s.info29@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dublin, Ireland",
      href: ""
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/ankita-s29-/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View Profile",
      href: "https://github.com/ankitasaxenadata"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--primary))] mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to collaborate on data engineering projects or discuss analytics opportunities
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-[hsl(var(--skill-bg))] border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="flex-shrink-0">
                        <info.icon className="w-8 h-8 text-[hsl(var(--primary))]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{info.label}</h4>
                        {info.href ? (
                          <a 
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-muted-foreground hover:text-[hsl(var(--primary))] transition-colors duration-200 text-sm break-words"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-sm">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;