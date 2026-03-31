'use client';

import Link from 'next/link';
import { useState } from 'react';

// -----------------------------------------------------------------
// 1. TYPESCRIPT INTERFACES
// -----------------------------------------------------------------
interface Business {
  id: number;
  name: string;
  category: string;
  location: string;
  price: string;
  description: string;
  image: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
}

// -----------------------------------------------------------------
// 2. DATABASE (36 Businesses)
// -----------------------------------------------------------------
const businesses: Business[] = [
  { id: 1, name: "Maputo Fresh Groceries", category: "Retalho", location: "Maputo", price: "A partir de 500 MZN", description: "Produtos locais frescos e orgânicos entregues diretamente por agricultores moçambicanos.", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop" },
  { id: 2, name: "Matola Tech Repair", category: "Serviços", location: "Matola", price: "Diagnóstico: 1,000 MZN", description: "Reparações rápidas e fiáveis de telemóveis e computadores por técnicos certificados.", image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=600&auto=format&fit=crop" },
  { id: 3, name: "Beira Bite Cafe", category: "Restauração", location: "Beira", price: "Café a 150 MZN", description: "O melhor café artesanal, pastelaria fresca e um espaço de trabalho relaxante na cidade.", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop" },
  { id: 4, name: "Nampula Textiles", category: "Moda", location: "Nampula", price: "Capulanas: 800 MZN", description: "Capulanas tradicionais autênticas e roupa feita à medida com um toque moderno.", image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=600&auto=format&fit=crop" },
  { id: 5, name: "Pemba Ocean Tours", category: "Serviços", location: "Pemba", price: "Passeios: 3,500 MZN", description: "Mergulho guiado e passeios de barco para explorar o belo Arquipélago das Quirimbas.", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600&auto=format&fit=crop" },
  { id: 6, name: "Tete Mining Supplies", category: "Retalho", location: "Tete", price: "Sob Consulta", description: "Equipamento industrial e de segurança de alta qualidade para construtores locais.", image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=600&auto=format&fit=crop" },
  { id: 7, name: "Zambezia Organic Tea", category: "Restauração", location: "Gurué", price: "Caixa: 300 MZN", description: "Folhas de chá premium, cultivadas e colhidas localmente nas montanhas de Gurué.", image: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?q=80&w=600&auto=format&fit=crop" },
  { id: 8, name: "Inhambane Surf Shop", category: "Retalho", location: "Tofo", price: "Aluguer: 1,500 MZN/dia", description: "Aluguer de pranchas de surf, roupa de praia e aulas para todos os níveis.", image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=600&auto=format&fit=crop" },
  { id: 9, name: "Chimoio Agro-Tech", category: "Tecnologia", location: "Chimoio", price: "Software: 5,000 MZN/mês", description: "Soluções de agricultura inteligente para ajudar os agricultores locais a aumentar o rendimento.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop" },
  { id: 10, name: "Vilankulo Seaside Clinic", category: "Saúde", location: "Vilankulo", price: "Consulta: 2,500 MZN", description: "Cuidados de saúde comunitários dedicados, farmácia e serviços médicos de emergência.", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop" },
  { id: 11, name: "Maputo Code Academy", category: "Tecnologia", location: "Maputo", price: "Curso: 15,000 MZN", description: "Bootcamps de programação presenciais para a próxima geração de programadores.", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop" },
  { id: 12, name: "Xai-Xai Auto Repair", category: "Serviços", location: "Xai-Xai", price: "Revisão: 4,000 MZN", description: "Mecânicos de confiança que fornecem manutenção completa de veículos e diagnósticos.", image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=600&auto=format&fit=crop" },
  { id: 13, name: "Nacala Port Logistics", category: "Serviços", location: "Nacala", price: "Sob Consulta", description: "Soluções eficientes de transporte e armazenamento perto do porto de águas profundas.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop" },
  { id: 14, name: "Quelimane Seafood Catch", category: "Restauração", location: "Quelimane", price: "Camarão: 1,200 MZN/kg", description: "Capturas diárias de camarão, caranguejo e peixe diretamente da costa da Zambézia.", image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=600&auto=format&fit=crop" },
  { id: 15, name: "Maxixe Transport Hub", category: "Serviços", location: "Maxixe", price: "Bilhetes: 800 MZN", description: "Reservas fiáveis de autocarros interurbanos e aluguer de transportes privados.", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600&auto=format&fit=crop" },
  { id: 16, name: "Lichinga Pine Furniture", category: "Retalho", location: "Lichinga", price: "Mesas: 8,500 MZN", description: "Mobiliário bonito, durável e feito à mão com pinho do Niassa.", image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=600&auto=format&fit=crop" },
  { id: 17, name: "Maputo Fitness Oasis", category: "Saúde", location: "Maputo", price: "Mensalidade: 3,500 MZN", description: "Equipamento de ginásio de última geração, treino personalizado e aulas de bem-estar.", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop" },
  { id: 18, name: "Gorongosa Eco-Lodge", category: "Serviços", location: "Gorongosa", price: "Noite: 6,000 MZN", description: "Alojamento de safari sustentável com visitas guiadas ao parque nacional.", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=600&auto=format&fit=crop" },
  { id: 19, name: "Matola Artisan Bakery", category: "Restauração", location: "Matola", price: "Pão: 20 MZN", description: "Pão quente, bolos e salgados tradicionais moçambicanos acabados de fazer.", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop" },
  { id: 20, name: "Beira Enterprise IT", category: "Tecnologia", location: "Beira", price: "Serviços: 10,000 MZN", description: "Instalações de rede, cibersegurança e soluções na cloud para empresas em crescimento.", image: "https://i.pinimg.com/1200x/57/8b/03/578b0347823fbbad10aaa24502e96e2a.jpg" },
  { id: 21, name: "Maputo Modern Boutique", category: "Moda", location: "Maputo", price: "Vestidos: 2,500 MZN", description: "Roupa urbana contemporânea que mistura o estilo moderno com estampas africanas.", image: "https://i.pinimg.com/1200x/7a/74/11/7a7411fb68c9f93127c3095693991966.jpg" },
  { id: 22, name: "Vilankulo Craft Market", category: "Retalho", location: "Vilankulo", price: "Artesanato: 500 MZN", description: "Esculturas em madeira feitas à mão, cestos tecidos e belas lembranças turísticas.", image: "https://i.pinimg.com/1200x/be/86/36/be86368d334fd54ad8c4ef9b8f97a60e.jpg" },
  { id: 23, name: "Tete Smile Dental", category: "Saúde", location: "Tete", price: "Limpeza: 3,000 MZN", description: "Cuidados dentários profissionais, limpezas e ortodontia para toda a família.", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop" },
  { id: 24, name: "Maputo Cleaning Pros", category: "Serviços", location: "Maputo", price: "Diária: 1,500 MZN", description: "Limpeza profunda, manutenção de escritórios e serviços de limpeza residencial.", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop" },
  { id: 25, name: "Pemba Beach Bar", category: "Restauração", location: "Pemba", price: "Cocktails: 400 MZN", description: "Cocktails ao pôr do sol, sumos naturais e marisco grelhado na areia branca.", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop" },
  { id: 26, name: "Nampula Cyber Cafe", category: "Tecnologia", location: "Nampula", price: "Internet: 50 MZN/hora", description: "Acesso à internet de alta velocidade, serviços de impressão e aluguer de computadores.", image: "https://i.pinimg.com/1200x/8f/ca/52/8fca52e933a45ffc6551fff185dcdd81.jpg" },
  { id: 27, name: "Xai-Xai Tailors", category: "Moda", location: "Xai-Xai", price: "Fatos: 6,000 MZN", description: "Alterações especializadas, fatos à medida e trajes de casamento personalizados.", image: "https://i.pinimg.com/736x/d6/c5/50/d6c5506652a9d91cf621e71436244726.jpg" },
  { id: 28, name: "Chimoio Builders Hardware", category: "Retalho", location: "Chimoio", price: "Cimento: 450 MZN/saco", description: "Tudo o que precisa para projetos de bricolage, renovações domésticas e construção.", image: "https://i.pinimg.com/736x/2e/14/40/2e14408498bd5ffddb5cd60626d97a8a.jpg" },
  { id: 29, name: "Tofo Scuba Academy", category: "Serviços", location: "Tofo", price: "Curso PADI: 20,000 MZN", description: "Cursos de mergulho certificados pela PADI e emocionantes safaris de tubarão-baleia.", image: "https://i.pinimg.com/1200x/51/35/99/513599a7b70bbcc1ddb68765e534cd1e.jpg" },
  { id: 30, name: "Quelimane Books & Supplies", category: "Retalho", location: "Quelimane", price: "Livros: 800 MZN", description: "Manuais escolares, material de escritório e literatura de autores africanos.", image: "https://i.pinimg.com/736x/04/84/fe/0484febddccec679db26924007e08390.jpg" },
  { id: 31, name: "Gurué Mountain Yoga", category: "Saúde", location: "Gurué", price: "Aula: 600 MZN", description: "Retiros pacíficos de ioga, aulas de meditação e workshops de bem-estar holístico.", image: "https://i.pinimg.com/736x/16/ae/8b/16ae8b2f69472f9cdf93ddcb32b015e6.jpg" },
  { id: 32, name: "Maputo Sky Drones", category: "Tecnologia", location: "Maputo", price: "Sessão: 8,000 MZN", description: "Fotografia aérea profissional, videografia e serviços de levantamento topográfico.", image: "https://i.pinimg.com/736x/ab/79/69/ab79691c3a89be7379c3fb17000ce835.jpg" },
  { id: 33, name: "Inhambane Coconut Stand", category: "Restauração", location: "Inhambane", price: "Coco: 50 MZN", description: "A água de coco mais fresca e doce, aberta mesmo à sua frente.", image: "https://i.pinimg.com/1200x/cd/08/64/cd0864cdce9bd7da588ea3baf1404a2e.jpg" },
  { id: 34, name: "Nacala Vision Center", category: "Saúde", location: "Nacala", price: "Óculos: 4,500 MZN", description: "Exames oftalmológicos, óculos graduados elegantes e óculos de sol com proteção UV.", image:"https://i.pinimg.com/1200x/10/f9/33/10f933c24f8030e57291b6f4712d6676.jpg" },
  { id: 35, name: "Beira Leather Goods", category: "Moda", location: "Beira", price: "Cintos: 1,200 MZN", description: "Carteiras de couro costuradas à mão, cintos e sacos de viagem de luxo.", image: "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?q=80&w=600&auto=format&fit=crop" },
  { id: 36, name: "Lichinga Cold Storage", category: "Serviços", location: "Lichinga", price: "Sob Consulta", description: "Refrigeração comercial e soluções de armazenamento congelado para empresas agrícolas.", image: "https://i.pinimg.com/736x/37/e8/4a/37e84a376571d9bf520cecfc4da49ed1.jpg" }
];

const categories: string[] = ['Todos', 'Retalho', 'Serviços', 'Restauração', 'Moda', 'Tecnologia', 'Saúde'];

const testimonials: Testimonial[] = [
  { id: 1, name: "Ana Silva", role: "Cliente Local", text: "O MozBiz torna incrivelmente fácil encontrar serviços de confiança em Maputo. Uso todas as semanas!", image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=200&auto=format&fit=crop" },
  { id: 2, name: "Carlos Tembe", role: "Proprietário de PME", text: "Desde que listei a minha loja de reparações aqui, a minha base de clientes na Matola duplicou. Plataforma fantástica.", image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=200&auto=format&fit=crop" },
  { id: 3, name: "Elena Rosa", role: "Turista", text: "Encontrei as melhores lojas de surf e cafés no Tofo usando este diretório. Muito bem desenhado e fácil de usar.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" }
];

// -----------------------------------------------------------------
// 3. MAIN COMPONENT
// -----------------------------------------------------------------
export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredBusinesses = businesses.filter(biz => {
    const matchesSearch = biz.name.toLowerCase().includes(searchTerm.toLowerCase()) || biz.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'Todos' || biz.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    // Added pb-20 to ensure content isn't hidden behind the new mobile bottom nav
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col overflow-x-hidden pb-20 md:pb-0">
      
      {/* --- Desktop Navigation (Hidden on Mobile) --- */}
      <nav className="bg-white shadow-md sticky top-0 z-50 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black text-blue-800 tracking-tighter">Moz<span className="text-orange-500">Biz</span></div>
          
          <div className="space-x-8 text-sm font-semibold">
            <Link href="/" className="text-blue-800 border-b-2 border-orange-500 pb-1">Diretório</Link>
            <Link href="/about" className="text-gray-500 hover:text-blue-800 transition-colors">Sobre Nós</Link>
            <Link href="/contact" className="text-gray-500 hover:text-blue-800 transition-colors">Contacto</Link>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <header className="relative bg-blue-900 text-white py-24 md:py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-4xl mx-auto mt-8 md:mt-0">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
            Fortalecendo a Economia de <span className="text-orange-400">Moçambique</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-blue-100 mb-10 drop-shadow-md">
            Apoie a nossa comunidade comprando localmente. Explore o maior diretório de pequenas empresas do país.
          </p>
          
          <div className="max-w-2xl mx-auto bg-white rounded-full p-2 flex shadow-2xl border-4 border-white/20">
            <input 
              type="search" 
              enterKeyHint="search"
              placeholder="Pesquisar por nome ou cidade..." 
              className="flex-grow px-6 py-4 rounded-full text-gray-800 focus:outline-none text-lg min-h-[44px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* --- Stats Bar --- */}
      <div className="bg-orange-500 text-white py-8 shadow-inner relative z-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-orange-400">
          <div className="pt-4 md:pt-0"><div className="text-4xl font-black mb-1">35+</div><div className="text-orange-100 uppercase tracking-widest text-sm font-bold">Empresas Verificadas</div></div>
          <div className="pt-4 md:pt-0"><div className="text-4xl font-black mb-1">15+</div><div className="text-orange-100 uppercase tracking-widest text-sm font-bold">Cidades Abrangidas</div></div>
          <div className="pt-4 md:pt-0"><div className="text-4xl font-black mb-1">10k+</div><div className="text-orange-100 uppercase tracking-widest text-sm font-bold">Utilizadores Mensais</div></div>
        </div>
      </div>

      {/* --- Directory Section --- */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex-grow">
        {/* Horizontal scrollable categories for a native mobile feel */}
        <div className="flex overflow-x-auto gap-3 mb-12 pb-4 snap-x hide-scrollbar md:justify-center md:flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 min-h-[44px] whitespace-nowrap rounded-full text-sm font-bold transition-all shadow-sm snap-start ${
                activeCategory === category 
                  ? 'bg-blue-800 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
          <h2 className="text-3xl font-bold text-gray-900">Explorar Diretório</h2>
          <span className="text-sm font-bold text-orange-600 bg-orange-100 py-1 px-4 rounded-full">{filteredBusinesses.length} Resultados</span>
        </div>

        {filteredBusinesses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBusinesses.map((biz) => (
              <div key={biz.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 flex flex-col">
                <div className="h-48 w-full overflow-hidden relative bg-gray-200">
                  {/* LOW BANDWIDTH OPTIMIZATION: Added loading="lazy" and decoding="async" */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={biz.image} alt={biz.name} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-black text-white bg-blue-900/90 backdrop-blur-sm py-1.5 px-3 rounded-full uppercase tracking-widest">{biz.category}</span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors">{biz.name}</h3>
                    <div className="flex justify-between items-center mb-4">
                      <p className="text-sm text-gray-500 font-semibold flex items-center gap-1">
                        <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        {biz.location}
                      </p>
                      <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-1 rounded-md border border-green-200">{biz.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{biz.description}</p>
                  </div>
                  <Link href="/contact" className="mt-6 min-h-[44px] inline-flex items-center text-blue-800 font-bold hover:text-orange-500 transition-colors text-sm border-t border-gray-100 pt-4 group/btn">
                    Contactar Empresa <span className="ml-2 group-hover/btn:translate-x-2 transition-transform">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">Nenhuma empresa encontrada</h3>
            <button onClick={() => {setSearchTerm(''); setActiveCategory('Todos');}} className="mt-4 min-h-[44px] px-4 text-orange-500 font-bold underline">Limpar todos os filtros</button>
          </div>
        )}
      </section>

      {/* --- Testimonials --- */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Amado pela Comunidade</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((review) => (
              <div key={review.id} className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
                <div className="text-orange-400 text-2xl mb-4">★★★★★</div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">&quot;{review.text}&quot;</p>
                <div className="flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={review.image} loading="lazy" alt={review.name} className="w-14 h-14 rounded-full object-cover border-2 border-orange-500 shadow-sm" />
                  <div>
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-xs text-gray-500 uppercase font-semibold">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-gray-950 text-gray-400 py-12 text-center mt-auto md:mb-0 mb-16">
        <div className="text-2xl font-black text-white tracking-tighter mb-4">Moz<span className="text-orange-500">Biz</span></div>
        <p className="text-sm">© 2026 MozBiz Directory. Desenvolvido para contexto moçambicano.</p>
      </footer>

      {/* --- NATIVE APP FEATURE: Mobile Bottom Navigation Bar --- */}
      <div className="md:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 flex justify-around items-center pb-safe z-50 shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.1)]">
        <Link href="/" className="flex flex-col items-center justify-center w-full py-3 min-h-[56px] text-blue-800">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          <span className="text-[10px] font-bold">Início</span>
        </Link>
        <Link href="/about" className="flex flex-col items-center justify-center w-full py-3 min-h-[56px] text-gray-400 hover:text-blue-800 transition-colors">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span className="text-[10px] font-bold">Sobre</span>
        </Link>
        <Link href="/contact" className="flex flex-col items-center justify-center w-full py-3 min-h-[56px] text-gray-400 hover:text-blue-800 transition-colors">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          <span className="text-[10px] font-bold">Contacto</span>
        </Link>
      </div>

    </main>
  );
}