"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Play, Code2, Palette } from "lucide-react"
import { cn } from "@/lib/utils"

type Category = "all" | "photo" | "video" | "code" | "other"

interface PortfolioItem {
  id: number
  title: string
  category: Category
  description: string
  image: string
  link?: string
  tags: string[]
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Urban Landscapes",
    category: "photo",
    description: "Capturing the essence of city life through architectural photography",
    image: "/portfolio/photo-1.jpg",
    tags: ["Photography", "Architecture", "Urban"],
  },
  {
    id: 2,
    title: "Product Showcase Film",
    category: "video",
    description: "Cinematic product video for a premium tech brand",
    image: "/portfolio/video-1.jpg",
    tags: ["Video", "Commercial", "Product"],
  },

  {
    id: 4,
    title: "Portrait Series",
    category: "photo",
    description: "Intimate portrait photography exploring human emotion",
    image: "/portfolio/photo-2.jpg",
    tags: ["Photography", "Portrait", "Studio"],
  },

  {
    id: 6,
    title: "Music Video",
    category: "video",
    description: "Creative direction and cinematography for indie artist",
    image: "/portfolio/video-2.jpg",
    tags: ["Video", "Music", "Creative"],
  },
  {
    id: 7,
    title: "AI Dashboard",
    category: "code",
    description: "Data visualization dashboard with real-time analytics",
    image: "/portfolio/code-2.jpg",
    link: "https://github.com",
    tags: ["Next.js", "D3.js", "AI"],
  },

]

const categories: { value: Category; label: string; icon: React.ReactNode }[] = [
  { value: "all", label: "All Work", icon: null },
  { value: "photo", label: "Photography", icon: null },
  { value: "video", label: "Video", icon: <Play className="h-4 w-4" /> },
  { value: "code", label: "Code", icon: <Code2 className="h-4 w-4" /> },
  { value: "other", label: "Other", icon: <Palette className="h-4 w-4" /> },
]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("all")

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

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
          {filteredItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <article className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300">
      {/* Image */}
      <div className="aspect-[4/3] relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary flex items-center justify-center">
          <span className="text-muted-foreground text-sm">Image: {item.title}</span>
        </div>
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          {item.link ? (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-accent rounded-full text-accent-foreground hover:scale-110 transition-transform"
              aria-label={`View ${item.title}`}
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          ) : (
            <span className="p-3 bg-accent rounded-full text-accent-foreground">
              {item.category === "video" ? (
                <Play className="h-5 w-5" />
              ) : (
                <ExternalLink className="h-5 w-5" />
              )}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono text-accent uppercase tracking-wider">
            {item.category}
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
