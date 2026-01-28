import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  MessageSquareOff,
  Banknote,
  CheckCircle2,
  ChevronRight,
  Menu,
  X,
  LayoutDashboard,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/LeadForm";
import { FeatureCard } from "@/components/FeatureCard";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

const openWhatsapp = (message: string) => {
    const phone = import.meta.env.VITE_WHATSAPP_PHONE;
    
    // Se ainda assim vier undefined, o link não vai quebrar o site
    if (!phone) {
      console.error("Erro: VITE_WHATSAPP_PHONE não encontrada no .env");
      return;
    }

    const encodedMessage = encodeURIComponent(message);
    // Formato que evita o erro de redirecionamento interno
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
    
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="top" className="min-h-screen font-sans bg-background selection:bg-primary/20">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-gray-900 focus:shadow-lg"
      >
        Pular para o conteúdo
      </a>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="font-display font-bold text-2xl text-primary tracking-tight">
            Doce <span className="text-gray-800">Encomenda</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Funcionalidades</a>
            <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Planos</a>
            <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Dúvidas</a>
            <Button size="sm" onClick={() => openWhatsapp("Olá! Já sou cliente e gostaria de acessar meu painel.")} variant="outline" className="font-bold">Login</Button>
            <Button size="sm" onClick={() => openWhatsapp("Olá! Vi o site e quero saber como começar a usar o Doce Encomenda.")} className="font-bold">Começar Agora</Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="p-2 rounded-md text-gray-600 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
              id="mobile-menu"
              className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                <button type="button" onClick={() => scrollToSection('features')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">Operação</button>
                <button type="button" onClick={() => scrollToSection('pricing')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">Planos</button>
                <button type="button" onClick={() => scrollToSection('faq')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">Dúvidas</button>
                <div className="pt-4 flex flex-col gap-3">
                  <Button onClick={() => openWhatsapp("Olá! Gostaria de acessar meu painel de confeiteira.")} variant="outline" className="w-full font-bold">Acessar Painel</Button>
                  <Button onClick={() => openWhatsapp("Olá! Quero criar minha vitrine digital agora.")} className="w-full font-bold">Criar Minha Vitrine</Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main id="main">

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-40 pointer-events-none" />

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Hero Copy */}
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-800 text-xs font-bold uppercase tracking-wide mb-6">
                <TrendingUp className="w-3 h-3" />
                Sua marca, sua gestão, seu lucro
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-[1.1] mb-6 text-balance">
                Pare de apenas vender doce. <br />
                <span className="text-primary">Tenha um negócio digital.</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                Assuma o controle total da sua operação. Tenha sua própria <strong>Vitrine Profissional</strong>, dashboard de vendas e pagamentos integrados. O cliente fala com VOCÊ e o dinheiro cai direto para VOCÊ.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button size="lg" variant="cta" onClick={() => openWhatsapp("Olá! Vi o site e quero transformar meu negócio com a vitrine digital.")} className="text-base group font-bold">
                  Transformar meu negócio agora
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" onClick={scrollToPricing} className="text-base">
                  Ver planos (Taxa 0%)
                </Button>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img
                        src={`https://i.pravatar.cc/100?img=${i + 15}`}
                        alt="Empreendedora"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-medium text-gray-700">
                  <span className="font-bold text-primary">+ de 200 confeiteiras</span><br />
                  escalando o faturamento este mês
                </div>
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white bg-white">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10" />
                <img
                  src="/images/hero-bg.jpg"
                  alt="Gestão de vendas digital"
                  className="w-full object-cover aspect-[4/3] opacity-90"
                  fetchPriority="high"
                  decoding="async"
                />
                {/* Floating App UI Element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] sm:w-4/5">
                  <div className="bg-white/95 backdrop-blur shadow-2xl rounded-2xl p-4 sm:p-6 border border-white transform sm:-rotate-1">
                    <div className="flex items-center justify-between mb-4 pb-4 border-b">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <LayoutDashboard className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Seu Faturamento Hoje</p>
                          <p className="text-sm font-bold text-gray-900">R$ 1.240,00</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Loja</p>
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-green-100 text-green-700 rounded-full">ONLINE</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Pedidos para entregar hoje</span>
                        <span className="font-bold">08</span>
                      </div>
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>Dinheiro direto na sua conta</span>
                        <span className="text-green-600 font-bold">TAXA ZERO</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              O WhatsApp está matando sua produtividade?
            </h2>
            <p className="text-gray-600 text-lg">
              Você não nasceu para ficar 24h respondendo preço. Você nasceu para gerir um negócio lucrativo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<MessageSquareOff className="w-6 h-6 text-red-500" />}
              title="Chega de Curiosos"
              description="Pare de enviar cardápio para quem some. Sua vitrine profissional filtra os reais compradores e automatiza o processo."
              delay={0.1}
            />
            <FeatureCard
              icon={<Banknote className="w-6 h-6 text-red-500" />}
              title="Pagamento no seu Controle"
              description="O sistema garante o recebimento do sinal antes de você ligar o forno. O dinheiro cai direto para você, sem intermediários."
              delay={0.2}
            />
            <FeatureCard
              icon={<LayoutDashboard className="w-6 h-6 text-red-500" />}
              title="Dashboard de Gestão"
              description="Abandone o papel. Tenha organização real de clientes, produtos e faturamento em um painel que é a sua casa digital."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 sm:py-20 bg-secondary/30 relative overflow-x-hidden" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="min-w-0"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6 break-words">
                Sinta-se em casa com sua própria plataforma
              </h2>
              <p className="text-gray-600 text-lg mb-8 break-words">
                Não somos um marketplace que te esconde. É o seu perfil, seu link e suas regras de negócio. Transformamos seu talento em uma operação escalável.
              </p>

              <ul className="space-y-4 w-full min-w-0">
                {[
                  "Seu Perfil Próprio com vitrine de produtos e filtros",
                  "Agenda Inteligente: O cliente reserva apenas o que você disponibiliza",
                  "Checkout Integrado: Pagamento automático e seguro",
                  "Gestão de Clientes: Saiba quem compra e quanto você lucra",
                  "Faturamento Real: Dashboard com histórico completo de vendas"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex w-full items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-white/50 min-w-0"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="block text-gray-700 font-medium flex-1 min-w-0 whitespace-normal break-words">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <div className="relative min-w-0">
              <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-xl border border-white/50 text-center">
                <h3 className="text-2xl font-bold mb-4 font-display text-gray-800">Cansada de sustentar plataformas?</h3>
                <p className="text-gray-600 mb-8">
                  Diferente de apps de entrega, o lucro é 100% seu. Cobramos uma assinatura fixa para você vender ilimitado e profissionalizar sua marca.
                </p>
                <Button size="lg" className="w-full h-14 text-lg font-bold shadow-lg" onClick={() => openWhatsapp("Olá! Cansei de pagar taxas para marketplaces. Quero vender com lucro total no Doce Encomenda.")}>
                  Quero vender mais agora 
                </Button>
                <p className="text-xs text-gray-400 mt-4">
                  Comece sua jornada digital hoje. Sem taxas ocultas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 sm:py-20 bg-white" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              O próximo passo para a sua confeitaria profissional
            </h2>
            <p className="text-gray-600 text-lg">
              Organize seus pedidos e profissionalize sua marca sem pesar no seu bolso.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* Free Tier */}
            <div className="flex flex-col p-6 sm:p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:border-gray-200 transition-colors">
              <div className="flex-1">
                <h3 className="text-xl font-bold font-display text-gray-900">Iniciante Digital</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold text-gray-900">Grátis</span>
                  <span className="text-gray-500">/sempre</span>
                </div>
                <p className="text-gray-600 mb-6">Para quem está saindo do papel e quer começar com organização.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-primary" /> Vitrine com seus produtos</li>
                  <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-primary" /> Até 15 pedidos automáticos/mês</li>
                  <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-primary" /> Link personalizado da sua marca</li>
                </ul>
              </div>
              <Button variant="outline" className="w-full mt-auto font-bold" onClick={() => openWhatsapp("Olá! Gostaria de começar no plano Iniciante (Grátis).")}>Começar Agora</Button>
            </div>

            {/* Pro Tier */}
            <div className="flex flex-col p-6 sm:p-8 rounded-3xl border-2 border-primary bg-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">DOMÍNIO TOTAL</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold font-display text-primary">Profissional</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold text-gray-900">R$ 39</span>
                  <span className="text-gray-500">/mês</span>
                </div>
                <p className="text-gray-600 mb-6">Para a empresária que quer escalar e vender sem limites.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm text-gray-900 font-bold"><CheckCircle2 className="w-4 h-4 text-primary" /> Pedidos e Vendas Ilimitadas</li>
                  <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-primary" /> Dashboard de Faturamento Real</li>
                  <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-primary" /> Filtros e Categorias Inteligentes</li>
                  <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-primary" /> Suporte VIP para Negócios</li>
                </ul>
              </div>
              <Button variant="default" className="w-full mt-auto font-bold shadow-lg" onClick={() => openWhatsapp("Olá! Quero profissionalizar meu negócio com o plano Pro de R$ 39/mês.")}>Escalar meu Faturamento</Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">
            Perguntas Frequentes
          </h2>

          <div className="space-y-6">
            {[
              { q: "O dinheiro cai direto para mim?", a: "Sim! Não somos intermediários de pagamento. O cliente paga você diretamente via Pix ou cartão integrado, e o dinheiro é seu na hora." },
              { q: "Vou ter meu próprio link?", a: "Sim. Você terá um link profissional (ex: doceencomenda.com/suamarca) para colocar na sua bio do Instagram e WhatsApp." },
              { q: "Eu consigo controlar minha agenda?", a: "Totalmente. Você define quais dias e horários atende. Se lotar, o sistema bloqueia automaticamente para novos pedidos." },
              { q: "Preciso de computador?", a: "Não. O Doce Encomenda foi feito para você gerir todo o seu negócio digital direto pelo celular." }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-display font-bold text-2xl text-white">
            Doce <span className="text-primary">Encomenda</span>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} A casa digital do confeiteiro profissional.
          </p>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#faq" className="hover:text-white transition-colors">
              Suporte
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Planos
            </a>
          </div>
        </div>
      </footer>
      </main>
    </div>
  );
}