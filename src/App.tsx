import React from "react";

export default function App() {
  const handleAcceptTrigger = () => {
    const acceptBtn = document.querySelector('cakto-upsell-accept');
    if (acceptBtn) {
      // Tenta clicar no botão dentro do Shadow DOM ou no próprio elemento
      const shadowBtn = acceptBtn.shadowRoot?.querySelector('button');
      if (shadowBtn) {
        (shadowBtn as HTMLElement).click();
      } else {
        (acceptBtn as HTMLElement).click();
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#fcf9f5] font-sans selection:bg-[#28A745]/20">
      
      {/* ── LANDING PAGE IMAGE ── */}
      <main className="max-w-[1000px] mx-auto shadow-2xl bg-white relative">
        <div 
          onClick={handleAcceptTrigger}
          className="cursor-pointer active:opacity-95 transition-opacity"
        >
          <img 
            src="https://i.imgur.com/J8gZQnt.jpeg" 
            alt="Oferta Especial Resumo Bíblico" 
            className="w-full h-auto block"
          />
        </div>

        {/* ── CAKTO UPSELL SECTION ── */}
        <div className="bg-white py-20 px-6 text-center border-t border-slate-100 pb-32">
          <div className="max-w-md mx-auto space-y-6">
            <h3 className="text-xl font-bold text-slate-800 uppercase tracking-tight mb-8">
              Aproveite esta oportunidade única agora:
            </h3>
            
            <cakto-upsell-buttons>
              <cakto-upsell-accept
                bg-color="#28A745"
                text-color="#ffffff"
                upsell-accept-url="members_area"
                offer-id="ydh33mz"
                app-base-url="https://app.cakto.com.br"
                offer-type="upsell"
                upsell-reject-url="members_area"   
              >
                Sim, quero aproveitar a oferta
              </cakto-upsell-accept>
              
              <cakto-upsell-reject
                upsell-reject-url="members_area"       
              >
                Não, eu não quero aproveitar a oferta
              </cakto-upsell-reject>
            </cakto-upsell-buttons>
            
            <div className="pt-8 border-t border-slate-50 mt-10">
              <p className="text-[10px] text-slate-400 uppercase tracking-widest leading-loose">
                Pagamento Seguro via Cakto • Acesso Imediato • 7 Dias de Garantia
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* ── MINIMAL FOOTER ── */}
      <footer className="py-16 text-center">
        <div className="h-px w-10 bg-slate-200 mx-auto mb-8"></div>
        <small className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] block">
          © Acutis - Produtos Religiosos no Digital - 2024
        </small>
      </footer>

    </div>
  );
}
