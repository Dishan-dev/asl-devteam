"use client";

import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind or want to learn more? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
            <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-1">Email</h3>
            <p className="text-muted-foreground">hello@asldevteam.com</p>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
            <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-1">Phone</h3>
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
          </div>
          <div className="text-center p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-1">Location</h3>
            <p className="text-muted-foreground">Global Community</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6 bg-card border border-border rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <textarea
              placeholder="Tell us about your project..."
              rows={5}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
            ></textarea>
          </div>
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
