export type MediaAspect = "portrait" | "landscape" | "square"

export type PortfolioCategory = "all" | "photo" | "video" | "code" | "other"

export type PortfolioItem = {
  id: string
  title: string
  category: Exclude<PortfolioCategory, "all">
  description: string
  image?: string
  imageAlt?: string
  link?: string
  tags: string[]
}

export type PhotoItem = {
  id: string
  title: string
  category: "Event" | "Food" | "Portrait" | "Travel" | "Personal"
  src?: string
  alt?: string
  aspect: MediaAspect
}

export type VideoItem = {
  id: string
  title: string
  client: string
  duration: string
  description?: string
  videoSrc?: string
  embedUrl?: string
  thumbnail?: string
}

const eventPhotos = [
  {
    id: "dj-performance-blue-lights",
    title: "DJ Performance - Blue Lights",
    category: "Event",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC09872-GuKZAgpXkWuzSnICdqpHYsExaGExiI.jpg",
    aspect: "landscape",
  },
  {
    id: "dj-portrait-red-blue",
    title: "DJ Portrait - Red & Blue",
    category: "Event",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC09759-LYqJLGmNXRKKrbz9MFcyMD1oRW2jNg.jpg",
    aspect: "portrait",
  },
  {
    id: "dj-duo-smoke-effects",
    title: "DJ Duo - Smoke Effects",
    category: "Event",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC00434-33Jif76cv6qktajXWx6C3deCeZzGvX.jpg",
    aspect: "landscape",
  },
  {
    id: "dj-back-view-stage-lights",
    title: "DJ Back View - Stage Lights",
    category: "Event",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC00078-VnySK5APpPcD5Etq8zTknWD3TRAeTV.jpg",
    aspect: "portrait",
  },
  {
    id: "dj-mixing-purple-haze",
    title: "DJ Mixing - Purple Haze",
    category: "Event",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC09929-gCtVdLA5uUuPvH4wIKIVmMWhTsbaOH.jpg",
    aspect: "portrait",
  },
] satisfies PhotoItem[]

const foodPhotos = [
  {
    id: "holiday-feast-spread",
    title: "Holiday Feast Spread",
    category: "Food",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC09619.JPG-XLDWcL6p4pZz84epkq8mMnp5r2vNO9.jpeg",
    aspect: "landscape",
  },
  {
    id: "thanksgiving-dinner",
    title: "Thanksgiving Dinner",
    category: "Food",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC09630.JPG-MMynwFz7AgJplPOQUYNagGmOejGrJY.jpeg",
    aspect: "landscape",
  },
  {
    id: "dinner-gathering",
    title: "Dinner Gathering",
    category: "Food",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC09597.JPG-iI4TpAZh6jMSmRy5zpvPmRVOsqd0Bb.jpeg",
    aspect: "landscape",
  },
] satisfies PhotoItem[]

// To add more photos tonight:
// 1. Save the image in /public/photos.
// 2. Add a PhotoItem below with src: "/photos/your-file-name.jpg".
export const photoGallery = [...eventPhotos, ...foodPhotos] satisfies PhotoItem[]

export const freelancePhotos = photoGallery satisfies PhotoItem[]

export const portfolioItems = [
  {
    id: "live-event-coverage",
    title: "Live Event Coverage",
    category: "photo",
    description: "High-energy concert and DJ coverage with dramatic stage lighting",
    image: eventPhotos[0].src,
    imageAlt: "DJ performing under blue stage lighting",
    tags: ["Photography", "Events", "Nightlife"],
  },
  {
    id: "food-storytelling",
    title: "Food Storytelling",
    category: "photo",
    description: "Editorial food photography for gatherings, menus, and seasonal moments",
    image: foodPhotos[0].src,
    imageAlt: "Holiday feast spread on a dinner table",
    tags: ["Photography", "Food", "Editorial"],
  },
  {
    id: "product-showcase-film",
    title: "Product Showcase Film",
    category: "video",
    description: "Cinematic product video for a premium tech brand",
    tags: ["Video", "Commercial", "Product"],
  },
  {
    id: "music-video",
    title: "Music Video",
    category: "video",
    description: "Creative direction and cinematography for an indie artist",
    tags: ["Video", "Music", "Creative"],
  },
  {
    id: "ai-dashboard",
    title: "AI Dashboard",
    category: "code",
    description: "Data visualization dashboard with real-time analytics",
    link: "https://github.com",
    tags: ["Next.js", "D3.js", "AI"],
  },
] satisfies PortfolioItem[]

export const featuredVideo = {
  id: "demo-reel",
  title: "Demo Reel",
  client: "Featured Video",
  duration: "Add runtime",
  description: "Drop your reel into /public/videos and set videoSrc to publish it here.",
} satisfies VideoItem

// To add videos tonight:
// 1. Save MP4/WebM files in /public/videos.
// 2. Save optional poster images in /public/video-thumbnails.
// 3. Add videoSrc: "/videos/your-video.mp4" or embedUrl for YouTube/Vimeo.
export const videos = [
  {
    id: "brand-story-film",
    title: "Brand Story Film",
    client: "Tech Startup",
    duration: "2:30",
    description: "A concise brand story cut for web and social channels.",
  },
  {
    id: "documentary-short",
    title: "Documentary Short",
    client: "Personal Project",
    duration: "8:45",
    description: "A short-form documentary piece centered on character and place.",
  },
  {
    id: "event-highlights",
    title: "Event Highlights",
    client: "Corporate Client",
    duration: "3:15",
    description: "Fast-paced recap edit for event promotion and client delivery.",
  },
] satisfies VideoItem[]
