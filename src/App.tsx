import React from "react";
import { 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  Compass, 
  Smartphone, 
  ShieldCheck, 
  Zap, 
  ChevronRight,
  Mail,
  Lock
} from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  const scrollToOffer = () => {
    const element = document.getElementById("main-payment-block");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-brand-bg font-sans selection:bg-brand-primary/20">
      
      {/* ── SEÇÃO 1 — OFERTA IMEDIATA ── */}
      <section className="pt-12 pb-20 px-6 bg-brand-bg-alt text-center border-b border-slate-100">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-center mb-8">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-2.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.2em] shadow-xl shadow-blue-600/20"
            >
              <Zap className="w-4 h-4 fill-current animate-pulse text-brand-accent" />
              Você desbloqueou uma oferta especial
            </motion.div>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black font-display leading-[1.15] mb-8 tracking-tighter text-slate-900 uppercase"
          >
            Adicione o <span className="text-brand-primary">Resumo Completo</span> da Bíblia ao seu pedido
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-14 max-w-3xl mx-auto"
          >
            <p className="text-xl md:text-3xl text-slate-900 leading-[1.25] font-black tracking-tight uppercase">
              Entenda melhor o <span className="bg-brand-primary/10 text-brand-primary px-2">contexto</span>, a mensagem central e a organização dos 66 livros da Bíblia em um material <span className="text-brand-primary">simples e intuitivo.</span>
            </p>
          </motion.div>

          {/* SLOT DE IMAGEM 1 — MOCKUP PRINCIPAL */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative mb-12"
          >
            {/* Versão Desktop */}
            <img 
              src="https://i.imgur.com/r3cL5sX.jpeg" 
              alt="Resumo Bíblico Mockup Desktop" 
              className="hidden md:block w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
            />
            {/* Versão Mobile */}
            <img 
              src="https://i.imgur.com/zPqHFkK.jpeg" 
              alt="Resumo Bíblico Mockup Mobile" 
              className="block md:hidden w-full max-w-sm mx-auto rounded-xl shadow-xl"
            />
          </motion.div>

          <div id="main-payment-block" className="space-y-2 mb-10">
            <div className="text-slate-400 text-sm">De <span className="line-through decoration-red-600 decoration-2">R$ 97,00</span> por apenas</div>
            <div className="font-display font-black text-6xl md:text-7xl text-slate-900 tracking-tighter">
              <sup className="text-xl text-brand-accent mr-1 -top-6">R$</sup>29,90
            </div>
            <p className="text-[10px] font-bold tracking-widest uppercase text-slate-400 pt-2">
              Pagamento único · Acesso vitalício · Livro digital entregue por e-mail
            </p>
          </div>

          <div className="max-w-md mx-auto space-y-6">
            <button 
              onClick={scrollToOffer}
              className="w-full bg-brand-urgency text-white py-6 px-4 rounded-[2.5rem] shadow-[0_20px_50px_rgba(40,167,69,0.4)] hover:bg-[#218838] transition-all duration-300 active:scale-[0.98] flex flex-col items-center gap-1 group"
            >
              <div className="flex items-center gap-2 font-black text-xl md:text-2xl tracking-tight uppercase">
                Sim, quero adicionar por R$ 29,90
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </div>
              <div className="text-[11px] md:text-sm font-semibold opacity-90 uppercase tracking-widest">
                Pagamento Único • Acesso Vitalício
              </div>
            </button>
            <button className="text-slate-300 hover:text-slate-400 transition-colors text-[10px] font-bold uppercase tracking-[0.2em] underline decoration-slate-200 underline-offset-8">
              Não, obrigado. Quero continuar sem este material.
            </button>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 2 — O QUE VOCÊ RECEBE ── */}
      <section className="bg-brand-bg-alt border-y border-slate-100">
        <div className="container mx-auto max-w-6xl overflow-hidden">
          {/* Versão Desktop */}
          <img 
            src="https://i.imgur.com/NQhJXoa.jpeg" 
            alt="O Que Você Leva - Desktop" 
            className="hidden md:block w-full h-auto"
          />
          {/* Versão Mobile */}
          <img 
            src="https://i.imgur.com/mDZpYew.png" 
            alt="O Que Você Leva - Mobile" 
            className="block md:hidden w-full h-auto"
          />
        </div>
      </section>

      {/* ── SEÇÃO 3 — POR QUE VALE ADICIONAR AGORA ── */}
      <section className="py-24 bg-brand-bg-alt px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-black font-display text-slate-900 uppercase mb-8 leading-[1.15] tracking-tighter">
            CHEGA DE VERGONHA POR NÃO ENTENDER A BÍBLIA
          </h2>
          
          <div className="space-y-6 max-w-2xl mx-auto mb-20 text-slate-500 text-lg md:text-xl font-light leading-relaxed">
            <p className="text-slate-700">
              A Bíblia é profunda, e nem sempre é fácil entender o contexto de cada livro sozinho.
            </p>
            <p className="font-bold text-slate-900 border-l-4 border-brand-primary pl-6 py-2 bg-brand-primary/5">
              Este material não substitui a Bíblia. Ele ajuda você a estudar com mais direção, consultar informações importantes e acompanhar melhor a linha da história bíblica.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "Acesso imediato", i: <Mail className="w-5 h-5" /> },
              { t: "Acesso vitalício", i: <Lock className="w-5 h-5" /> },
              { t: "Garantia de 7 dias", i: <ShieldCheck className="w-5 h-5" /> }
            ].map((b, i) => (
              <div key={i} className="flex flex-col items-center gap-4 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <div className="text-brand-primary">{b.i}</div>
                <span className="font-black font-display text-xs text-slate-900 uppercase tracking-widest">{b.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 4 — CTA FINAL ── */}
      <section className="py-24 bg-brand-primary px-6 text-center text-white overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto max-w-3xl relative z-10">
          {/* SLOT DE IMAGEM 3 — MOCKUP FINAL */}
          <div className="mb-12">
            {/* Versão Desktop */}
            <motion.img 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://i.imgur.com/H8jPamQ.png" 
              alt="Mockup Final Desktop" 
              className="hidden md:block w-full max-w-3xl mx-auto rounded-3xl shadow-2xl"
            />
            {/* Versão Mobile */}
            <motion.img 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://i.imgur.com/4T08LNJ.jpeg" 
              alt="Mockup Final Mobile" 
              className="block md:hidden w-full max-w-sm mx-auto rounded-2xl shadow-xl"
            />
          </div>

          <h2 className="text-3xl md:text-5xl font-black font-display uppercase tracking-tighter mb-6 leading-[1.15]">
            Última oportunidade para adicionar ao seu pedido
          </h2>
          
          <p className="text-white/50 text-lg md:text-xl max-w-xl mx-auto mb-10 font-light">
            Garanta o Resumo Completo da Bíblia por apenas <span className="text-white font-bold tracking-widest px-4 py-1.5 bg-white/10 rounded-xl border border-white/20">R$ 29,90</span> nesta oferta especial. + Bônus 27 Mapas Mentais do Novo Testamento
          </p>

          <div className="max-w-md mx-auto">
            <button 
              onClick={scrollToOffer}
              className="w-full bg-brand-urgency text-white py-6 px-4 rounded-[2.5rem] shadow-[0_20px_50px_rgba(40,167,69,0.4)] hover:bg-[#218838] transition-all duration-300 active:scale-[0.98] flex flex-col items-center gap-1 group"
            >
              <div className="flex items-center gap-2 font-black text-xl md:text-2xl tracking-tight uppercase">
                Adicionar ao meu pedido por R$ 29,90
                <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </div>
              <div className="text-[11px] md:text-sm font-semibold opacity-90 uppercase tracking-widest">
                Pagamento Único • Acesso Vitalício
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ── RODAPÉ ── */}
      <footer className="py-16 bg-brand-bg-alt px-6 text-center border-t border-slate-200">
        <div className="container mx-auto max-w-3xl space-y-12">
           <p className="text-[10px] text-slate-500 leading-relaxed max-w-xl mx-auto uppercase tracking-wide">
             O pagamento é processado pela <strong className="text-brand-primary">CAKTO</strong>, uma plataforma segura e amplamente utilizada no país. O acesso ao material é digital e enviado por e-mail após a confirmação do pagamento.
           </p>
           <div className="h-px w-10 bg-brand-primary/20 mx-auto"></div>
           <small className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.4em] block">
             © Acutis - Produtos Religiosos no Digital - 2024
           </small>
        </div>
      </footer>

    </div>
  );
}

