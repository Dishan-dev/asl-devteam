"use client";

import { CheckCircle } from 'lucide-react';

export function About() {
  const values = [
    "Self-organizing teams",
    "Real-world project development",
    "Fast-paced agile culture",
    "Commitment to quality & impact",
  ];

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-semibold text-sm uppercase tracking-wide">About ASL DevTeam</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                Youth-Driven Leadership & Innovation
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We're a collective of talented young developers, designers, and innovators committed to building meaningful solutions. Inspired by AIESEC's values of global impact and leadership development, we combine technical excellence with a passion for creating positive change.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Every project is an opportunity to grow, learn, and make an impact. We embrace collaboration, agility, and continuous improvement across all our endeavors.
            </p>

            <div className="space-y-3 pt-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span className="text-foreground font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-5xl font-bold text-primary">100+</div>
                <p className="text-lg text-foreground font-semibold">Projects Delivered</p>
                <div className="text-sm text-muted-foreground">Across diverse industries and communities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
