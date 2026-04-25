"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Play, Code2, Camera, Film, Mountain, Github, Star, GitFork, X } from "lucide-react"
import { cn } from "@/lib/utils"

type Category = "all" | "freelance" | "landscape" | "code" | "video"

interface FreelanceItem {
  id: string
  type: "freelance"
  title: string
  category: string
  src: string
  aspect: "portrait" | "landscape"
}

interface LandscapeItem {
  id: string
  type: "landscape"
  title: string
  aspect: "portrait" | "landscape" | "square"
}

interface CodeItem {
  id: string
  type: "code"
  name: string
  description: string
  tech: string[]
  stars: number
  forks: number
  github: string
  demo?: string
}

interface VideoItem {
  id: string
  type: "video"
  title: string
  client: string
  duration: string
}

type PortfolioItem = FreelanceItem | LandscapeItem | CodeItem | VideoItem

// Freelance Photo/Video Work
const freelanceItems: FreelanceItem[] = [
  {
    id: "f1",
    type: "freelance",
    title: "DJ Performance - Blue Lights",
    category: "Event",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC09872-GuKZAgpXkWuzSnICdqpHYsExaGExiI.jpg",
    aspect: "landscape",
  },
  {
    id: "f2",
    type: "freelance",
    title: "DJ Portrait - Red & Blue",
    category: "Event",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC09759-LYqJLGmNXRKKrbz9MFcyMD1oRW2jNg.jpg",
    aspect: "portrait",
  },
  {
    id: "f3",
    type: "freelance",
    title: "Holiday Feast Spread",
    category: "Food",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC09619.JPG-XLDWcL6p4pZz84epkq8mMnp5r2vNO9.jpeg",
    aspect: "landscape",
  },
  {
    id: "f4",
    type: "freelance",
    title: "DJ Duo - Smoke Effects",
    category: "Event",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC00434-33Jif76cv6qktajXWx6C3deCeZzGvX.jpg",
    aspect: "landscape",
  },
  {
    id: "f5",
    type: "freelance",
    title: "DJ Back View - Stage Lights",
    category: "Event",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC00078-VnySK5APpPcD5Etq8zTknWD3TRAeTV.jpg",
    aspect: "portrait",
  },
  {
    id: "f6",
    type: "freelance",
    title: "DJ Mixing - Purple Haze",
    category: "Event",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC09929-gCtVdLA5uUuPvH4wIKIVmMWhTsbaOH.jpg",
    aspect: "portrait",
  },
  {
    id: "f7",
    type: "freelance",
    title: "Thanksgiving Dinner",
    category: "Food",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC09630.JPG-MMynwFz7AgJplPOQUYNagGmOejGrJY.jpeg",
    aspect: "landscape",
  },
  {
    id: "f8",
    type: "freelance",
    title: "Dinner Gathering",
    category: "Food",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC09597.JPG-iI4TpAZh6jMSmRy5zpvPmRVOsqd0Bb.jpeg",
    aspect: "landscape",
  },
]

// Landscape Work
const landscapeItems: LandscapeItem[] = [
  { id: "l1", type: "landscape", title: "Sunset Silhouette", aspect: "portrait" },
  { id: "l2", type: "landscape", title: "City Lights", aspect: "landscape" },
  { id: "l3", type: "landscape", title: "Mountain Peak", aspect: "landscape" },
  { id: "l4", type: "landscape", title: "Street Portrait", aspect: "portrait" },
  { id: "l5", type: "landscape", title: "Abstract Lines", aspect: "square" },
  { id: "l6", type: "landscape", title: "Nature Close-up", aspect: "landscape" },
]

// Coding Projects
const codeItems: CodeItem[] = [
  {
    id: "c1",
    type: "code",
    name: "Next.js SaaS Starter",
    description: "A production-ready SaaS template with authentication, payments, and dashboard",
    tech: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    stars: 234,
    forks: 45,
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: "c2",
    type: "code",
    name: "AI Image Generator",
    description: "Web app that generates images using AI models with custom prompts",
    tech: ["React", "Python", "FastAPI", "OpenAI"],
    stars: 189,
    forks: 32,
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: "c3",
    type: "code",
    name: "Portfolio CMS",
    description: "Headless CMS specifically designed for creative portfolios",
    tech: ["Node.js", "MongoDB", "GraphQL", "React"],
    stars: 156,
    forks: 28,
    github: "https://github.com",
  },
  {
    id: "c4",
    type: "code",
    name: "Motion Library",
    description: "Lightweight animation library for smooth web transitions",
    tech: ["TypeScript", "CSS", "JavaScript"],
    stars: 312,
    forks: 67,
    github: "https://github.com",
    demo: "https://demo.com",
  },
]

// Videos
const videoItems: VideoItem[] = [
  {
    id: "v1",
    type: "video",
    title: "Brand Story Film",
    client: "Tech Startup",
    duration: "2:30",
  },
  {
    id: "v2",
    type: "video",
    title: "Documentary Short",
    client: "Personal Project",
    duration: "8:45",
  },
  {
    id: "v3",
    type: "video",
    title: "Event Highlights",
    client: "Corporate Client",
    duration: "3:15",
  },
]

