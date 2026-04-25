"use client"

import { Play, Film } from "lucide-react"

const videos = [
  {
    id: 1,
    title: "Brand Story Film",
    client: "Tech Startup",
    duration: "2:30",
  },
  {
    id: 2,
    title: "Documentary Short",
    client: "Personal Project",
    duration: "8:45",
  },
  {
    id: 3,
    title: "Event Highlights",
    client: "Corporate Client",
    duration: "3:15",
  },
]

export function VideoReel() {
  return (
    <section id="video" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-accent font-mono text-sm tracking-widest uppercase mb-4">
            <Film className="h-4 w-4" />
            Videography
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Moving Pictures
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Cinematic storytelling that brings brands and ideas to life.
          </p>
        </div>

        {/* Featured Video */}
        <div className="mb-12">
          <div className="relative aspect-video bg-secondary rounded-xl overflow-hidden border border-border group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-muted-foreground">Demo Reel 2024</span>
            </div>
            
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="h-8 w-8 text-accent-foreground ml-1" />
              </div>
            </div>
          </div>
          <p className="text-center mt-4 text-muted-foreground">
            Watch my 2024 Demo Reel
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-all cursor-pointer"
            >
              <div className="aspect-video relative bg-secondary">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">{video.title}</span>
                </div>
                
                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/60">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <Play className="h-5 w-5 text-accent-foreground ml-0.5" />
                  </div>
                </div>
                
                {/* Duration badge */}
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-background/80 rounded text-xs font-mono">
                  {video.duration}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-medium group-hover:text-accent transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground">{video.client}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
