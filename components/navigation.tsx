"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-foreground">ASL DevTeam</span>
            </Link>
          </div>

          {/* Desktop Menu - aligned to right */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            <Link href="#mission" className="text-foreground hover:text-primary transition-colors">
              Mission
            </Link>
            <Link href="#benefits" className="text-foreground hover:text-primary transition-colors">
              Benefits
            </Link>
            <Link href="#innovators" className="text-foreground hover:text-primary transition-colors">
              Team
            </Link>
            <Link href="#social" className="text-foreground hover:text-primary transition-colors">
              Social Proof
            </Link>
            <Link href="#apply" className="text-foreground hover:text-primary transition-colors">
              Apply
            </Link>

            {/* CTA Button */}
            <div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Apply Now
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="#mission" className="block px-3 py-2 text-foreground hover:text-primary">
              Mission
            </Link>
            <Link href="#benefits" className="block px-3 py-2 text-foreground hover:text-primary">
              Benefits
            </Link>
            <Link href="#innovators" className="block px-3 py-2 text-foreground hover:text-primary">
              Team
            </Link>
            <Link href="#social" className="block px-3 py-2 text-foreground hover:text-primary">
              Social Proof
            </Link>
            <Link href="#apply" className="block px-3 py-2 text-foreground hover:text-primary">
              Apply
            </Link>
            <Button className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground">
              Apply Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
