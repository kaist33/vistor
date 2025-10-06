"use client"

import { Building2, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">TechCircuit PCB</h1>
              <p className="text-xs text-muted-foreground">정밀 회로기판 제조</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              회사소개
            </button>
            <button
              onClick={() => scrollToSection("facilities")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              시설안내
            </button>
            <button
              onClick={() => scrollToSection("visitor-guide")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              방문안내
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              연락처
            </button>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
              >
                회사소개
              </button>
              <button
                onClick={() => scrollToSection("facilities")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
              >
                시설안내
              </button>
              <button
                onClick={() => scrollToSection("visitor-guide")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
              >
                방문안내
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
              >
                연락처
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
