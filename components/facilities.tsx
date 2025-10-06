import { Factory, Microscope, Package, Shield } from "lucide-react"

export function Facilities() {
  const facilities = [
    {
      icon: Factory,
      title: "생산 라인",
      description: "자동화된 SMT 라인과 다층 PCB 제조 설비",
      image: "/automated-pcb-manufacturing-production-line.jpg",
    },
    {
      icon: Microscope,
      title: "품질 검사실",
      description: "AOI, X-Ray 검사 등 첨단 검사 장비 완비",
      image: "/pcb-quality-inspection-laboratory-equipment.jpg",
    },
    {
      icon: Package,
      title: "포장 및 출하",
      description: "정전기 방지 포장과 체계적인 물류 시스템",
      image: "/electronics-packaging-and-shipping-facility.jpg",
    },
    {
      icon: Shield,
      title: "클린룸",
      description: "Class 10,000 클린룸에서의 정밀 작업",
      image: "/electronics-cleanroom-manufacturing-environment.jpg",
    },
  ]

  return (
    <section id="facilities" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">시설 안내</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            최첨단 설비와 체계적인 생산 시스템으로 최고 품질의 PCB를 제조합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={facility.image || "/placeholder.svg"}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <facility.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground">{facility.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground leading-relaxed">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
