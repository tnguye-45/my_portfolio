"use client"

import { Camera } from "lucide-react"

const photos = [
  { id: 1, title: "Sunset Silhouette", aspect: "portrait" },
  { id: 2, title: "City Lights", aspect: "landscape" },
  { id: 3, title: "Mountain Peak", aspect: "landscape" },
  { id: 4, title: "Street Portrait", aspect: "portrait" },
  { id: 5, title: "Abstract Lines", aspect: "square" },
  { id: 6, title: "Nature Close-up", aspect: "landscape" },
]

export function PhotoGallery() {
  return (
    <section id="photo" className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-accent font-mono text-sm tracking-widest uppercase mb-4">
            <Camera className="h-4 w-4" />
            Photography
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Captured Moments
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            From urban landscapes to intimate portraits, I capture stories through my lens.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={`relative break-inside-avoid group cursor-pointer ${
                photo.aspect === "portrait" ? "aspect-[3/4]" : 
                photo.aspect === "landscape" ? "aspect-[4/3]" : "aspect-square"
              } bg-secondary rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-all`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-muted-foreground text-sm">{photo.title}</span>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-foreground font-medium">{photo.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">Click to view</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-colors"
          >
            View Full Gallery
            <Camera className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
