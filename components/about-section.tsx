"use client"

import { Camera, Film, Code2, Palette } from "lucide-react"

const skills = [
  {
    icon: Camera,
    title: "Photography",
    description: "Portrait, landscape, product, and street photography",
  },
  {
    icon: Film,
    title: "Videography",
    description: "Commercials, music videos, documentaries, and events",
  },
  {
    icon: Code2,
    title: "Development",
    description: "Full-stack web development with modern technologies",
  },
  {
    icon: Palette,
    title: "Design",
    description: "UI/UX design, branding, and visual identity",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Avatar */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto lg:mx-0 bg-secondary rounded-2xl overflow-hidden border border-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-muted-foreground">Your Photo Here</span>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-accent/30 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border border-accent/30 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
              Creative at Heart,
              <span className="text-muted-foreground block">Technical by Nature</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-pretty">
                I&apos;m a multidisciplinary creative who believes in the power of visual 
                storytelling. With a background spanning photography, videography, and 
                software development, I bring a unique perspective to every project.
              </p>
              <p className="text-pretty">
                Whether I&apos;m capturing a perfect moment through my lens, crafting a 
                cinematic narrative, or building the next web application, I approach 
                each challenge with curiosity and dedication to craft.
              </p>
            </div>

            {/* Skills */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {skills.map((skill) => (
                <div
                  key={skill.title}
                  className="p-4 bg-card rounded-xl border border-border"
                >
                  <skill.icon className="h-5 w-5 text-accent mb-2" />
                  <h3 className="font-medium mb-1">{skill.title}</h3>
                  <p className="text-xs text-muted-foreground">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
