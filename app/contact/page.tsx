'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending an email (takes 1.5 seconds)
    setTimeout(() => {
      setIsSubmitting(false);
      setShowNotification(true);
      
      // Hide notification after 4 seconds
      setTimeout(() => setShowNotification(false), 4000);
      
      // Clear the form
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col pb-20 md:pb-0">
      
      {/* --- Fixed Navbar with a CLEAR BACK BUTTON --- */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center text-blue-800 font-bold hover:text-orange-500 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Voltar ao Início
          </Link>
          <div className="text-2xl font-black text-blue-800 tracking-tighter">
            Moz<span className="text-orange-500">Biz</span>
          </div>
        </div>
      </nav>

      {/* --- Notification Toast (Pops up when form is submitted) --- */}
      {showNotification && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 z-50 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          <span className="font-bold text-sm">Mensagem enviada com sucesso!</span>
        </div>
      )}

      {/* --- Contact Form Section --- */}
      <section className="max-w-3xl mx-auto px-6 py-12 flex-grow w-full">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full -z-10 opacity-50"></div>
          
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-2">Fale Connosco</h1>
          <p className="text-gray-500 mb-8 font-medium">Precisa de ajuda ou quer registar a sua empresa? Preencha o formulário.</p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Nome Completo</label>
              <input type="text" id="name" required className="w-full px-4 py-3 min-h-[44px] rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-blue-600 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="Ex: João Silva" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email</label>
              <input type="email" id="email" required className="w-full px-4 py-3 min-h-[44px] rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-blue-600 outline-none transition-all bg-gray-50 focus:bg-white" placeholder="joao@exemplo.co.mz" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Mensagem</label>
              <textarea id="message" required rows={4} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-0 focus:border-blue-600 outline-none transition-all bg-gray-50 focus:bg-white resize-none" placeholder="Como podemos ajudar?"></textarea>
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white font-bold py-4 px-6 min-h-[44px] rounded-xl transition-all shadow-lg flex justify-center items-center gap-2">
              {isSubmitting ? 'A enviar...' : 'Enviar Mensagem'}
            </button>
          </form>
        </div>
      </section>

      {/* Mobile Bottom Navigation Bar */}
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