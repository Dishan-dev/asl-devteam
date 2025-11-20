"use client";

import { Card } from "@/components/ui/card";
import { Code2, Smartphone, Palette, Cloud, Zap, MessageCircle } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: "Web App Development",
    description: "Modern, scalable web applications built with cutting-edge technologies and best practices.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile solutions that deliver exceptional user experiences.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Intuitive, beautiful interfaces that prioritize user needs and business goals.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Robust infrastructure and deployment solutions for seamless scalability.",
  },
  {
    icon: Zap,
    title: "AI & Automation",
    description: "Intelligent solutions that streamline processes and unlock new possibilities.",
  },
  {
    icon: MessageCircle,
    title: "Tech Consultation",
    description: "Strategic guidance to help you navigate the technology landscape effectively.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide">Our Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Services We Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to deployment, we deliver comprehensive digital solutions tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-background border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground mt-2 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
