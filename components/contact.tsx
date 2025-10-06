"use client"

import type React from "react"

import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("방문 예약 요청이 접수되었습니다. 담당자가 곧 연락드리겠습니다.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">연락처 및 방문 예약</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            방문 예약 및 문의사항은 아래 양식을 작성해주시거나 직접 연락주시기 바랍니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card className="border-border bg-card">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-card-foreground mb-2">전화 문의</h3>
                    <p className="text-muted-foreground mb-1">대표전화: 031-1234-5678</p>
                    <p className="text-muted-foreground">영업팀: 031-1234-5679</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-card-foreground mb-2">이메일</h3>
                    <p className="text-muted-foreground mb-1">info@techcircuit.co.kr</p>
                    <p className="text-muted-foreground">sales@techcircuit.co.kr</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-card-foreground mb-2">주소</h3>
                    <p className="text-muted-foreground">
                      경기도 화성시 첨단산업로 123
                      <br />
                      TechCircuit 빌딩 (우: 18469)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-border bg-card">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-xl font-bold text-card-foreground mb-6">방문 예약 신청</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="이름 *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <Input
                    name="company"
                    placeholder="회사명 *"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="이메일 *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="연락처 *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="방문 목적 및 희망 일시를 입력해주세요 *"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-background resize-none"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                  <Send className="mr-2 w-5 h-5" />
                  예약 신청하기
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
