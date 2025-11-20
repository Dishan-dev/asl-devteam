"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 px-4">
      {/* Geometric Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
              Building Innovative Digital Solutions Together
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A youth-driven development team shaping impactful technology for communities and organizations. We combine leadership, innovation, and collaboration to create real-world solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground inline-flex items-center gap-2">
              Get Started <ArrowRight size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
              Explore Our Projects
            </Button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative h-96 md:h-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Tech Graphic with geometric elements */}
              <div className="relative w-full max-w-sm aspect-square">
                {/* Main circle */}
                <div className="absolute inset-0 border-2 border-primary/20 rounded-full"></div>
                <div className="absolute inset-8 border-2 border-primary/30 rounded-full"></div>
                <div className="absolute inset-16 border-2 border-primary/40 rounded-full"></div>

                {/* Connecting dots */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full"></div>
                <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary/60 rounded-full"></div>
                <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary/40 rounded-full"></div>

                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                  <line x1="25%" y1="25%" x2="75%" y2="33%" stroke="currentColor" className="text-primary/30" strokeWidth="2" />
                  <line x1="75%" y1="33%" x2="33%" y2="67%" stroke="currentColor" className="text-primary/20" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
