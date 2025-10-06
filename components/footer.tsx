export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">TechCircuit PCB</h3>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              정밀 PCB 제조의 선두주자로서
              <br />
              최고의 품질과 서비스를 제공합니다.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">빠른 링크</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  회사소개
                </a>
              </li>
              <li>
                <a
                  href="#facilities"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  시설안내
                </a>
              </li>
              <li>
                <a
                  href="#visitor-guide"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  방문안내
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  연락처
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">인증 및 규격</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>ISO 9001:2015</li>
              <li>ISO 14001:2015</li>
              <li>UL 인증</li>
              <li>RoHS 준수</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; 2025 TechCircuit PCB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
