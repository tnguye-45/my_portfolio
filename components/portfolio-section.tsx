import Image from "next/image"

const highlights = [
  {
    id: 1,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC09872-GuKZAgpXkWuzSnICdqpHYsExaGExiI.jpg",
    alt: "DJ Performance - Blue Lights",
  },
  {
    id: 2,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC09759-LYqJLGmNXRKKrbz9MFcyMD1oRW2jNg.jpg",
    alt: "DJ Portrait - Red & Blue",
  },
  {
    id: 3,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC00434-33Jif76cv6qktajXWx6C3deCeZzGvX.jpg",
    alt: "DJ Duo - Smoke Effects",
  },
  {
    id: 4,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC09619.JPG-XLDWcL6p4pZz84epkq8mMnp5r2vNO9.jpeg",
    alt: "Holiday Feast Spread",
  },
]

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
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A quick glimpse of my work. Scroll down to explore more.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((photo) => (
            <div
              key={photo.id}
              className="group relative aspect-square rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-all"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-foreground font-medium text-sm text-center px-2">{photo.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
