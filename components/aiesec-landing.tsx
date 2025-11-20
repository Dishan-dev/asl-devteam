"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Users, Award, Globe } from 'lucide-react';

export function AIESEC_Landing() {
  return (
    <main className="w-full bg-background text-foreground">
      {/* Above the Fold */}
      <section className="min-h-screen flex items-center py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase text-primary">AIESEC Sri Lanka</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Build the Future of Youth Leadership: <span className="text-primary">Join the AIESEC SL Dev Team</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Be part of a dynamic, youth-led engineering collective — build meaningful products, grow as a leader, and connect globally.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                Learn About Roles
              </Button>
            </div>

            <div className="flex gap-6 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Users size={18} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Community</div>
                  <div className="font-semibold">Global Alumni Network</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <Award size={18} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Growth</div>
                  <div className="font-semibold">Leadership & Skills</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-white to-primary/5 border border-border flex items-center justify-center">
            {/* Pexels hero image - external source. Replace the URL with your preferred Pexels photo or move to /public and use local asset. */}
            <img
              src="https://images.pexels.com/photos/3184309/pexels-photo-3184309.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Diverse young people collaborating on laptops and whiteboards"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Scope */}
      <section id="mission" className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-primary font-semibold text-sm uppercase tracking-wide">Dev Team Mission & Scope</p>
            <h2 className="text-3xl md:text-4xl font-bold">What we build</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">From websites to data-driven products, we design and ship solutions that create impact.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold text-lg">Website & Web Apps</h3>
              <p className="text-sm text-muted-foreground mt-2">Public sites, member portals, and responsive web apps using modern stacks.</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg">Data Analytics & Visualisation</h3>
              <p className="text-sm text-muted-foreground mt-2">Dashboards, ETL pipelines, and insight-driven features to inform decisions.</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg">Automation & Tooling</h3>
              <p className="text-sm text-muted-foreground mt-2">Internal tools, CI/CD support, and productivity automation for larger impact.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wide">Benefits of Joining</p>
            <h3 className="text-3xl md:text-4xl font-bold mt-2">Grow professionally, lead intentionally</h3>
            <p className="text-muted-foreground mt-4">As a member you'll get hands-on experience, leadership opportunities, and connections across AIESEC's global network.</p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3"><CheckCircle className="text-primary" /> <span className="font-medium">Professional development: mentorship, code reviews, workshops</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-primary" /> <span className="font-medium">Leadership roles and project ownership</span></li>
              <li className="flex items-start gap-3"><CheckCircle className="text-primary" /> <span className="font-medium">Global networking & exchange opportunities</span></li>
            </ul>
          </div>

          <div className="space-y-4">
            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold text-primary">3x</div>
                <div>
                  <div className="text-sm text-muted-foreground">Faster skill growth</div>
                  <div className="font-semibold">Compared to self-study</div>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                  <div className="font-semibold">Delivered with impact</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="social" className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-primary font-semibold text-sm uppercase tracking-wide">Social Proof</p>
            <h3 className="text-3xl font-bold">Voices from our community</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <blockquote className="p-6 bg-background border border-border rounded-lg">
              <p className="text-lg">“Joining the ASL DevTeam accelerated my career — I shipped real products and led a project within months.”</p>
              <footer className="mt-4 text-sm text-muted-foreground">— Nisha Perera, Product Manager</footer>
            </blockquote>
            <blockquote className="p-6 bg-background border border-border rounded-lg">
              <p className="text-lg">“Hands-on mentorship and global exposure were game changers for my portfolio.”</p>
              <footer className="mt-4 text-sm text-muted-foreground">— Kusal Fernando, Data Analyst</footer>
            </blockquote>
            <Card className="p-6">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div>
                    <div className="text-sm text-muted-foreground">Member satisfaction</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-2xl font-bold text-primary">70+</div>
                  <div>
                    <div className="text-sm text-muted-foreground">Active contributors</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet the Dev Team Innovators */}
      <section id="innovators" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-primary font-semibold text-sm uppercase tracking-wide">Meet the Dev Team Innovators</p>
            <h3 className="text-3xl font-bold">Our Structure & Key Innovators</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 mb-4 flex items-center justify-center text-primary text-xl font-bold">SC</div>
              <h4 className="font-semibold">Sarah Chen</h4>
              <p className="text-sm text-primary">Lead Developer</p>
              <p className="text-muted-foreground mt-3">“I love mentoring new devs and shipping with impact.”</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 mb-4 flex items-center justify-center text-primary text-xl font-bold">MR</div>
              <h4 className="font-semibold">Marcus Rodriguez</h4>
              <p className="text-sm text-primary">Product Designer</p>
              <p className="text-muted-foreground mt-3">“We design for people and outcomes, not just screens.”</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 mb-4 flex items-center justify-center text-primary text-xl font-bold">DO</div>
              <h4 className="font-semibold">David Okonkwo</h4>
              <p className="text-sm text-primary">Data Scientist</p>
              <p className="text-muted-foreground mt-3">“Data helps us measure impact and iterate quickly.”</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section id="apply" className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide">Application Process</p>
          <h3 className="text-3xl font-bold mt-2">How to join</h3>
          <p className="text-muted-foreground mt-4">A simple, transparent process to welcome motivated contributors.</p>

          <div className="grid md:grid-cols-4 gap-4 mt-8">
            <div className="p-6 bg-background border border-border rounded-lg">
              <div className="font-bold text-xl text-primary">1</div>
              <div className="font-semibold mt-2">Apply</div>
              <div className="text-sm text-muted-foreground mt-1">Fill the form with your skills and interests.</div>
            </div>
            <div className="p-6 bg-background border border-border rounded-lg">
              <div className="font-bold text-xl text-primary">2</div>
              <div className="font-semibold mt-2">Interview</div>
              <div className="text-sm text-muted-foreground mt-1">A short chat to align expectations.</div>
            </div>
            <div className="p-6 bg-background border border-border rounded-lg">
              <div className="font-bold text-xl text-primary">3</div>
              <div className="font-semibold mt-2">Match</div>
              <div className="text-sm text-muted-foreground mt-1">We place you on a project that fits your goals.</div>
            </div>
            <div className="p-6 bg-background border border-border rounded-lg">
              <div className="font-bold text-xl text-primary">4</div>
              <div className="font-semibold mt-2">Onboard</div>
              <div className="text-sm text-muted-foreground mt-1">Start contributing with mentorship and structure.</div>
            </div>
          </div>

          <div className="mt-8">
            <Button size="lg" className="bg-primary text-primary-foreground">Apply Now</Button>
          </div>
        </div>
      </section>

      {/* Contact / Footer prompt */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h4 className="text-lg font-semibold">Questions?</h4>
          <p className="text-muted-foreground">Reach out via hello@asldevteam.com or follow us on social media.</p>
        </div>
      </section>
    </main>
  );
}

export default AIESEC_Landing;
