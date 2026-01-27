import { useRef } from "react";
import { motion } from "framer-motion";
import { 
  CalendarX2, 
  MessageSquareOff, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Banknote,
  CheckCircle2,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/LeadForm";
import { FeatureCard } from "@/components/FeatureCard";

// Using a placeholder from Unsplash for the hero mockup
// Concept: Professional dashboard on a device with pastries in background
// Photo by Eiliv Aceron on Unsplash
const HERO_IMAGE_URL = "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=2000";

const APP_URL = (import.meta.env.VITE_APP_URL as string | undefined) || "/";

export default function LandingPage() {
  const goToApp = () => {
    window.location.href = APP_URL;
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans bg-background selection:bg-primary/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="font-display font-bold text-2xl text-primary tracking-tight">
            Doce <span className="text-gray-800">Encomenda</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Funcionalidades</a>
            <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Planos</a>
            <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Dúvidas</a>
            <Button size="sm" onClick={goToApp}>Começar Grátis</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-40 pointer-events-none" />
        
        {/* Soft Blobs for Background Atmosphere */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Hero Copy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-800 text-xs font-semibold mb-6">
                <Sparkles className="w-3 h-3" />
                Novidade para Confeiteiras
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-[1.1] mb-6">
                Transforme seu WhatsApp em uma <span className="text-primary">confeitaria automática</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                Diga adeus àquela culpa de falar que não tem vaga. O <span className="font-bold text-gray-800">DoceriaOrganizada</span> diz "não" com profissionalismo por você.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button size="lg" variant="cta" onClick={goToApp} className="text-base group">
                  Começar Grátis - Sem Cartão
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" onClick={scrollToPricing} className="text-base">
                  Ver Planos
                </Button>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="User" />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-medium text-gray-700">
                  <span className="font-bold text-primary">+ de 200 confeiteiras</span><br/>
                  já automatizaram suas vendas
                </div>
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-white">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10" />
                <img 
                  src="/images/hero-bg.jpg" 
                  alt="Cozinha profissional organizada" 
                  className="w-full object-cover aspect-[4/3] opacity-90"
                />
                {/* Floating App UI Element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5">
                  <div className="bg-white/95 backdrop-blur shadow-2xl rounded-2xl p-6 border border-white transform -rotate-1">
                    <div className="flex items-center justify-between mb-4 pb-4 border-b">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Clock className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Próxima entrega</p>
                          <p className="text-sm font-bold text-gray-900">Sábado, 14:00h</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">Status</p>
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-green-100 text-green-700 rounded-full">CONFIRMADO</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Bolo de Cenoura G</span>
                        <span className="font-bold">R$ 85,00</span>
                      </div>
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>Sinal (50%)</span>
                        <span className="text-green-600 font-semibold">PAGO VIA PIX</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Problem Section: Muro das Lamentações */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Cansada da bagunça no WhatsApp?
            </h2>
            <p className="text-gray-600 text-lg">
              O DoceriaOrganizada centraliza tudo para que você foque no que ama: produzir doces incríveis.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<MessageSquareOff className="w-6 h-6" />}
              title="O pedido esquecido"
              description="Aquela mensagem que ficou lá embaixo e você só viu no dia da entrega. Constrangedor e caro."
              delay={0.1}
            />
            <FeatureCard 
              icon={<Banknote className="w-6 h-6" />}
              title="O calote do sinal"
              description="Bloqueou a data, produziu e o cliente sumiu sem pagar os 50%. Prejuízo total de tempo e insumos."
              delay={0.2}
            />
            <FeatureCard 
              icon={<CalendarX2 className="w-6 h-6" />}
              title="Aceitou sem poder"
              description="Na correria, disse 'sim' para um pedido num dia que já estava humanamente impossível de entregar."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Solution Section: A Chave da Liberdade */}
      <section className="py-20 bg-secondary/30 relative overflow-hidden" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                Ele diz "NÃO" por você
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                O sistema é o gerente "chato" que você precisa. Ele tem autoridade para bloquear datas e exigir pagamento, sem você precisar se desgastar emocionalmente com o cliente.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Cliente escolhe o produto e data disponível",
                  "Vê o resumo e valor total na hora",
                  "Faz o pagamento para confirmar (Pix)",
                  "Recebe confirmação automática no WhatsApp",
                  "Você só recebe o pedido PRONTO e PAGO"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-white/50"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50 text-center">
                <h3 className="text-2xl font-bold mb-4 font-display text-gray-800">Pronta para ter paz?</h3>
                <p className="text-gray-600 mb-8">
                  Junte-se a centenas de confeiteiras que recuperaram o controle da sua rotina.
                </p>
                <Button size="lg" className="w-full h-14 text-lg font-bold" onClick={goToApp}>
                  Criar Meu Cardápio Agora
                </Button>
                <p className="text-xs text-gray-400 mt-4">
                  7 dias de teste no plano Profissional. Cancele quando quiser.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Business Model */}
      <section className="py-20 bg-white" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Quanto custa sua paz?
            </h2>
            <p className="text-gray-600 text-lg">
              Comece pequeno e cresça com a gente. Transparência total.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Tier */}
            <div className="flex flex-col p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:border-gray-200 transition-colors">
              <div className="flex-1">
                <h3 className="text-xl font-bold font-display text-gray-900">Iniciante</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold text-gray-900">Grátis</span>
                  <span className="text-gray-500">/mês</span>
                </div>
                <p className="text-gray-600 mb-6">Ideal para conhecer o sistema e organizar os primeiros pedidos.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-primary" /> Até 15 pedidos/mês</li>
                  <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-primary" /> Cardápio Digital (com marca d'água)</li>
                  <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-primary" /> Link para Bio</li>
                </ul>
              </div>
              <Button variant="outline" className="w-full mt-auto" onClick={goToApp}>Começar Grátis</Button>
            </div>

            {/* Pro Tier */}
            <div className="flex flex-col p-8 rounded-3xl border-2 border-primary/20 bg-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">Onboarding VIP</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold font-display text-primary">Profissional</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold text-gray-900">R$ 49</span>
                  <span className="text-gray-500">/mês</span>
                </div>
                <p className="text-gray-600 mb-6">Para quem não pode perder nem um minuto com burocracia.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-primary" /> <strong>Pedidos Ilimitados</strong></li>
                  <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-primary" /> Ativação Prioritária via WhatsApp</li>
                  <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-primary" /> Relatórios de Vendas</li>
                  <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-primary" /> Consultoria de Configuração</li>
                </ul>
              </div>
              <Button variant="default" className="w-full mt-auto font-bold" onClick={() => window.open('https://wa.me/5599999999999?text=Quero%20ativar%20o%20plano%20Profissional', '_blank')}>Falar com Consultor e Ativar Pro</Button>
            </div>
          </div>
          
          <div className="text-center mt-12 bg-orange-50 p-6 rounded-2xl max-w-2xl mx-auto border border-orange-100">
            <p className="font-semibold text-orange-900 flex items-center justify-center gap-2">
              <Banknote className="w-5 h-5" />
              Objeção zero: Não cobramos taxas sobre suas vendas. O lucro é 100% seu.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">
            Dúvidas Frequentes
          </h2>
          
          <div className="space-y-6">
            {[
              { q: "Preciso baixar algum aplicativo?", a: "Não! O sistema funciona direto no navegador do seu celular ou computador. É só acessar o link." },
              { q: "Funciona em celular antigo?", a: "Sim, o sistema é super leve e foi feito pensando em quem usa o celular o dia todo na cozinha." },
              { q: "Como recebo meu dinheiro?", a: "O pagamento vai direto para o seu Pix ou conta bancária. Nós não seguramos seu dinheiro." },
              { q: "E se eu não gostar?", a: "Você pode cancelar a qualquer momento. Sem multas, sem letras miúdas." }
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
            Doceria<span className="text-primary">Organizada</span>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Feito com açúcar e tecnologia.
          </p>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
