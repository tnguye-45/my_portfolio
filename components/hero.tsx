"use client"

import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary via-background to-background" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="space-y-8 max-w-4xl mx-auto">
          <p className="text-accent font-mono text-sm tracking-widest uppercase animate-fade-in">
            Creative Developer & Visual Artist
          </p>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
            Crafting Digital
            <span className="block text-muted-foreground">Experiences</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            I blend photography, videography, and code to create compelling visual stories 
            and interactive experiences that captivate and inspire.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="#work"
              className="px-8 py-3 bg-foreground text-background font-medium rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 border border-border text-foreground font-medium rounded-full hover:border-accent hover:text-accent transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <Link href="#work" aria-label="Scroll to work section">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </Link>
        </div>
      </div>
    </section>
  )
}
