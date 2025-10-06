"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center bg-secondary overflow-hidden">
      <div className="absolute inset-0 bg-[url('/modern-pcb-circuit-board-manufacturing-facility.jpg')] bg-cover bg-center opacity-20" />

      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-secondary/80 to-secondary" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-secondary-foreground mb-6 text-balance">
            정밀 PCB 제조의
            <br />
            새로운 기준
          </h2>
          <p className="text-lg lg:text-xl text-secondary-foreground/90 mb-8 leading-relaxed text-pretty">
            최첨단 기술과 엄격한 품질 관리로 고품질 인쇄회로기판을 생산합니다.
            <br />
            TechCircuit PCB는 전자산업의 미래를 함께 만들어갑니다.
          </p>
          <Button size="lg" onClick={scrollToContact} className="bg-accent hover:bg-accent/90 text-accent-foreground">
            방문 예약하기
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
