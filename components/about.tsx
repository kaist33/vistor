import { Award, Users, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  const features = [
    {
      icon: Award,
      title: "품질 인증",
      description: "ISO 9001, ISO 14001 인증을 보유한 신뢰할 수 있는 제조 시스템",
    },
    {
      icon: Zap,
      title: "첨단 기술",
      description: "최신 자동화 설비와 정밀 검사 장비를 통한 고품질 생산",
    },
    {
      icon: Users,
      title: "전문 인력",
      description: "20년 이상의 경험을 가진 PCB 제조 전문가들이 함께합니다",
    },
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">TechCircuit PCB 소개</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            1995년 설립 이래, 우리는 전자산업의 핵심 부품인 인쇄회로기판(PCB) 제조 분야에서 끊임없는 혁신과 품질 향상을
            추구해왔습니다. 고객의 성공이 곧 우리의 성공입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
