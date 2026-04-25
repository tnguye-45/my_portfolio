import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PortfolioSection } from "@/components/portfolio-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
