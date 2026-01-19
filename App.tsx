import React, { useState } from 'react';
import { 
  Globe, 
  Target, 
  Puzzle, 
  Scale, 
  ArrowRight, 
  LayoutGrid, 
  Network, 
  Building2, 
  CheckCircle2, 
  XCircle, 
  Info,
  ChevronDown
} from 'lucide-react';
import { Reveal } from './components/Reveal';
import { Modal } from './components/Modal';

// --- Assets & Constants ---
const COLORS = {
  gold: 'text-amber-600',
  goldBg: 'bg-amber-600',
  navy: 'text-slate-800',
  navyBg: 'bg-slate-900',
  teal: 'text-teal-700',
  tealBg: 'bg-teal-700',
};

// --- Main App Component ---
export default function App() {
  const [activeModal, setActiveModal] = useState<{ title: string; content: string } | null>(null);

  const openModal = (title: string, content: string) => {
    setActiveModal({ title, content });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-amber-100 selection:text-amber-900 pb-24">
      
      {/* --- Modal --- */}
      <Modal 
        isOpen={!!activeModal} 
        onClose={() => setActiveModal(null)} 
        title={activeModal?.title || ''} 
        content={activeModal?.content || ''} 
      />

      {/* --- Section 1: Hero --- */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 animate-gradient opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <Reveal>
            <div className="inline-block px-4 py-1 mb-6 border border-amber-500/50 rounded-full bg-amber-500/10 text-amber-400 font-medium tracking-wide text-sm uppercase">
              第31屆 MIF 大會組織委員會 呈閱
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
              展區落位與<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">
                視覺管理標準建議書
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 font-light">
              基於「產業分區」策略下的全球參展團通用解決方案
            </p>
            
            <button 
              onClick={() => scrollToSection('summary')}
              className="group bg-white text-slate-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-amber-400 hover:text-slate-900 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2 mx-auto"
            >
              開始閱覽
              <ChevronDown className="group-hover:translate-y-1 transition-transform" />
            </button>
          </Reveal>
        </div>
      </section>

      {/* --- Section 2: Core Summary --- */}
      <section id="summary" className="py-24 container mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">核心摘要：從「廣東試點」推廣至「全球通用」</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: Globe,
              title: "背景 (Context)",
              desc: "配合澳門「1+4」適度多元策略，MIF 全面轉型。",
              detail: "不再是單純的地域展示，而是要精準對接「1+4」四大產業，實現展會的專業化升級。",
              color: "bg-blue-50 text-blue-700 border-blue-200"
            },
            {
              icon: Scale,
              title: "挑戰 (Challenge)",
              desc: "取消綜合館同時，滿足組織方彰顯績效需求。",
              detail: "最大的痛點在於：如何讓地方政府(TPOs)在被拆分到不同產業區後，依然能體現出「這是一個整體代表團」的氣勢與政績。",
              color: "bg-slate-50 text-slate-700 border-slate-200"
            },
            {
              icon: Puzzle,
              title: "解決方案 (Solution)",
              desc: "「板塊嵌入」與「功能輻射」兩大通用模式。",
              detail: "我們設計了兩套靈活模型：\nModel A：針對單一產業團組，採用「板塊嵌入」。\nModel B：針對綜合產業團組，採用「功能輻射」。",
              color: "bg-teal-50 text-teal-700 border-teal-200"
            },
            {
              icon: Target,
              title: "目標 (Goal)",
              desc: "避免「一地一議」，建立公平透明管理制度。",
              detail: "最終目的是建立一套可複製的 SOP，讓所有國家和地區的參展團都在同一個規則下運作，減少溝通成本，提升專業形象。",
              color: "bg-amber-50 text-amber-700 border-amber-200"
            }
          ].map((item, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div 
                className={`p-8 rounded-2xl border ${item.color} h-full transition-all hover:shadow-lg cursor-pointer group relative overflow-hidden`}
                onClick={() => openModal(item.title, item.detail)}
              >
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="interactive-pulse bg-white/50 p-2 rounded-full">
                    <Info size={20} />
                  </div>
                </div>
                <item.icon size={48} className="mb-6 opacity-80" />
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="font-medium opacity-90">{item.desc}</p>
                <div className="mt-4 text-sm font-bold opacity-60 uppercase tracking-wider flex items-center gap-1">
                  點擊查看詳情 <ArrowRight size={14} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* --- Section 3: Transformation Context (Before/After) --- */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-2">轉型背景：從「地緣展示」向「產業垂直」全面升級</h2>
              <p className="text-slate-500">視覺化對比：舊模式 vs 新模式</p>
            </div>
          </Reveal>

          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {/* Old Model */}
            <Reveal className="w-full md:w-5/12">
              <div className="bg-slate-100 p-8 rounded-2xl border-2 border-dashed border-slate-300 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-slate-500">舊模式 (Old Model)</h3>
                  <p className="text-sm text-slate-400">綜合性省市/國家主題館</p>
                </div>
                <div className="aspect-square bg-slate-200 rounded-lg relative p-4 flex flex-wrap gap-2 content-start">
                  {/* Simulate Mixed Bag */}
                  <div className="w-full h-1/3 bg-white border border-slate-300 rounded flex items-center justify-center text-xs">Region A (Mixed)</div>
                  <div className="w-1/2 h-1/3 bg-white border border-slate-300 rounded flex items-center justify-center text-xs">Region B</div>
                  <div className="w-2/5 h-1/3 bg-white border border-slate-300 rounded flex items-center justify-center text-xs">Region C</div>
                </div>
              </div>
            </Reveal>

            {/* Arrow */}
            <div className="hidden md:block">
              <ArrowRight size={48} className="text-slate-300" />
            </div>

            {/* New Model */}
            <Reveal className="w-full md:w-5/12" delay={200}>
              <div className="bg-teal-50 p-8 rounded-2xl border-2 border-teal-500 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-teal-500 text-white text-xs px-3 py-1 font-bold rounded-bl-lg">RECOMMENDED</div>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-teal-800">新模式 (New Model)</h3>
                  <p className="text-sm text-teal-600">1+4 產業主題分區</p>
                </div>
                <div className="aspect-square bg-white rounded-lg border border-teal-100 p-2 flex flex-col gap-2">
                  {/* Simulate Industry Layers */}
                  <div className="flex-1 bg-blue-100 rounded border border-blue-200 flex items-center justify-center text-blue-800 font-bold text-sm">
                    <Building2 className="mr-2" size={16}/> 高新技術區 (Tech)
                  </div>
                  <div className="flex-1 bg-amber-100 rounded border border-amber-200 flex items-center justify-center text-amber-800 font-bold text-sm">
                    <Target className="mr-2" size={16}/> 現代金融區 (Finance)
                  </div>
                  <div className="flex-1 bg-green-100 rounded border border-green-200 flex items-center justify-center text-green-800 font-bold text-sm">
                    <LayoutGrid className="mr-2" size={16}/> 大健康區 (Health)
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- Section 4: Operational Challenge --- */}
      <section className="py-20 container mx-auto px-6">
        <Reveal>
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full blur-[100px] opacity-20"></div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">運營挑戰：平衡天平的兩端</h2>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="flex-1 text-center md:text-left">
                <div className="text-teal-400 font-bold mb-2">主辦方立場 (Organizer)</div>
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                  <p>必須執行「產業分區」，以保證展會專業性與買家配對效率。</p>
                </div>
              </div>

              <div className="text-amber-500 text-6xl">⚡</div>

              <div className="flex-1 text-center md:text-right">
                <div className="text-amber-400 font-bold mb-2">組團方訴求 (Delegations)</div>
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                  <p>希望「集中展示」，以彰顯組織績效與地區形象 (面子問題)。</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-amber-900/40 border border-amber-500/30 p-4 rounded-lg flex items-start gap-4">
              <Info className="text-amber-500 flex-shrink-0 mt-1" />
              <p className="text-sm md:text-base text-amber-100">
                <strong className="text-white">風險提示：</strong> 若無標準方案，將導致「一地一議」，造成管理混亂及不公平。這就是我們需要通用解決方案的原因。
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* --- Section 5: The Solution (Models) --- */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900">
              執行方案：兩大通用落位模式
            </h2>
          </Reveal>

          <div className="space-y-24">
            {/* Model A */}
            <Reveal>
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                  <div className="relative aspect-video bg-white rounded-2xl shadow-xl border border-slate-200 p-8 flex items-center justify-center overflow-hidden">
                     {/* Abstract Art for Cluster */}
                     <div className="grid grid-cols-3 gap-4 w-2/3 h-2/3">
                        <div className="bg-slate-100 rounded-lg"></div>
                        <div className="bg-slate-100 rounded-lg"></div>
                        <div className="bg-slate-100 rounded-lg"></div>
                        <div className="bg-slate-100 rounded-lg"></div>
                        <div className="bg-amber-100 border-2 border-amber-500 rounded-lg col-span-1 row-span-1 flex items-center justify-center text-xs text-amber-700 font-bold shadow-lg transform scale-110 z-10">地區板塊</div>
                        <div className="bg-slate-100 rounded-lg"></div>
                        <div className="bg-slate-100 rounded-lg"></div>
                        <div className="bg-slate-100 rounded-lg"></div>
                        <div className="bg-slate-100 rounded-lg"></div>
                     </div>
                     <div className="absolute bottom-4 left-4 text-xs text-slate-400 font-mono">SECTOR: GENERAL INDUSTRY</div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-bold mb-4">適用：單一產業團組</div>
                  <h3 className="text-3xl font-bold mb-4 text-slate-900">模式 A：板塊嵌入 (Cluster within Sector)</h3>
                  <p className="text-lg text-slate-600 mb-6">
                    針對例如「葡萄牙紅酒團」、「北京中醫藥團」等屬性單一的團組。
                  </p>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <CheckCircle2 className="text-teal-600 flex-shrink-0" />
                      <span><strong>落位：</strong> 整體進入對應的產業館。</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="text-teal-600 flex-shrink-0" />
                      <span><strong>權益：</strong> 允許「連片落位」，形成「地區子板塊」。</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="text-teal-600 flex-shrink-0" />
                      <span><strong>標識：</strong> 統一楣板格式：[地區名] + [產業名]。</span>
                    </li>
                  </ul>
                  <button 
                    onClick={() => openModal("模式 A 詳細說明", "適用對象：組織單一產業企業參展的地區（例：葡萄牙紅酒團）。\n\n核心邏輯：在產業大區中，劃出一塊專屬區域給該代表團，允許他們使用統一的地面裝飾或楣板顏色，但在物理空間上不設封閉圍牆，保持視線通透。")}
                    className="mt-8 text-amber-600 font-bold hover:text-amber-700 flex items-center gap-2"
                  >
                    查看詳情 <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </Reveal>

            {/* Model B */}
            <Reveal delay={200}>
              <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
                <div className="lg:w-1/2">
                  <div className="relative aspect-video bg-white rounded-2xl shadow-xl border border-slate-200 p-8 flex items-center justify-center">
                    {/* Abstract Art for Hub & Spoke */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center text-white text-center text-xs font-bold z-20 shadow-xl border-4 border-slate-200">
                           綜合代表團<br/>(Hub)
                        </div>
                        {/* Spokes */}
                        <div className="absolute top-1/4 right-1/4 animate-pulse">
                           <Building2 className="text-blue-500" size={32} />
                        </div>
                        <div className="absolute bottom-1/4 right-1/4 animate-pulse" style={{animationDelay: '0.5s'}}>
                           <Target className="text-amber-500" size={32} />
                        </div>
                        <div className="absolute bottom-1/4 left-1/4 animate-pulse" style={{animationDelay: '1s'}}>
                           <LayoutGrid className="text-green-500" size={32} />
                        </div>
                        {/* Lines */}
                        <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                            <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
                            <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
                            <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
                        </svg>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="inline-block px-3 py-1 bg-slate-200 text-slate-800 rounded-full text-sm font-bold mb-4">適用：多種產業團組</div>
                  <h3 className="text-3xl font-bold mb-4 text-slate-900">模式 B：功能輻射 (Hub & Spoke)</h3>
                  <p className="text-lg text-slate-600 mb-6">
                    針對某省同時帶來金融、旅遊、科技等多類企業的情況。
                  </p>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <CheckCircle2 className="text-teal-600 flex-shrink-0" />
                      <span><strong>落位：</strong> 必須拆分！不可混雜展示。</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="text-teal-600 flex-shrink-0" />
                      <span><strong>補償機制：</strong> 設立「經貿交流站 (Meeting Hub)」。</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="text-teal-600 flex-shrink-0" />
                      <span><strong>功能：</strong> 作為跨產業的公共接待點與形象窗口，不展示具體商品。</span>
                    </li>
                  </ul>
                  <button 
                     onClick={() => openModal("模式 B 詳細說明", "適用對象：組織多種產業企業參展的地區。\n\n必須拆分：為了買家體驗，金融企業必須去金融區，科技企業去科技區。\n\n如何安撫組團方？\n允許該團組在主通道或核心區設立一個「經貿交流站 (Meeting Hub)」，專門用於接待、形象展示和政務洽談，以此作為「大本營」，維繫地區形象。")}
                     className="mt-8 text-slate-600 font-bold hover:text-slate-800 flex items-center gap-2"
                  >
                    查看詳情 <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- Section 6: Guidelines --- */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl font-bold mb-12 text-center">建築規範：去行政化，確保視線通透</h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal className="bg-red-50 p-8 rounded-xl border border-red-100">
              <div className="flex items-center gap-4 mb-6">
                <XCircle className="text-red-500" size={32} />
                <h3 className="text-xl font-bold text-red-700">Don't (禁止)</h3>
              </div>
              <ul className="space-y-3 text-red-900/80">
                <li>• 跨通道的大型封閉式門樓。</li>
                <li>• 城堡式、城牆式封閉結構。</li>
                <li>• 純旅遊風景或行政口號的視覺內容。</li>
                <li>• 命名使用「XX國家館/省館」字樣。</li>
              </ul>
            </Reveal>

            <Reveal className="bg-green-50 p-8 rounded-xl border border-green-100" delay={100}>
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle2 className="text-green-600" size={32} />
                <h3 className="text-xl font-bold text-green-700">Do (允許)</h3>
              </div>
              <ul className="space-y-3 text-green-900/80">
                <li>• 使用統一的門頭設計元素 (Fascia)。</li>
                <li>• 命名強制使用「XX產業展團」或「[地區][產業]代表團」。</li>
                <li>• 展示產業內容與技術亮點。</li>
                <li>• 確保展位視線通透、開放。</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- Section 7: Benefits --- */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl font-bold mb-16">預期效益</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center">
                 <div className="bg-slate-800 p-6 rounded-full mb-6 text-amber-400">
                    <Scale size={40} />
                 </div>
                 <h3 className="text-xl font-bold mb-4">標準化管理</h3>
                 <p className="text-slate-400 text-sm">面對任何「設館」要求，均依據「產業優先」原則標準化回覆，減少談判成本。</p>
              </div>
              <div className="flex flex-col items-center">
                 <div className="bg-slate-800 p-6 rounded-full mb-6 text-teal-400">
                    <Target size={40} />
                 </div>
                 <h3 className="text-xl font-bold mb-4">提升專業度</h3>
                 <p className="text-slate-400 text-sm">徹底消除「大雜燴」，確保買家在特定展區看到的皆為同類企業，提升配對效率。</p>
              </div>
              <div className="flex flex-col items-center">
                 <div className="bg-slate-800 p-6 rounded-full mb-6 text-blue-400">
                    <Network size={40} />
                 </div>
                 <h3 className="text-xl font-bold mb-4">兼顧合作關係</h3>
                 <p className="text-slate-400 text-sm">通過「連片落位」和「楣板標識」，讓組織方在配合轉型的同時，仍能體現其組織影響力。</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --- Footer / Sticky CTA --- */}
      <div className="fixed bottom-6 right-6 z-40">
        <button 
          onClick={() => openModal("核心結論 (Conclusion)", "本方案將「廣東試點」的邏輯推演至所有國家及地區參展團。\n\n建議確立此通用標準，作為第31屆 MIF 招展與運營的剛性指引，確保政策執行的公平性與一致性。\n\n批准建議：同意試行，並發佈技術規範手冊。")}
          className="bg-amber-500 hover:bg-amber-600 text-white shadow-lg shadow-amber-500/40 px-6 py-4 rounded-full font-bold flex items-center gap-3 transition-transform hover:-translate-y-1"
        >
          <Target size={20} />
          <span>查看核心結論</span>
        </button>
      </div>

    </div>
  );
}