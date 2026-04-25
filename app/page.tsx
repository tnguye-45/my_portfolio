import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PortfolioSection } from "@/components/portfolio-section"
import { PhotoGallery } from "@/components/photo-gallery"
import { VideoReel } from "@/components/video-reel"
import { CodeProjects } from "@/components/code-projects"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PortfolioSection />
      <PhotoGallery />
      <VideoReel />
      <CodeProjects />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
