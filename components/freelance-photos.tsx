"use client"

import { useState } from "react"
import Image from "next/image"
import { Aperture, X } from "lucide-react"
import { freelancePhotos, type PhotoItem } from "@/lib/portfolio-media"

type FilterCategory = "all" | PhotoItem["category"]

const filterCategories = Array.from(
  new Set(freelancePhotos.map((photo) => photo.category))
) as PhotoItem["category"][]

const aspectClasses: Record<PhotoItem["aspect"], string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
}

export function FreelancePhotos() {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null)
  const [filter, setFilter] = useState<FilterCategory>("all")

  const filteredPhotos = filter === "all" 
    ? freelancePhotos 
    : freelancePhotos.filter(photo => photo.category === filter)

  return (
    <section id="freelance" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-accent font-mono text-sm tracking-widest uppercase mb-4">
            <Aperture className="h-4 w-4" />
            Freelance Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Freelance Photography
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Event coverage, food photography, and more. Capturing the energy and atmosphere of live events and culinary moments.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-12">
          {(["all", ...filterCategories] as FilterCategory[]).map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category === "all" ? "All" : category}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className={`relative break-inside-avoid group cursor-pointer ${aspectClasses[photo.aspect]} rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-all bg-secondary`}
            >
              {photo.src ? (
                <Image
                  src={photo.src}
                  alt={photo.alt ?? photo.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
                  <span className="text-muted-foreground text-sm">
                    Add photo: {photo.title}
                  </span>
                </div>
              )}
              
              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="px-2 py-1 bg-background/80 backdrop-blur-sm rounded text-xs font-medium">
                  {photo.category}
                </span>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center px-4">
                  <p className="text-foreground font-medium">{photo.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">Click to view</p>
                </div>
              </div>
            </div>
          ))}
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
            {selectedPhoto.src ? (
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt ?? selectedPhoto.title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            ) : (
              <div className="h-full rounded-xl border border-border bg-secondary flex items-center justify-center px-6 text-center">
                <p className="text-muted-foreground">
                  Add a photo source for {selectedPhoto.title} in lib/portfolio-media.ts.
                </p>
              </div>
            )}
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
