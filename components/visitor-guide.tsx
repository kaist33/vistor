import { Calendar, Clock, MapPin, Shield, UserCheck, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function VisitorGuide() {
  const guidelines = [
    {
      icon: Calendar,
      title: "방문 예약",
      content: "방문 3일 전까지 사전 예약 필수",
    },
    {
      icon: Clock,
      title: "운영 시간",
      content: "평일 09:00 - 17:00 (점심시간 12:00-13:00)",
    },
    {
      icon: UserCheck,
      title: "신분 확인",
      content: "방문 시 신분증 지참 및 출입증 발급",
    },
    {
      icon: Shield,
      title: "안전 수칙",
      content: "안전모, 안전화 착용 (현장 제공)",
    },
    {
      icon: MapPin,
      title: "주차 안내",
      content: "방문자 전용 주차장 이용 가능",
    },
    {
      icon: AlertCircle,
      title: "촬영 금지",
      content: "생산 시설 내 사진/동영상 촬영 금지",
    },
  ]

  return (
    <section id="visitor-guide" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">방문 안내</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            안전하고 원활한 방문을 위해 아래 안내사항을 확인해주시기 바랍니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {guidelines.map((item, index) => (
            <Card key={index} className="border-border bg-card hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg text-card-foreground">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-4xl mx-auto border-primary/20 bg-primary/5">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              오시는 길
            </h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                <strong className="text-foreground">주소:</strong> 경기도 화성시 첨단산업로 123 TechCircuit 빌딩
              </p>
              <p>
                <strong className="text-foreground">대중교통:</strong> 지하철 1호선 병점역 3번 출구, 마을버스 10분
              </p>
              <p>
                <strong className="text-foreground">자가용:</strong> 영동고속도로 동탄IC에서 15분
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
