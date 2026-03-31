'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Business {
  id: number; name: string; category: string; location: string; price: string; rating: number; reviews: number; description: string; image: string;
}

interface Testimonial {
  id: number; name: string; role: string; text: string; image: string;
}

const businesses: Business[] = [
  { id: 1, name: "Maputo Fresh Groceries", category: "Retalho", location: "Maputo", price: "A partir de 500 MZN", rating: 4.8, reviews: 124, description: "Produtos locais frescos e orgânicos entregues diretamente por agricultores moçambicanos.", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop" },
  { id: 2, name: "Matola Tech Repair", category: "Serviços", location: "Matola", price: "Sob Orçamento", rating: 4.5, reviews: 89, description: "Reparações rápidas e fiáveis de telemóveis e computadores por técnicos certificados.", image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=600&auto=format&fit=crop" },
  { id: 3, name: "Beira Bite Cafe", category: "Restauração", location: "Beira", price: "Cafés a 150 MZN", rating: 4.9, reviews: 210, description: "O melhor café artesanal, pastelaria fresca e um espaço de trabalho relaxante na cidade.", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop" },
  { id: 4, name: "Nampula Textiles", category: "Moda", location: "Nampula", price: "Variável", rating: 4.7, reviews: 56, description: "Capulanas tradicionais autênticas e roupa feita à medida com um toque moderno.", image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=600&auto=format&fit=crop" },
  { id: 5, name: "Pemba Ocean Tours", category: "Serviços", location: "Pemba", price: "A partir de 3,500 MZN", rating: 5.0, reviews: 342, description: "Mergulho guiado e passeios de barco para explorar o belo Arquipélago das Quirimbas.", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600&auto=format&fit=crop" },
  { id: 6, name: "Tete Mining Supplies", category: "Retalho", location: "Tete", price: "Sob Consulta", rating: 4.2, reviews: 34, description: "Equipamento industrial e de segurança de alta qualidade para construtores locais.", image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=600&auto=format&fit=crop" },
  { id: 7, name: "Zambezia Organic Tea", category: "Restauração", location: "Gurué", price: "300 MZN / Caixa", rating: 4.6, reviews: 45, description: "Folhas de chá premium, cultivadas e colhidas localmente nas montanhas de Gurué.", image: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?q=80&w=600&auto=format&fit=crop" },
  { id: 8, name: "Inhambane Surf Shop", category: "Retalho", location: "Tofo", price: "1,500 MZN / Dia", rating: 4.8, reviews: 178, description: "Aluguer de pranchas de surf, roupa de praia e aulas para todos os níveis.", image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=600&auto=format&fit=crop" },
  { id: 9, name: "Chimoio Agro-Tech", category: "Tecnologia", location: "Chimoio", price: "Mensalidade", rating: 4.4, reviews: 67, description: "Soluções de agricultura inteligente para ajudar os agricultores locais a aumentar o rendimento.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop" },
  { id: 10, name: "Vilankulo Seaside Clinic", category: "Saúde", location: "Vilankulo", price: "2,500 MZN / Consulta", rating: 4.9, reviews: 230, description: "Cuidados de saúde comunitários dedicados, farmácia e serviços médicos de emergência.", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop" },
  { id: 11, name: "Maputo Code Academy", category: "Tecnologia", location: "Maputo", price: "15,000 MZN / Curso", rating: 4.7, reviews: 112, description: "Bootcamps de programação presenciais para a próxima geração de programadores.", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop" },
  { id: 12, name: "Xai-Xai Auto Repair", category: "Serviços", location: "Xai-Xai", price: "Sob Orçamento", rating: 4.3, reviews: 88, description: "Mecânicos de confiança que fornecem manutenção completa de veículos e diagnósticos.", image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=600&auto=format&fit=crop" },
  { id: 13, name: "Nacala Port Logistics", category: "Serviços", location: "Nacala", price: "Sob Consulta", rating: 4.1, reviews: 29, description: "Soluções eficientes de transporte e armazenamento perto do porto de águas profundas.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop" },
  { id: 14, name: "Quelimane Seafood Catch", category: "Restauração", location: "Quelimane", price: "Preço do Dia", rating: 4.8, reviews: 156, description: "Capturas diárias de camarão, caranguejo e peixe diretamente da costa da Zambézia.", image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=600&auto=format&fit=crop" },
  { id: 15, name: "Maxixe Transport Hub", category: "Serviços", location: "Maxixe", price: "Bilhetes Variáveis", rating: 4.0, reviews: 310, description: "Reservas fiáveis de autocarros interurbanos e aluguer de transportes privados.", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600&auto=format&fit=crop" },
  { id: 16, name: "Lichinga Pine Furniture", category: "Retalho", location: "Lichinga", price: "Sob Encomenda", rating: 4.6, reviews: 72, description: "Mobiliário bonito, durável e feito à mão com pinho do Niassa.", image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=600&auto=format&fit=crop" },
  { id: 17, name: "Maputo Fitness Oasis", category: "Saúde", location: "Maputo", price: "3,500 MZN / Mês", rating: 4.7, reviews: 198, description: "Equipamento de ginásio de última geração, treino personalizado e aulas de bem-estar.", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop" },
  { id: 18, name: "Gorongosa Eco-Lodge", category: "Serviços", location: "Gorongosa", price: "6,000 MZN / Noite", rating: 4.9, reviews: 405, description: "Alojamento de safari sustentável com visitas guiadas ao parque nacional.", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=600&auto=format&fit=crop" },
  { id: 19, name: "Matola Artisan Bakery", category: "Restauração", location: "Matola", price: "A partir de 20 MZN", rating: 4.8, reviews: 312, description: "Pão quente, bolos e salgados tradicionais moçambicanos acabados de fazer.", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop" },
  { id: 20, name: "Beira Enterprise IT", category: "Tecnologia", location: "Beira", price: "Sob Orçamento", rating: 4.5, reviews: 42, description: "Instalações de rede, cibersegurança e soluções na cloud para empresas.", image: "https://i.pinimg.com/1200x/57/8b/03/578b0347823fbbad10aaa24502e96e2a.jpg" },
  { id: 21, name: "Maputo Modern Boutique", category: "Moda", location: "Maputo", price: "Variável", rating: 4.6, reviews: 88, description: "Roupa urbana contemporânea que mistura o estilo moderno com estampas africanas.", image: "https://i.pinimg.com/1200x/7a/74/11/7a7411fb68c9f93127c3095693991966.jpg" },
  { id: 22, name: "Vilankulo Craft Market", category: "Retalho", location: "Vilankulo", price: "Negociável", rating: 4.7, reviews: 156, description: "Esculturas em madeira feitas à mão, cestos tecidos e belas lembranças turísticas.", image: "https://i.pinimg.com/1200x/be/86/36/be86368d334fd54ad8c4ef9b8f97a60e.jpg" },
  { id: 23, name: "Tete Smile Dental", category: "Saúde", location: "Tete", price: "Consulta Inicial", rating: 4.9, reviews: 110, description: "Cuidados dentários profissionais, limpezas e ortodontia para toda a família.", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop" },
  { id: 24, name: "Maputo Cleaning Pros", category: "Serviços", location: "Maputo", price: "1,500 MZN / Dia", rating: 4.4, reviews: 65, description: "Limpeza profunda, manutenção de escritórios e serviços de limpeza residencial.", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop" },
  { id: 25, name: "Pemba Beach Bar", category: "Restauração", location: "Pemba", price: "Menu Variado", rating: 4.8, reviews: 289, description: "Cocktails ao pôr do sol, sumos naturais e marisco grelhado na areia branca.", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop" },
  { id: 26, name: "Nampula Cyber Cafe", category: "Tecnologia", location: "Nampula", price: "50 MZN / Hora", rating: 4.2, reviews: 94, description: "Acesso à internet de alta velocidade, serviços de impressão e aluguer.", image: "https://i.pinimg.com/1200x/8f/ca/52/8fca52e933a45ffc6551fff185dcdd81.jpg" },
  { id: 27, name: "Xai-Xai Tailors", category: "Moda", location: "Xai-Xai", price: "Sob Medida", rating: 4.7, reviews: 51, description: "Alterações especializadas, fatos à medida e trajes de casamento personalizados.", image: "https://i.pinimg.com/736x/d6/c5/50/d6c5506652a9d91cf621e71436244726.jpg" },
  { id: 28, name: "Chimoio Builders Hardware", category: "Retalho", location: "Chimoio", price: "Catálogo", rating: 4.5, reviews: 134, description: "Tudo o que precisa para projetos de bricolage, renovações domésticas e construção.", image: "https://i.pinimg.com/736x/2e/14/40/2e14408498bd5ffddb5cd60626d97a8a.jpg" },
  { id: 29, name: "Tofo Scuba Academy", category: "Serviços", location: "Tofo", price: "Cursos Diversos", rating: 5.0, reviews: 215, description: "Cursos de mergulho certificados pela PADI e emocionantes safaris de tubarão-baleia.", image: "https://i.pinimg.com/1200x/51/35/99/513599a7b70bbcc1ddb68765e534cd1e.jpg" },
  { id: 30, name: "Quelimane Books & Supplies", category: "Retalho", location: "Quelimane", price: "Variável", rating: 4.6, reviews: 77, description: "Manuais escolares, material de escritório e literatura de autores africanos.", image: "https://i.pinimg.com/736x/04/84/fe/0484febddccec679db26924007e08390.jpg" },
  { id: 31, name: "Gurué Mountain Yoga", category: "Saúde", location: "Gurué", price: "600 MZN / Aula", rating: 4.9, reviews: 102, description: "Retiros pacíficos de ioga, aulas de meditação e workshops de bem-estar holístico.", image: "https://i.pinimg.com/736x/16/ae/8b/16ae8b2f69472f9cdf93ddcb32b015e6.jpg" },
  { id: 32, name: "Maputo Sky Drones", category: "Tecnologia", location: "Maputo", price: "Sob Orçamento", rating: 4.8, reviews: 63, description: "Fotografia aérea profissional, videografia e serviços de levantamento topográfico.", image: "https://i.pinimg.com/736x/ab/79/69/ab79691c3a89be7379c3fb17000ce835.jpg" },
  { id: 33, name: "Inhambane Coconut Stand", category: "Restauração", location: "Inhambane", price: "50 MZN", rating: 4.7, reviews: 420, description: "A água de coco mais fresca e doce, aberta mesmo à sua frente.", image: "https://i.pinimg.com/1200x/cd/08/64/cd0864cdce9bd7da588ea3baf1404a2e.jpg" },
  { id: 34, name: "Nacala Vision Center", category: "Saúde", location: "Nacala", price: "Consultas & Óculos", rating: 4.5, reviews: 89, description: "Exames oftalmológicos, óculos graduados elegantes e óculos de sol com proteção UV.", image: "https://i.pinimg.com/1200x/10/f9/33/10f933c24f8030e57291b6f4712d6676.jpg" },
  { id: 35, name: "Beira Leather Goods", category: "Moda", location: "Beira", price: "Catálogo", rating: 4.6, reviews: 115, description: "Carteiras de couro costuradas à mão, cintos e sacos de viagem de luxo.", image: "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?q=80&w=600&auto=format&fit=crop" },
  { id: 36, name: "Lichinga Cold Storage", category: "Serviços", location: "Lichinga", price: "Sob Consulta", rating: 4.3, reviews: 22, description: "Refrigeração comercial e soluções de armazenamento congelado para empresas agrícolas.", image: "https://i.pinimg.com/736x/37/e8/4a/37e84a376571d9bf520cecfc4da49ed1.jpg" }
];

const categories: string[] = ['Todos', 'Retalho', 'Serviços', 'Restauração', 'Moda', 'Tecnologia', 'Saúde'];

const testimonials: Testimonial[] = [
  { id: 1, name: "Ana Silva", role: "Cliente Local", text: "O MozBiz torna incrivelmente fácil encontrar serviços de confiança em Maputo. Uso todas as semanas!", image: "https://i.pinimg.com/736x/77/18/88/771888f70ec864f9fbbeb6ef5ea978ee.jpg" },
  { id: 2, name: "Carlos Tembe", role: "Proprietário de PME", text: "Desde que listei a minha loja de reparações aqui, a minha base de clientes na Matola duplicou. Plataforma fantástica.", image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=200&auto=format&fit=crop" },
  { id: 3, name: "Elena Rosa", role: "Turista", text: "Encontrei as melhores lojas de surf e cafés no Tofo usando este diretório. Muito bem desenhado e fácil de usar.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" }
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedProfile, setSelectedProfile] = useState<Business | null>(null);

  const filteredBusinesses = businesses.filter(biz => {
    const matchesSearch = biz.name.toLowerCase().includes(searchTerm.toLowerCase()) || biz.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'Todos' || biz.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col pb-20 md:pb-0 relative overflow-x-hidden">
      
      {/* FLOATING HELP BUTTON */}
      <Link href="/contact" className="fixed bottom-24 right-6 md:bottom-8 md:right-8 bg-blue-900 text-white p-4 rounded-full shadow-2xl z-40 hover:scale-110 transition-transform flex items-center justify-center group">
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span className="absolute right-16 bg-gray-900 text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Ajuda & Suporte</span>
      </Link>

      {/* DESKTOP NAVBAR */}
      <nav className="bg-white shadow-md sticky top-0 z-30 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black text-blue-800 tracking-tighter">Moz<span className="text-orange-500">Biz</span></div>
          <div className="space-x-8 text-sm font-semibold">
            <Link href="/" className="text-blue-800 border-b-2 border-orange-500 pb-1">Diretório</Link>
            <Link href="/about" className="text-gray-500 hover:text-blue-800 transition-colors">Sobre Nós</Link>
            <Link href="/contact" className="text-gray-500 hover:text-blue-800 transition-colors">Contacto</Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION & SEARCH BAR */}
      <header className="relative bg-blue-900 text-white py-24 md:py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-4xl mx-auto mt-8 md:mt-0">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
            Fortalecendo a Economia de <span className="text-orange-400">Moçambique</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-blue-100 mb-10 drop-shadow-md">
            Apoie a nossa comunidade comprando localmente. Explore o maior diretório de empresas do país.
          </p>
          
          <div className="max-w-2xl mx-auto bg-white rounded-full p-2 flex shadow-2xl border-4 border-white/20 items-center">
            <svg className="w-6 h-6 text-gray-400 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input 
              type="search" 
              enterKeyHint="search"
              placeholder="Pesquisar empresas, cidades ou categorias..." 
              className="flex-grow px-4 py-3 rounded-full text-gray-800 focus:outline-none text-lg min-h-[44px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* STATS BAR */}
      <div className="bg-orange-500 text-white py-8 shadow-inner relative z-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-orange-400">
          <div className="pt-4 md:pt-0"><div className="text-4xl font-black mb-1">36+</div><div className="text-orange-100 uppercase tracking-widest text-sm font-bold">Empresas Verificadas</div></div>
          <div className="pt-4 md:pt-0"><div className="text-4xl font-black mb-1">15+</div><div className="text-orange-100 uppercase tracking-widest text-sm font-bold">Cidades Abrangidas</div></div>
          <div className="pt-4 md:pt-0"><div className="text-4xl font-black mb-1">10k+</div><div className="text-orange-100 uppercase tracking-widest text-sm font-bold">Utilizadores Mensais</div></div>
        </div>
      </div>

      {/* DIRECTORY SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex-grow w-full">
        {/* Category Filters */}
        <div className="flex overflow-x-auto gap-3 mb-12 pb-4 snap-x hide-scrollbar md:justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 min-h-[44px] whitespace-nowrap rounded-full text-sm font-bold transition-all shadow-sm snap-start ${
                activeCategory === category ? 'bg-blue-800 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
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
              <div key={biz.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 flex flex-col">
                <div className="h-48 w-full overflow-hidden relative bg-gray-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={biz.image} alt={biz.name} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4"><span className="text-xs font-black text-white bg-blue-900/90 py-1.5 px-3 rounded-full uppercase tracking-widest">{biz.category}</span></div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors">{biz.name}</h3>
                    
                    <div className="flex items-center gap-1 mb-3">
                      <span className="text-yellow-400 text-sm">★★★★★</span>
                      <span className="text-xs font-bold text-gray-700">{biz.rating}</span>
                      <span className="text-xs text-gray-400">({biz.reviews})</span>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <p className="text-sm text-gray-500 font-semibold flex items-center gap-1">
                        <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        {biz.location}
                      </p>
                      <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-1 rounded-md border border-green-200 truncate max-w-[120px] text-right" title={biz.price}>{biz.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{biz.description}</p>
                  </div>
                  
                  <button onClick={() => setSelectedProfile(biz)} className="mt-6 w-full bg-gray-50 hover:bg-orange-500 hover:border-orange-500 hover:text-white text-blue-800 border border-gray-200 font-bold py-3 px-4 min-h-[44px] rounded-xl transition-colors">
                    Ver Perfil Completo
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">Nenhuma empresa encontrada</h3>
            <button onClick={() => {setSearchTerm(''); setActiveCategory('Todos');}} className="mt-4 min-h-[44px] px-4 text-orange-500 font-bold underline">Limpar pesquisa</button>
          </div>
        )}
      </section>

      {/* TESTIMONIALS SECTION */}
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

      {/* THE PROFILE MODAL (Pop-up) */}
      {selectedProfile && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 md:p-6 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in duration-200">
            
            <button onClick={() => setSelectedProfile(null)} className="absolute top-4 right-4 bg-white/80 backdrop-blur text-gray-900 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full shadow-md z-10 hover:bg-gray-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="h-64 md:h-80 w-full bg-gray-200 relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={selectedProfile.image} alt={selectedProfile.name} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-20">
                <span className="text-xs font-black text-white bg-orange-500 py-1 px-3 rounded-full uppercase mb-2 inline-block">{selectedProfile.category}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">{selectedProfile.name}</h2>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-6 border-b border-gray-100 gap-4">
                <div>
                  <p className="text-lg text-gray-600 font-semibold flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {selectedProfile.location}, Moçambique
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400 text-lg">★★★★★</span>
                    <span className="font-bold text-gray-900">{selectedProfile.rating} / 5.0</span>
                    <span className="text-gray-500 underline text-sm ml-1">({selectedProfile.reviews} avaliações)</span>
                  </div>
                </div>
                <div className="text-left md:text-right bg-gray-50 p-3 rounded-xl border border-gray-100 w-full md:w-auto">
                  <p className="text-sm text-gray-500 font-bold mb-1">Tarifa / Preço Base</p>
                  <span className="text-xl font-black text-green-700">{selectedProfile.price}</span>
                </div>
              </div>

              <h3 className="font-bold text-gray-900 mb-3 text-xl">Sobre a Empresa</h3>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">{selectedProfile.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button onClick={() => setSelectedProfile(null)} className="py-4 rounded-xl border-2 border-gray-200 text-gray-700 font-bold hover:bg-gray-50 transition-colors min-h-[44px]">Voltar ao Diretório</button>
                <Link href="/contact" className="py-4 rounded-xl bg-blue-800 text-white text-center font-bold hover:bg-blue-900 transition-colors shadow-lg min-h-[44px] flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  Contactar Empresa
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-400 py-12 text-center mt-auto md:mb-0 mb-16">
        <div className="text-2xl font-black text-white tracking-tighter mb-4">Moz<span className="text-orange-500">Biz</span></div>
        <p className="text-sm">© 2026 MozBiz Directory. Desenvolvido para contexto moçambicano.</p>
      </footer>

      {/* MOBILE BOTTOM NAVIGATION BAR */}
      <div className="md:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 flex justify-around items-center pb-safe z-30 shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.1)]">
        <Link href="/" className="flex flex-col items-center justify-center w-full py-3 min-h-[56px] text-blue-800">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          <span className="text-[10px] font-bold">Início</span>
        </Link>
        <Link href="/about" className="flex flex-col items-center justify-center w-full py-3 min-h-[56px] text-gray-400 hover:text-blue-800 transition-colors">
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