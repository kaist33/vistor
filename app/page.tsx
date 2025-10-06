import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Facilities } from "@/components/facilities"
import { VisitorGuide } from "@/components/visitor-guide"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Facilities />
      <VisitorGuide />
      <Contact />
      <Footer />
    </main>
  )
}
