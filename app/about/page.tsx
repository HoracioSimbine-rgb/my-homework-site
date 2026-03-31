'use client';

import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col overflow-x-hidden pb-20 md:pb-0">
      
      {/* Navigation Bar (Clean Logo) */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-black text-blue-800 tracking-tighter">
            Moz<span className="text-orange-500">Biz</span>
          </Link>
          <div className="space-x-8 text-sm font-semibold hidden md:flex items-center">
            <Link href="/" className="text-gray-500 hover:text-blue-800 transition-colors">Diretório</Link>
            <Link href="/about" className="text-blue-800 border-b-2 border-orange-500 pb-1">Sobre Nós</Link>
            <Link href="/contact" className="text-gray-500 hover:text-blue-800 transition-colors">Contacto</Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="flex-grow max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          
          <div className="md:w-1/2 h-80 md:h-auto relative bg-gray-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
              alt="A Nossa Equipa" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/20"></div>
          </div>

          <div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
            
            {/* THE BIG FLAG IS RIGHT HERE */}
            <div className="text-6xl mb-6 drop-shadow-md">🇲🇿</div>
            
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">A Nossa Missão</h1>
            
            <p className="text-lg mb-6 text-gray-600 leading-relaxed">
              O MozBiz foi criado com um objetivo único: fortalecer a economia local. Ajudamos a ligar cidadãos e turistas a incríveis pequenas empresas em Maputo, Beira, Nampula e muito mais. 
            </p>

            <p className="text-lg mb-10 text-gray-600 leading-relaxed">
              Ao comprar localmente, fortalecemos as nossas comunidades, criamos empregos e construímos um futuro melhor para Moçambique.
            </p>

            <div>
              <Link href="/" className="inline-flex items-center justify-center bg-orange-500 text-white font-bold px-8 py-4 min-h-[44px] rounded-full hover:bg-orange-600 shadow-lg hover:-translate-y-1 transition-all duration-300">
                Explorar o Diretório &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer (Clean Logo) */}
      <footer className="bg-gray-950 text-gray-400 py-12 text-center mt-auto md:mb-0 mb-16">
        <div className="text-2xl font-black text-white tracking-tighter mb-4">
          Moz<span className="text-orange-500">Biz</span>
        </div>
        <p className="text-sm">© 2026 MozBiz Directory. Desenvolvido para contexto moçambicano.</p>
      </footer>

      {/* Mobile Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 flex justify-around items-center pb-safe z-50 shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.1)]">
        <Link href="/" className="flex flex-col items-center justify-center w-full py-3 min-h-[56px] text-gray-400 hover:text-blue-800 transition-colors">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          <span className="text-[10px] font-bold">Início</span>
        </Link>
        <Link href="/about" className="flex flex-col items-center justify-center w-full py-3 min-h-[56px] text-blue-800">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span className="text-[10px] font-bold">Sobre</span>
        </Link>
        <Link href="/contact" className="flex flex-col items-center justify-center w-full py-3 min-h-[56px] text-gray-400 hover:text-blue-800 transition-colors">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          <span className="text-[10px] font-bold">Contacto</span>
        </Link>
      </div>

    </main>
  );
}