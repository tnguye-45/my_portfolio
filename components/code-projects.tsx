"use client"

import { Code2, Github, ExternalLink, Star, GitFork } from "lucide-react"

const projects = [
  {
    id: 1,
    name: "Next.js SaaS Starter",
    description: "A production-ready SaaS template with authentication, payments, and dashboard",
    tech: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    stars: 234,
    forks: 45,
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 2,
    name: "AI Image Generator",
    description: "Web app that generates images using AI models with custom prompts",
    tech: ["React", "Python", "FastAPI", "OpenAI"],
    stars: 189,
    forks: 32,
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 3,
    name: "Portfolio CMS",
    description: "Headless CMS specifically designed for creative portfolios",
    tech: ["Node.js", "MongoDB", "GraphQL", "React"],
    stars: 156,
    forks: 28,
    github: "https://github.com",
  },
  {
    id: 4,
    name: "Motion Library",
    description: "Lightweight animation library for smooth web transitions",
    tech: ["TypeScript", "CSS", "JavaScript"],
    stars: 312,
    forks: 67,
    github: "https://github.com",
    demo: "https://demo.com",
  },
]

export function CodeProjects() {
  return (
    <section id="code" className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-accent font-mono text-sm tracking-widest uppercase mb-4">
            <Code2 className="h-4 w-4" />
            Development
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Code & Projects
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Open source projects and applications I&apos;ve built and contributed to.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-card rounded-xl border border-border p-6 hover:border-accent/50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-secondary rounded-lg">
                  <Code2 className="h-5 w-5 text-accent" />
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    {project.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="h-4 w-4" />
                    {project.forks}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                {project.name}
              </h3>
              <p className="text-muted-foreground mb-4 text-pretty">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-4 w-4" />
                  Source
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  )
}
