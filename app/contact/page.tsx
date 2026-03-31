'use client';

import Link from 'next/link';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col overflow-x-hidden pb-20 md:pb-0">
      
      {/* --- Simple Navigation --- */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-black text-blue-800 tracking-tighter">
            Moz<span className="text-orange-500">Biz</span>
          </Link>
          <div className="text-sm font-bold text-gray-500 hidden md:block">
            Apoio ao Cliente
          </div>
        </div>
      </nav>

      {/* --- Contact Form Section --- */}
      <section className="max-w-2xl mx-auto px-6 py-12 flex-grow w-full">
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Fale Connosco</h1>
          <p className="text-gray-500 mb-8 font-medium">Tem alguma dúvida ou quer adicionar a sua empresa ao diretório? Preencha o formulário abaixo.</p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* Standard Text Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Nome Completo</label>
              <input 
                type="text" 
                id="name"
                required
                className="w-full px-4 py-3 min-h-[44px] rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                placeholder="Ex: João Silva"
              />
            </div>

            {/* MOBILE OPTIMIZED: type="email" forces the keyboard to show the '@' and '.' keys */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                id="email"
                required
                className="w-full px-4 py-3 min-h-[44px] rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                placeholder="joao@exemplo.co.mz"
              />
            </div>

            {/* MOBILE OPTIMIZED: type="tel" forces the mobile number pad to open instead of the alphabet */}
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Telefone (Opcional)</label>
              <input 
                type="tel" 
                id="phone"
                className="w-full px-4 py-3 min-h-[44px] rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                placeholder="+258 84 123 4567"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Mensagem</label>
              <textarea 
                id="message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all resize-none"
                placeholder="Como podemos ajudar?"
              ></textarea>
            </div>

            {/* TOUCH TARGET COMPLIANT: min-h-[44px] for easy tapping */}
            <button 
              type="submit" 
              className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-4 px-6 min-h-[44px] rounded-xl transition-colors shadow-md flex justify-center items-center gap-2"
            >
              Enviar Mensagem
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </form>
        </div>
      </section>

      {/* --- NATIVE APP FEATURE: Mobile Bottom Navigation Bar (Same as home page) --- */}
      <div className="md:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 flex justify-around items-center pb-safe z-50 shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.1)]">
        <Link href="/" className="flex flex-col items-center justify-center w-full py-3 min-h-[56px] text-gray-400 hover:text-blue-800 transition-colors">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          <span className="text-[10px] font-bold">Início</span>
        </Link>
        <Link href="/about" className="flex flex-col items-center justify-center w-full py-3 min-h-[56px] text-gray-400 hover:text-blue-800 transition-colors">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span className="text-[10px] font-bold">Sobre</span>
        </Link>
        <Link href="/contact" className="flex flex-col items-center justify-center w-full py-3 min-h-[56px] text-blue-800">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          <span className="text-[10px] font-bold">Contacto</span>
        </Link>
      </div>

    </main>
  );
}