const categories: { value: Category; label: string; icon: React.ReactNode }[] = [
  { value: "all", label: "All Work", icon: null },
  { value: "freelance", label: "Freelance Photo/Video", icon: <Camera className="h-4 w-4" /> },
  { value: "landscape", label: "Landscape Work", icon: <Mountain className="h-4 w-4" /> },
  { value: "code", label: "Coding Projects", icon: <Code2 className="h-4 w-4" /> },
  { value: "video", label: "Videos", icon: <Film className="h-4 w-4" /> },
]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("all")
  const [selectedPhoto, setSelectedPhoto] = useState<FreelanceItem | null>(null)

  const getFilteredItems = (): PortfolioItem[] => {
    switch (activeCategory) {
      case "freelance":
        return freelanceItems
      case "landscape":
        return landscapeItems
      case "code":
        return codeItems
      case "video":
        return videoItems
      case "all":
      default:
        return [...freelanceItems, ...landscapeItems, ...codeItems, ...videoItems]
    }
  }

  const filteredItems = getFilteredItems()

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Selected Works
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2",
                activeCategory === cat.value
                  ? "bg-foreground text-background"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              )}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            if (item.type === "freelance") {
              return <FreelanceCard key={item.id} item={item} onSelect={setSelectedPhoto} />
            }
            if (item.type === "landscape") {
              return <LandscapeCard key={item.id} item={item} />
            }
            if (item.type === "code") {
              return <CodeCard key={item.id} item={item} />
            }
            if (item.type === "video") {
              return <VideoCard key={item.id} item={item} />
            }
            return null
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div 
            className="relative max-w-5xl max-h-[85vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="text-foreground font-medium text-lg">{selectedPhoto.title}</p>
            <p className="text-sm text-muted-foreground">{selectedPhoto.category}</p>
          </div>
        </div>
      )}
    </section>
  )
}

function FreelanceCard({ item, onSelect }: { item: FreelanceItem; onSelect: (item: FreelanceItem) => void }) {
  return (
    <article 
      onClick={() => onSelect(item)}
      className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 cursor-pointer"
    >
      <div className={cn(
        "relative overflow-hidden",
        item.aspect === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"
      )}>
        <Image
          src={item.src}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-background/80 backdrop-blur-sm rounded text-xs font-medium">
            {item.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center px-4">
            <p className="text-foreground font-medium">{item.title}</p>
            <p className="text-sm text-muted-foreground mt-1">Click to view</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <span className="text-xs font-mono text-accent uppercase tracking-wider">Freelance</span>
        <h3 className="text-lg font-semibold mt-1 group-hover:text-accent transition-colors">
          {item.title}
        </h3>
      </div>
    </article>
  )
}

function LandscapeCard({ item }: { item: LandscapeItem }) {
  return (
    <article className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 cursor-pointer">
      <div className={cn(
        "relative overflow-hidden bg-secondary flex items-center justify-center",
        item.aspect === "portrait" ? "aspect-[3/4]" : item.aspect === "landscape" ? "aspect-[4/3]" : "aspect-square"
      )}>
        <span className="text-muted-foreground text-sm">{item.title}</span>
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center">
            <p className="text-foreground font-medium">{item.title}</p>
            <p className="text-sm text-muted-foreground mt-1">Click to view</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <span className="text-xs font-mono text-accent uppercase tracking-wider">Landscape</span>
        <h3 className="text-lg font-semibold mt-1 group-hover:text-accent transition-colors">
          {item.title}
        </h3>
      </div>
    </article>
  )
}

function CodeCard({ item }: { item: CodeItem }) {
  return (
    <article className="group bg-card rounded-xl border border-border p-6 hover:border-accent/50 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="p-2 bg-secondary rounded-lg">
          <Code2 className="h-5 w-5 text-accent" />
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Star className="h-4 w-4" />
            {item.stars}
          </span>
          <span className="flex items-center gap-1">
            <GitFork className="h-4 w-4" />
            {item.forks}
          </span>
        </div>
      </div>

      <span className="text-xs font-mono text-accent uppercase tracking-wider">Code</span>
      <h3 className="text-xl font-semibold mt-1 mb-2 group-hover:text-accent transition-colors">
        {item.name}
      </h3>
      <p className="text-muted-foreground mb-4 text-pretty text-sm">
        {item.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {item.tech.map((tech) => (
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
          href={item.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="h-4 w-4" />
          Source
        </a>
        {item.demo && (
          <a
            href={item.demo}
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
  )
}

function VideoCard({ item }: { item: VideoItem }) {
  return (
    <article className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-all cursor-pointer">
      <div className="aspect-video relative bg-secondary">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-muted-foreground text-sm">{item.title}</span>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/60">
          <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
            <Play className="h-5 w-5 text-accent-foreground ml-0.5" />
          </div>
        </div>
        
        <div className="absolute bottom-2 right-2 px-2 py-1 bg-background/80 rounded text-xs font-mono">
          {item.duration}
        </div>
      </div>
      
      <div className="p-4">
        <span className="text-xs font-mono text-accent uppercase tracking-wider">Video</span>
        <h3 className="font-semibold mt-1 group-hover:text-accent transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground">{item.client}</p>
      </div>
    </article>
  )
}
