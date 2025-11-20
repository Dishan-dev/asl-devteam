"use client";

import { Card } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Lead Developer",
    initials: "SC",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Marcus Rodriguez",
    role: "Product Designer",
    initials: "MR",
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Alex Thompson",
    role: "DevOps Engineer",
    initials: "AT",
    color: "from-teal-500 to-teal-600",
  },
  {
    name: "Jordan Kim",
    role: "Full Stack Developer",
    initials: "JK",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    name: "Emma Wilson",
    role: "UI/UX Lead",
    initials: "EW",
    color: "from-pink-500 to-pink-600",
  },
  {
    name: "David Okonkwo",
    role: "Data Scientist",
    initials: "DO",
    color: "from-orange-500 to-orange-600",
  },
];

export function Team() {
  return (
    <section id="team" className="py-20 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide">Our Community</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Our People. Our Power.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the talented individuals driving innovation and impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="p-6 bg-background border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 text-center space-y-4 cursor-pointer group"
            >
              <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center text-white text-xl font-bold`}>
                {member.initials}
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary font-semibold mt-1">{member.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
