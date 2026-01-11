import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Award, 
  Heart, 
  Shield, 
  Globe, 
  Star, 
  CheckCircle2,
  MessageCircle,
  Instagram,
  ArrowRight,
  Trophy,
  Users,
  Dna,
  Handshake,
  ExternalLink,
  Languages,
  Dog,
  Info,
  Mail,
  Newspaper
} from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const { t: tI18n, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState("home");

  // Sincronizar abas com hash da URL para navegação externa/links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (["about", "dogs", "available", "kennel", "blog", "contact", "partners"].includes(hash)) {
        setActiveTab(hash === "kennel" ? "available" : hash);
      } else if (!hash || hash === "") {
        setActiveTab("home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Check on mount

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Estado para controlar a cor selecionada na galeria
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  
  // 1. ESTADO DO IDIOMA ('pt' ou 'en')
  const lang = i18n.language as "pt" | "en";

  // 2. DICIONÁRIO DE TRADUÇÕES
  const translations = {
    pt: {
      hero: {
        location: "Bahia - Brasil | Exportação Mundial",
        title: "Lions Alpha Kennel",
        subtitle: "Melhores Bullys. DNA Alpha.",
        desc: "AMERICAN BULLY and BRAZILIAN BULL 🧬 XL, Standard, Classic, Pocket com genética de elite reconhecida internacionalmente.",
        btnDogs: "Conheça Nossa Matilha",
        btnContact: "Contato Internacional",
        stats: { countries: "Países Atendidos", clients: "Clientes Satisfeitos", years: "Anos de Experiência" }
      },
      about: {
        title: "Sobre o Lions Alpha Kennel",
        p1: (<span>O <strong className="text-primary">Lions Alpha Kennel</strong> nasceu da paixão por criar cães excepcionais...</span>),
        text1: "O Lions Alpha Kennel nasceu da paixão por criar cães excepcionais, com genética de elite e temperamento equilibrado. Localizado na Bahia, Brasil, nos especializamos em American Bully XL e Brazilian Bull (Pit Monster), raças que exigem dedicação, conhecimento técnico e compromisso com a excelência.",
        text2: "Nossa missão é produzir exemplares que representem o padrão internacional de qualidade, com estrutura física impressionante, saúde impecável e comportamento equilibrado.",
        text3: "Atendemos clientes em mais de 15 países, incluindo Brasil, Venezuela, Espanha, Índia, Estados Unidos e outros mercados internacionais.",
        cards: {
          genetics: { title: "Genética Elite", desc: "Linhagens internacionais comprovadas" },
          ethics: { title: "Ética Total", desc: "Transparência em todo processo" },
          global: { title: "Alcance Global", desc: "Exportação para 15+ países" },
          care: { title: "Cuidado Premium", desc: "Suporte completo vitalício" }
        }
      },
      dogs: {
        title: "Nossa Matilha Alpha",
        subtitle: "Conheça os exemplares que representam a excelência genética do Lions Alpha Kennel.",
        labels: { line: "Linhagem", color: "Cor", btn: "Ver Detalhes" },
        list: [
          {
            name: "Simba",
            type: "American Bully Standart",
            color: "Blue Fawn",
            bloodline: "American Bully Standart",
            image: "/images/Simba.png",
            features: ["Estrutura XXL", "Temperamento Equilibrado", "Genética Elite"],
            link: "https://www.instagram.com/reel/DNdLBvsgNDP/"
          },
          {
            name: "Bardock",
            type: "Brazilian Bull",
            color: "Tri-Color",
            bloodline: "Brazilian Bull",
            image: "/images/Bardock.png",
            features: ["Massa Muscular", "Cabeça Poderosa", "Linhagem Exclusiva"],
            link: "https://www.instagram.com/p/DPr9jc7CbPL/"
          },
          {
            name: "Bulma",
            type: "American Bully Classic",
            color: "Champagne",
            bloodline: "American Bully Classic",
            image: "/images/bulma.png",
            features: ["Fêmea Premium", "Produção Elite", "Padrão Internacional"],
            link: "https://www.instagram.com/p/DMk5_CPM6Qg/"
          }
        ]
      },
      colorations: {
        title: "Conheça Nossas Colorações",
        subtitle: "Selecione uma opção abaixo para ver os detalhes de cada coloração rara.",
        list: [
          {
            name: "Lilac",
            description: "Coloração rara e sofisticada, resultado de genética diluída que produz tons acinzentados com reflexos lilás.",
            image: "/images/lilac.png"
          },
          {
            name: "Blue",
            description: "Coloração clássica e muito valorizada, com tons azulados que demonstram genética de qualidade superior.",
            image: "/images/blue.png"
          },
          {
            name: "Black",
            description: "Coloração sólida e imponente, representa força e elegância em sua forma mais pura.",
            image: "/images/black.png"
          },
          {
            name: "Chocolate",
            description: "Coloração rica e profunda, com tons marrons que evidenciam linhagens exclusivas e raras.",
            image: "/images/chocolate.png"
          }
        ]
      },
      experience: {
        title: "A Melhor Experiência Alpha",
        subtitle: "Do primeiro contato ao acompanhamento vitalício, oferecemos uma experiência premium e personalizada.",
        cards: [
          { title: "Consultoria Personalizada", text: "Atendimento individual para entender suas necessidades. Suporte em português, inglês e espanhol." },
          { title: "Documentação Completa", text: "Pedigree internacional, certificados de saúde, vacinas e toda documentação para exportação." },
          { title: "Transporte Internacional", text: "Logística especializada com parceiros certificados para garantir segurança no transporte." },
          { title: "Acompanhamento Vitalício", text: "Suporte contínuo com orientações sobre nutrição, treinamento e saúde." },
          { title: "Garantia Genética", text: "Certificação de linhagem pura com garantia de saúde e características genéticas." },
          { title: "Comunidade Alpha", text: "Acesso exclusivo ao grupo de proprietários Alpha com eventos e networking." }
        ]
      },
      exclusive: {
        title: "Curiosidades Alpha",
        subtitle: "Conheça mais sobre a força e o temperamento das nossas raças de elite.",
        cardTitle: "Você Sabia?",
        cardText: "O American Bully XL e o Brazilian Bull são conhecidos por sua aparência imponente, mas o que realmente os define é o seu temperamento dócil e leal à família.",
        btn: "Ver Mais Curiosidades",
        facts: [
          { title: "Temperamento", desc: "Apesar do tamanho, são cães extremamente carinhosos e excelentes com crianças." },
          { title: "Estrutura", desc: "O Brazilian Bull é uma raça desenvolvida no Brasil focada em massa muscular e rusticidade." },
          { title: "Inteligência", desc: "São cães de fácil adestramento quando estimulados corretamente desde filhotes." }
        ]
      },
      testimonials: {
        title: "Alpha Family Worldwide",
        subtitle: "Depoimentos de clientes que fazem parte da família Alpha ao redor do mundo.",
        list: [
          { name: "Carlos Rodriguez", country: "Venezuela", text: "A experiência com o Lions Alpha foi excepcional. Meu Bully chegou com toda documentação.", rating: 5 },
          { name: "Raj Patel", country: "Índia", text: "Professional service from Brazil to India. The bloodline quality is outstanding.", rating: 5 },
          { name: "Miguel Santos", country: "Espanha", text: "Comprei minha fêmea há 2 anos e hoje ela é campeã. A genética do Lions Alpha é superior.", rating: 5 }
        ]
      },
      blog: {
        title: "Blog & Atualizações",
        subtitle: "Conteúdo exclusivo sobre genética, cuidados, treinamento e novidades do kennel.",
        btn: "Ler Mais",
        list: [
          { 
            title: "O Crescimento do American Bully XL no Brasil", 
            excerpt: "Entenda por que a raça American Bully XL se tornou uma das mais desejadas por famílias brasileiras em 2024.", 
            date: "10 Jan 2025",
            link: "https://www.instagram.com/lionsalphakennel/"
          },
          { 
            title: "Brazilian Pit Monster: A Força Nacional", 
            excerpt: "Conheça a história e o padrão da raça Brazilian Bull (Pit Monster), o orgulho da cinofilia brasileira.", 
            date: "05 Jan 2025",
            link: "https://www.instagram.com/lionsalphakennel/"
          },
          { 
            title: "Cuidados Essenciais com Filhotes de Grande Porte", 
            excerpt: "Dicas fundamentais de nutrição e exercícios para o desenvolvimento saudável do seu filhote Alpha.", 
            date: "28 Dez 2024",
            link: "https://www.instagram.com/lionsalphakennel/"
          }
        ]
      },
      contact: {
        title: "Entre em Contato",
        subtitle: "Atendimento internacional em português, inglês e espanhol.",
        direct: "Fale Conosco Diretamente",
        whatsapp: "WhatsApp Internacional",
        whatsappSub: "Resposta rápida 24/7",
        locationTitle: "Localização",
        locationSub: "Exportação para todo o mundo"
      },
      partners: {
        title: "Nossos Parceiros",
        subtitle: "Parcerias estratégicas que garantem o melhor para nossos clientes.",
        petzText: "Garanta 10% de desconto em todo o pet shop! Use o cupom SIMBAEBULMA",
        btn: "Visitar Parceiro"
      }
    },
    en: {
      hero: {
        location: "Bahia - Brazil | Worldwide Export",
        title: "Lions Alpha Kennel",
        subtitle: "Elite Bloodlines. Alpha DNA.",
        desc: "American Bully XL and Brazilian Bull with internationally recognized elite genetics.",
        btnDogs: "Meet Our Pack",
        btnContact: "International Contact",
        stats: { countries: "Countries Served", clients: "Satisfied Clients", years: "Years of Experience" }
      },
      about: {
        title: "About Lions Alpha Kennel",
        text1: "Lions Alpha Kennel was born from a passion for breeding exceptional dogs with elite genetics and balanced temperament. Located in Bahia, Brazil, we specialize in American Bully XL and Brazilian Bull (Pit Monster), breeds that require dedication, technical knowledge, and a commitment to excellence.",
        text2: "Our mission is to produce specimens that represent the international standard of quality, with impressive physical structure, impeccable health, and balanced behavior.",
        text3: "We serve clients in over 15 countries, including Brazil, Venezuela, Spain, India, the United States, and other international markets.",
        cards: {
          genetics: { title: "Elite Genetics", desc: "Proven international bloodlines" },
          ethics: { title: "Total Ethics", desc: "Transparency throughout the process" },
          global: { title: "Global Reach", desc: "Exporting to 15+ countries" },
          care: { title: "Premium Care", desc: "Complete lifetime support" }
        }
      },
      dogs: {
        title: "Our Alpha Pack",
        subtitle: "Meet the specimens that represent the genetic excellence of Lions Alpha Kennel.",
        labels: { line: "Bloodline", color: "Color", btn: "View Details" },
        list: [
          {
            name: "Simba",
            type: "American Bully XL",
            color: "Blue Fawn",
            bloodline: "The Hulk x Daxline",
            image: "/images/Simba.png",
            features: ["XXL Structure", "Balanced Temperament", "Elite Genetics"],
            link: "https://www.instagram.com/p/DFd0xcKSEK9/"
          },
          {
            name: "Bardock",
            type: "Brazilian Bull",
            color: "Tri-Color",
            bloodline: "Pit Monster Elite",
            image: "/images/Bardock.png",
            features: ["Muscle Mass", "Powerful Head", "Exclusive Bloodline"],
            link: "https://www.instagram.com/p/DPr9jc7CbPL/"
          },
          {
            name: "Bulma",
            type: "American Bully XL",
            color: "Champagne",
            bloodline: "BGK x Showtime",
            image: "/images/bulma.png",
            features: ["Premium Female", "Elite Production", "International Standard"],
            link: "https://www.instagram.com/p/DMk5_CPM6Qg/"
          }
        ]
      },
      colorations: {
        title: "Meet Our Colors",
        subtitle: "Select an option below to see details of each rare coloration.",
        list: [
          {
            name: "Lilac",
            description: "Rare and sophisticated coloration, result of diluted genetics producing grayish tones with lilac reflections.",
            image: "/images/lilac.png"
          },
          {
            name: "Blue",
            description: "Classic and highly valued coloration, with bluish tones demonstrating superior quality genetics.",
            image: "/images/blue.png"
          },
          {
            name: "Black",
            description: "Solid and imposing coloration, representing strength and elegance in its purest form.",
            image: "/images/black.png"
          },
          {
            name: "Chocolate",
            description: "Rich and deep coloration, with brown tones evidencing exclusive and rare bloodlines.",
            image: "/images/chocolate.png"
          }
        ]
      },
      experience: {
        title: "The Best Alpha Experience",
        subtitle: "From first contact to lifetime support, we offer a premium and personalized experience.",
        cards: [
          { title: "Personalized Consulting", text: "Individual attention to understand your needs. Support in Portuguese, English, and Spanish." },
          { title: "Complete Documentation", text: "International pedigree, health certificates, vaccines, and all necessary export documentation." },
          { title: "International Transport", text: "Specialized logistics with certified partners to ensure safety and comfort in transport." },
          { title: "Lifetime Support", text: "Continuous support with guidance on nutrition, training, health, and breed-specific care." },
          { title: "Genetic Guarantee", text: "Pure lineage certification with health guarantee and genetic characteristics." },
          { title: "Alpha Community", text: "Exclusive access to the Alpha owners group with events, updates, and international networking." }
        ]
      },
      exclusive: {
        title: "Alpha Exclusive",
        subtitle: "New bloodlines and exclusive planning. Limited reservations for selected clients.",
        cardTitle: "Upcoming Bloodlines in Planning",
        cardText: "We are preparing exclusive breedings with the best international bloodlines. Specimens with unique genetics, exceptional structure, and balanced temperament will be available soon.",
        btn: "Request Exclusive Info",
        predictions: ["Forecast: January 2025", "Forecast: March 2025", "Forecast: May 2025"]
      },
      testimonials: {
        title: "Alpha Family Worldwide",
        subtitle: "Testimonials from clients who are part of the Alpha family around the world.",
        list: [
          { name: "Carlos Rodriguez", country: "Venezuela", text: "The experience with Lions Alpha was exceptional. My Bully arrived with all documentation.", rating: 5 },
          { name: "Raj Patel", country: "India", text: "Professional service from Brazil to India. The bloodline quality is outstanding and shipping was smooth.", rating: 5 },
          { name: "Miguel Santos", country: "Spain", text: "I bought my female 2 years ago and today she is a show champion. Lions Alpha genetics are truly superior.", rating: 5 }
        ]
      },
      blog: {
        title: "Blog & Updates",
        subtitle: "Exclusive content on genetics, care, training, and kennel news.",
        btn: "Read More",
        list: [
          { title: "Elite Nutrition for American Bully XL", excerpt: "Discover nutrition secrets that keep our dogs in exceptional health.", date: "Nov 15, 2024" },
          { title: "Genetics: How We Select Our Lines", excerpt: "Understand our rigorous genetic selection process and Alpha DNA criteria.", date: "Nov 08, 2024" },
          { title: "International Export: Complete Guide", excerpt: "Everything about documentation, transport, and care to receive your Alpha.", date: "Nov 01, 2024" }
        ]
      },
      contact: {
        title: "Contact Us",
        subtitle: "International service in Portuguese, English, and Spanish.",
        direct: "Speak With Us Directly",
        whatsapp: "International WhatsApp",
        whatsappSub: "Fast response 24/7",
        locationTitle: "Location",
        locationSub: "Worldwide Export"
      },
      partners: {
        title: "Our Partners",
        subtitle: "Strategic partnerships ensuring the best for our clients and their pets.",
        petzText: "Official partner for high-quality pet products and accessories. Exclusive offers for the Lions Alpha family.",
        btn: "Visit Partner"
      }
    }
  };

  // Variável auxiliar para pegar os textos do idioma atual
  const t = translations[lang];

  // Variável auxiliar para pegar a cor ativa (agora baseada na lista traduzida)
  const activeColor = t.colorations.list[selectedColorIndex];

  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      <Header />

      <main className="flex-1 pt-20">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="sticky top-20 z-40 bg-background/95 backdrop-blur-sm border-b border-border overflow-x-auto no-scrollbar">
            <div className="container mx-auto px-4">
              <TabsList className="h-14 bg-transparent w-full justify-start gap-4 p-0">
                <TabsTrigger value="home" className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none border-0 px-4 h-full transition-all">
                  <Globe className="h-4 w-4 mr-2" /> {tI18n("nav.home")}
                </TabsTrigger>
                <TabsTrigger value="about" className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none border-0 px-4 h-full transition-all">
                  <Info className="h-4 w-4 mr-2" /> {tI18n("nav.about")}
                </TabsTrigger>
                <TabsTrigger value="dogs" className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none border-0 px-4 h-full transition-all">
                  <Dog className="h-4 w-4 mr-2" /> {tI18n("nav.dogs")}
                </TabsTrigger>
                <TabsTrigger value="available" className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none border-0 px-4 h-full transition-all">
                  <Star className="h-4 w-4 mr-2" /> {tI18n("nav.available")}
                </TabsTrigger>
                <TabsTrigger value="blog" className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none border-0 px-4 h-full transition-all">
                  <Newspaper className="h-4 w-4 mr-2" /> {tI18n("nav.blog")}
                </TabsTrigger>
                <TabsTrigger value="contact" className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none border-0 px-4 h-full transition-all">
                  <Mail className="h-4 w-4 mr-2" /> {tI18n("nav.contact")}
                </TabsTrigger>
                <TabsTrigger value="partners" className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none border-0 px-4 h-full transition-all">
                  <Handshake className="h-4 w-4 mr-2" /> {tI18n("nav.partners")}
                </TabsTrigger>
              </TabsList>
            </div>
          </div>

<TabsContent value="home" className="mt-0 outline-none">
  {/* Hero Section */}
  <section className="relative min-h-[calc(100vh-136px)] flex items-center justify-center overflow-hidden">
    {/* Imagem de Fundo */}
    <div className="absolute inset-0 z-0">
      <img 
        src="/images/hero-dog.jpg" 
        alt="Lions Alpha Kennel" 
        className="w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
    </div>
    
    {/* Conteúdo Central */}
    <div className="container relative z-10 text-center px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      
      {/* Logo Centralizada */}
      <img 
        src="/images/logo-2.png" 
        alt="Lions Alpha Logo" 
        className="w-32 md:w-48 h-auto mb-6 animate-in fade-in zoom-in duration-700" 
      />

      {/* Selo de Localização */}
      <Badge className="mb-6 text-sm px-4 py-2 bg-primary/20 text-primary border-primary/30">
        {t.hero.location}
      </Badge>

      {/* Título Principal */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
        {t.hero.title}
      </h1>

      {/* Subtítulo */}
      <p className="text-2xl md:text-3xl lg:text-4xl text-primary font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
        {t.hero.subtitle}
      </p>

      {/* Descrição */}
      <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
        {t.hero.desc}
      </p>

      {/* Botões de Ação */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground">
          <a href="#dogs">{t.hero.btnDogs}</a>
        </Button>
        <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10">
          <a href="#contact">{t.hero.btnContact}</a>
        </Button>
      </div>
      
      {/* Estatísticas */}
      <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
        <div className="text-center">
          <div className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-heading)' }}>15+</div>
          <div className="text-sm text-muted-foreground">{t.hero.stats.countries}</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-heading)' }}>500+</div>
          <div className="text-sm text-muted-foreground">{t.hero.stats.clients}</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-heading)' }}>10+</div>
          <div className="text-sm text-muted-foreground">{t.hero.stats.years}</div>
        </div>
      </div>
    </div>
  </section>
</TabsContent>

   

          <TabsContent value="about" className="mt-0 outline-none">
            {/* Sobre Nós */}
            <section id="about" className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
              {t.about.title}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/logo-2.png" 
                alt="Lions Alpha Kennel" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                {t.about.text1}
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                {t.about.text2}
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                {t.about.text3}
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <Card className="bg-background border-primary/20">
                  <CardContent className="p-6 text-center">
                    <Trophy className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">{t.about.cards.genetics.title}</h3>
                    <p className="text-sm text-muted-foreground">{t.about.cards.genetics.desc}</p>
                  </CardContent>
                </Card>
                <Card className="bg-background border-primary/20">
                  <CardContent className="p-6 text-center">
                    <Shield className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">{t.about.cards.ethics.title}</h3>
                    <p className="text-sm text-muted-foreground">{t.about.cards.ethics.desc}</p>
                  </CardContent>
                </Card>
                <Card className="bg-background border-primary/20">
                  <CardContent className="p-6 text-center">
                    <Globe className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">{t.about.cards.global.title}</h3>
                    <p className="text-sm text-muted-foreground">{t.about.cards.global.desc}</p>
                  </CardContent>
                </Card>
                <Card className="bg-background border-primary/20">
                  <CardContent className="p-6 text-center">
                    <Heart className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">{t.about.cards.care.title}</h3>
                    <p className="text-sm text-muted-foreground">{t.about.cards.care.desc}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Experiência Alpha */}
            <section id="experience" className="py-24 bg-background">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                    {t.experience.title}
                  </h2>
                  <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
                  <p className="text-lg text-muted-foreground">
                    {t.experience.subtitle}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {t.experience.cards.map((card, index) => {
                    // Mapeando ícones manualmente baseado no índice para simplificar
                    const Icons = [Users, Shield, Globe, Heart, Award, Star];
                    const Icon = Icons[index];
                    return (
                      <Card key={index} className="bg-background border-primary/20 hover:border-primary transition-colors">
                        <CardContent className="p-8">
                          <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                          <h3 className="text-xl font-bold mb-4 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                            {card.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {card.text}
                          </p>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            </section>

            {/* Depoimentos */}
            <section id="testimonials" className="py-24 bg-card">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                    {t.testimonials.title}
                  </h2>
                  <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
                  <p className="text-lg text-muted-foreground">
                    {t.testimonials.subtitle}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {t.testimonials.list.map((testimonial, index) => (
                    <Card key={index} className="bg-background border-primary/20 hover:shadow-xl transition-shadow">
                      <CardContent className="p-8">
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                          ))}
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed italic">
                          "{testimonial.text}"
                        </p>
                        <div className="border-t border-border pt-4">
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                            <Globe className="h-4 w-4 text-primary" />
                            {testimonial.country}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </TabsContent>

          <TabsContent value="dogs" className="mt-0 outline-none">
            {/* Nossos Cães */}
            <section id="dogs" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
              {t.dogs.title}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground">
              {t.dogs.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.dogs.list.map((dog, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 bg-card border-border">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={dog.image} 
                    alt={dog.name} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">{dog.type}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                    {dog.name}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Dna className="h-4 w-4 text-primary" />
                      <span><strong>{t.dogs.labels.line}:</strong> {dog.bloodline}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Award className="h-4 w-4 text-primary" />
                      <span><strong>{t.dogs.labels.color}:</strong> {dog.color}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {dog.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  {/* BOTÃO ATUALIZADO COM O LINK */}
                  <Button 
                    className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                    asChild
                  >
                    <a 
                      href={dog.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      {t.dogs.labels.btn} <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

            {/* Conheça Nossas Colorações */}
            <section id="colorations" className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
              {t.colorations.title}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground">
              {t.colorations.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {t.colorations.list.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColorIndex(index)}
                className={`
                  px-6 py-3 rounded-full font-bold transition-all duration-300 border-2
                  ${selectedColorIndex === index 
                    ? 'bg-primary text-primary-foreground border-primary scale-105 shadow-lg' 
                    : 'bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground'
                  }
                `}
              >
                {color.name}
              </button>
            ))}
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden bg-background border-primary/20 shadow-2xl transition-all duration-500">
              <div className="grid md:grid-cols-2 items-center">
                
                <div className="relative aspect-[4/5] md:h-full w-full overflow-hidden bg-muted">
                  <img 
                    key={selectedColorIndex} 
                    src={activeColor.image} 
                    alt={activeColor.name} 
                    className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-500"
                  />
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center h-full">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                    {activeColor.name}
                  </h3>
                  
                  <div className="w-16 h-1 bg-primary mb-6"></div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {activeColor.description}
                  </p>
                </div>

              </div>
            </Card>
          </div>

        </div>
      </section>

          </TabsContent>

          <TabsContent value="available" className="mt-0 outline-none">
            {/* Nosso Canil / Instagram Feed */}
            <section id="kennel" className="py-24 bg-background">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                    {tI18n("nav.available")}
                  </h2>
                  <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
                  <p className="text-lg text-muted-foreground">
                    Acompanhe o dia a dia do nosso canil, novos filhotes e a rotina da nossa matilha Alpha.
                  </p>
                </div>

                {/* Instagram Integration - Destaque para Imagens */}
                <div className="mb-16">
                  <Card className="overflow-hidden border-primary/20 bg-card shadow-2xl">
                    <CardContent className="p-0">
                      <div className="bg-primary/10 p-6 flex items-center justify-between border-b border-primary/10">
                        <div className="flex items-center gap-3">
                          <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-2 rounded-full shadow-lg">
                            <Instagram className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-foreground text-lg">@lionsalphakennel</h3>
                            <p className="text-sm text-muted-foreground">Posts, Reels e Stories diários</p>
                          </div>
                        </div>
                        <Button variant="default" size="md" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                          <a href="https://www.instagram.com/lionsalphakennel/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            Seguir Canil <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                      
                      <div className="p-4 md:p-8">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          {[
                            { id: 1, img: "/insta/1.jpg" },
                            { id: 2, img: "/insta/2.jpg" },
                            { id: 3, img: "/insta/3.jpg" },
                            { id: 4, img: "/insta/4.jpg" },
                            { id: 5, img: "/insta/5.jpg" },
                            { id: 6, img: "/insta/6.jpg" },
                            { id: 7, img: "/insta/7.jpg" },
                            { id: 8, img: "/insta/8.jpg" }
                          ].map((post) => (
                            <div key={post.id} className="aspect-square bg-muted rounded-xl flex items-center justify-center overflow-hidden group relative shadow-md hover:shadow-xl transition-all duration-500">
                              <img 
                                src={post.img} 
                                alt="Instagram Post" 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Instagram className="h-10 w-10 text-white" />
                              </div>
                              <a 
                                href="https://www.instagram.com/lionsalphakennel/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="absolute inset-0 z-10"
                              ></a>
                            </div>
                          ))}
                        </div>
                        <div className="mt-12 text-center">
                          <p className="text-muted-foreground max-w-2xl mx-auto italic">
                            "Nossa transparência é o que nos define. Veja em tempo real como cuidamos de cada exemplar da nossa linhagem."
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="max-w-4xl mx-auto">
                  <Card className="bg-gradient-to-br from-card to-card/50 border-primary/30 shadow-2xl">
                    <CardContent className="p-12 text-center">
                      <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                        <Info className="h-12 w-12 text-primary" />
                      </div>
                      <h3 className="text-3xl font-bold mb-6 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                        {t.exclusive.cardTitle}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        {t.exclusive.cardText}
                      </p>
                      <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {t.exclusive.facts.map((fact, idx) => (
                          <div key={idx} className="bg-background/50 rounded-lg p-6">
                            <h4 className="font-semibold text-primary mb-2">{fact.title}</h4>
                            <p className="text-sm text-muted-foreground">{fact.desc}</p>
                          </div>
                        ))}
                      </div>
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6" asChild>
                        <a href="https://www.instagram.com/lionsalphakennel/" target="_blank" rel="noopener noreferrer">{t.exclusive.btn}</a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

          </TabsContent>

          <TabsContent value="blog" className="mt-0 outline-none">
            {/* Blog */}
            <section id="blog" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
              {t.blog.title}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground">
              {t.blog.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.blog.list.map((post, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-colors group">
                <CardContent className="p-8">
                  <div className="text-sm text-primary font-semibold mb-4">{post.date}</div>
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Button variant="link" className="p-0 text-primary hover:text-primary/80 font-bold" asChild>
                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                      {t.blog.btn} <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

          </TabsContent>

          <TabsContent value="contact" className="mt-0 outline-none">
            {/* --- SEÇÃO DE CONTATO --- */}
            <section id="contact" className="py-24 bg-card">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                    {t.contact.title}
                  </h2>
                  <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
                  <p className="text-lg text-muted-foreground">
                    {t.contact.subtitle}
                  </p>
                </div>

                <div className="max-w-3xl mx-auto">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-center text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                        {t.contact.direct}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* WhatsApp */}
                        <Card className="bg-background border-primary/20 hover:border-primary transition-colors">
                          <CardContent className="p-6">
                            <a 
                              href="https://wa.me/5511971651993?text=Olá!%20Quero%20Saber%20mais%20a%20respeito%20do%20american%20bully" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-4"
                            >
                              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                                <MessageCircle className="h-6 w-6 text-primary" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-foreground">{t.contact.whatsapp}</h4>
                                <p className="text-sm text-muted-foreground">{t.contact.whatsappSub}</p>
                              </div>
                            </a>
                          </CardContent>
                        </Card>

                        {/* Instagram */}
                        <Card className="bg-background border-primary/20 hover:border-primary transition-colors">
                          <CardContent className="p-6">
                            <a 
                              href="https://www.instagram.com/lionsalphakennel/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-4"
                            >
                              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                                <Instagram className="h-6 w-6 text-primary" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-foreground">Instagram</h4>
                                <p className="text-sm text-muted-foreground">@lionsalphakennel</p>
                              </div>
                            </a>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Localização */}
                    <div className="bg-background border border-primary/20 rounded-lg p-8 text-center md:text-left flex flex-col md:flex-row items-center justify-center gap-6">
                       <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                          <Globe className="h-8 w-8 text-primary" />
                       </div>
                       <div className="text-left">
                          <h4 className="font-semibold text-foreground mb-2 text-xl">{t.contact.locationTitle}</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            <strong className="text-foreground">Lions Alpha Kennel</strong><br />
                            Salvador - Bahia - Brasil<br />
                            <span className="text-primary font-medium">{t.contact.locationSub}</span>
                          </p>
                       </div>
                    </div>

                  </div>
                </div>
              </div>
            </section>
          </TabsContent>

          <TabsContent value="partners" className="mt-0 outline-none">
            {/* Nossos Parceiros */}
            <section id="partners" className="py-24 bg-background">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                    {t.partners.title}
                  </h2>
                  <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
                  <p className="text-lg text-muted-foreground">
                    {t.partners.subtitle}
                  </p>
                </div>

                <div className="max-w-2xl mx-auto">
                  <Card className="bg-card border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-2xl">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Handshake className="h-10 w-10 text-primary" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                          <h3 className="text-2xl font-bold mb-3 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
                            Petz
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            {t.partners.petzText}
                          </p>
                          <Button 
                            asChild
                            className="bg-primary hover:bg-primary/90 text-primary-foreground"
                          >
                            <a 
                              href="https://www.petz.com.br/parceiro/Simbaebulma" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2"
                            >
                              {t.partners.btn}
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
}
