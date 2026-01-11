import { Instagram, MessageCircle, Mail, MapPin } from "lucide-react";
import { APP_LOGO } from "@/const";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo e Slogan */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <img src={APP_LOGO} alt="Lions Alpha Kennel" className="h-12 w-12" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
                  Lions Alpha
                </span>
                <span className="text-xs text-muted-foreground tracking-wider">KENNEL</span>
              </div>
            </div>
            <p className="text-2xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              Alpha Family Worldwide
            </p>
            <p className="text-sm text-muted-foreground">
              Elite Bloodlines. AMERICAN BULLY and BRAZILIAN BULL 🧬 XL, Standard, Classic, Pocket.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Navegação
            </h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#dogs" className="text-sm text-muted-foreground hover:text-primary transition-colors">Nossos Cães</a></li>
              <li><a href="#experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">Experiência Alpha</a></li>
              <li><a href="#available" className="text-sm text-muted-foreground hover:text-primary transition-colors">Disponíveis</a></li>
              <li><a href="#testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">Depoimentos</a></li>
              <li><a href="#blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Salvador - Bahia, Brasil
              </li>
              <li>
                <a href="mailto:lionsalphakennel@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                  lionsalphakennel@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/5511971651993" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <MessageCircle className="h-4 w-4 text-primary" />
                  +55 (11) 97165-1993
                </a>
              </li>
              <li>
                <a href="https://instagram.com/lionsalphakennel" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-4 w-4 text-primary" />
                  @lionsalphakennel
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lions Alpha Kennel. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
