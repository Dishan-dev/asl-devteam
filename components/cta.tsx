"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-20 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight mb-4">
          Want to Build the Future With Us?
        </h2>
        <p className="text-lg text-white/90 mb-8 leading-relaxed">
          Join our community of innovators, leaders, and builders. Whether you're a developer, designer, or visionary, there's a place for you in the ASL DevTeam. Let's create solutions that matter together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 inline-flex items-center gap-2"
          >
            Apply Now <ArrowRight size={20} />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10"
          >
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  );
}
