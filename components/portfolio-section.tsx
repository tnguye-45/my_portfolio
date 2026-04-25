"use client"

import Image from "next/image"
import { ExternalLink, Play, Code2, Camera, Film, Mountain } from "lucide-react"
import { cn } from "@/lib/utils"

interface HighlightItem {
  id: string
  type: "freelance" | "landscape" | "code" | "video"
  title: string
  description?: string
  image?: string
  link?: string
}

const highlights: HighlightItem[] = [
  {
    id: "h1",
    type: "freelance",
    title: "Event Photography",
    description: "DJ performances and live events",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC09872-GuKZAgpXkWuzSnICdqpHYsExaGExiI.jpg",
  },
  {
    id: "h2",
    type: "landscape",
    title: "Landscape Work",
    description: "Nature and urban landscapes",
  },
  {
    id: "h3",
    type: "code",
    title: "Coding Projects",
    description: "Web apps and open source tools",
  },
  {
    id: "h4",
    type: "video",
    title: "Video Production",
    description: "Brand films and event coverage",
  },
]

const typeConfig = {
  freelance: { icon: Camera, label: "Freelance Photo/Video", color: "text-accent" },
  landscape: { icon: Mountain, label: "Landscape Work", color: "text-accent" },
  code: { icon: Code2, label: "Coding Projects", color: "text-accent" },
  video: { icon: Film, label: "Videos", color: "text-accent" },
}

export function PortfolioSection() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Highlights
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A curated selection of my work across photography, video, and code
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <HighlightCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function HighlightCard({ item }: { item: HighlightItem }) {
  const config = typeConfig[item.type]
  const Icon = config.icon

  return (
    <article className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 cursor-pointer">
      <div className="aspect-[4/3] relative overflow-hidden bg-secondary">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="h-12 w-12 text-muted-foreground/50" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 mb-2">
            <Icon className={cn("h-4 w-4", config.color)} />
            <span className="text-xs font-mono text-accent uppercase tracking-wider">
              {config.label}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
            {item.title}
          </h3>
          {item.description && (
            <p className="text-sm text-muted-foreground mt-1">
              {item.description}
            </p>
          )}
        </div>
      </div>
    </article>
  )
}
