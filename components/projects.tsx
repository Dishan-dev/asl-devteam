"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "Community Connect Platform",
    description: "A web platform connecting local organizations with volunteers for community service projects.",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
    image: "bg-gradient-to-br from-blue-500 to-purple-600",
  },
  {
    title: "Smart Learning Dashboard",
    description: "Educational platform with AI-powered personalized learning paths and progress tracking.",
    tags: ["React", "AI/ML", "Python", "Firebase"],
    image: "bg-gradient-to-br from-green-500 to-teal-600",
  },
  {
    title: "E-Commerce Solution",
    description: "Full-stack e-commerce platform with advanced inventory management and analytics.",
    tags: ["Next.js", "Stripe", "MongoDB", "DevOps"],
    image: "bg-gradient-to-br from-orange-500 to-red-600",
  },
  {
    title: "IoT Dashboard",
    description: "Real-time monitoring dashboard for IoT devices with predictive analytics.",
    tags: ["React", "IoT", "Cloud", "Data Visualization"],
    image: "bg-gradient-to-br from-indigo-500 to-blue-600",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide">Featured Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Our Latest Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the innovative solutions we've built for businesses and communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer"
            >
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="w-full text-primary hover:bg-primary/10 group"
                >
                  View Case Study <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
