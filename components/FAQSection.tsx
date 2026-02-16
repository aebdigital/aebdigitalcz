"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Jak dlouho trvá vytvoření webové stránky?",
    answer: "Doba realizace závisí na složitosti projektu. Jednoduchou prezentační stránku lze dokončit za 1-2 týdny, zatímco komplexní e-shop nebo webová aplikace může trvat 4-8 týdnů. Po úvodní konzultaci vám poskytneme přesný časový harmonogram."
  },
  {
    question: "Kolik stojí webová stránka?",
    answer: "Ceny se pohybují od 500 € za jednoduchou prezentační stránku až po 5000 €+ za komplexní e-commerce řešení. Konečná cena závisí na funkcionalitě, designu a požadavcích. Transparentní cenovou nabídku vypracujeme po analýze vašich potřeb."
  },
  {
    question: "Poskytujete také údržbu a podporu?",
    answer: "Ano, nabízíme kompletní služby údržby a technické podpory. To zahrnuje aktualizace obsahu, bezpečnostní záplaty, zálohování dat a řešení technických problémů. Můžete si vybrat z různých balíčků podle vašich potřeb."
  },
  {
    question: "Budeme si moci obsah webu upravovat sami?",
    answer: "Samozřejmě! Weby stavíme s uživatelsky přívětivým CMS (Content Management System), který vám umožní snadno přidávat a upravovat obsah bez technických znalostí. Poskytujeme také školení a dokumentaci."
  },
  {
    question: "Jsou vaše weby optimalizované pro mobilní zařízení?",
    answer: "Všechny naše weby jsou responzivní, což znamená, že se automaticky přizpůsobí jakémukoli zařízení - ať už je to mobil, tablet nebo počítač. Používáme mobile-first přístup pro optimální uživatelský zážitek."
  },
  {
    question: "Pomáháte také s digitálním marketingem?",
    answer: "Ano, nabízíme komplexní služby digitálního marketingu včetně SEO optimalizace, správy sociálních sítí, PPC kampaní a email marketingu. Pomůžeme vám nejen vytvořit skvělý web, ale také na něj přivést návštěvníky."
  },
  {
    question: "Jaký je proces tvorby webu?",
    answer: "Náš proces zahrnuje 4 kroky: 1) Bezplatná konzultace a analýza potřeb, 2) Tvorba wireframů a designu, 3) Programování a testování, 4) Spuštění a zaškolení. Každý krok zahrnuje vaši zpětnou vazbu."
  },
  {
    question: "Poskytujete záruky na svou práci?",
    answer: "Ano, na všechna naše webová řešení poskytujeme 12měsíční záruku. Záruka pokrývá technické chyby, kompatibilitu prohlížečů a základní funkčnost. Drobná úpravy a opravy jsou v rámci záruky zdarma."
  },
  {
    question: "Můžete migrovat existující web?",
    answer: "Samozřejmě! Zajistíme kompletní migraci vašich dat, obsahu a SEO nastavení z původního webu. Proces je navržen tak, aby neovlivnil vaši návštěvnost ani pozice ve vyhledávačích."
  },
  {
    question: "Mohu si objednat jen design bez programování?",
    answer: "Ano, nabízíme i samostatné služby designu. Vytvoříme pro vás kompletní UI/UX návrhy ve Figmě spolu s prototypy a grafickými podklady pro další implementaci."
  },
  {
    question: "Jaké platební metody akceptujete?",
    answer: "Akceptujeme bankovní převody, platby kartou a PayPal. Větší projekty jsou rozděleny na dílčí platby - obvykle 50 % na začátku a 50 % po dokončení. Měsíční fakturace je možná u dlouhodobých projektů."
  },
  {
    question: "Vytváříte také mobilní aplikace?",
    answer: "Specializujeme se na webové aplikace, které fungují perfektně na mobilech jako PWA (Progressive Web Apps). Pro nativní mobilní aplikace máme partnerské firmy, se kterými úzce spolupracujeme."
  },
  {
    question: "Jaké technologie používáte?",
    answer: "Používáme moderní technologie jako React, Vue.js, Node.js, TypeScript a WordPress. Pro design pracujeme s Figmou a Adobe Creative Suite. Výběr technologií vždy přizpůsobujeme potřebám projektu."
  },
  {
    question: "Pomáháte s obsahem a copywritingem?",
    answer: "Ano, máme zkušené copywritery, kteří vám pomohou vytvořit kvalitní obsah optimalizovaný pro SEO. Pomůžeme s texty, popisy produktů i marketingovými materiály."
  },
  {
    question: "Jaká je vaše dostupnost při urgentních problémech?",
    answer: "Pro kritické problémy máme technickou podporu od 9:00 do 22:00. Standardní doba odezvy je do 2 hodin v pracovní dny a do 24 hodin o víkendech. Urgentní opravy řešíme prioritně."
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section py-20 text-white relative z-40">
      <div className="container">
        <h2 className="heading-section text-left mb-12">Často kladené otázky</h2>
        <div className="faq-layout grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="faq-grid lg:col-span-2">
            {faqData.map((item, index) => (
              <div key={index} className="faq-item border-b border-gray-medium/20 last:border-b-0">
                <div
                  className={`faq-question flex justify-between items-center cursor-pointer py-4 transition-all duration-300 hover:bg-accent-teal/10 hover:pl-4 rounded-md ${openIndex === index ? 'text-accent-teal' : 'text-white'}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-xl font-bold font-sans normal-case">{item.question}</h3>
                  <span className={`faq-toggle text-2xl font-light transition-transform duration-300 ${openIndex === index ? 'rotate-45 text-accent-teal' : ''}`}>+</span>
                </div>
                <div
                  className={`faq-answer overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                    }`}
                >
                  <p className="text-gray-light pl-4 pr-8 py-2 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-contact-box p-8 flex flex-col justify-center items-center text-center sticky top-20 self-start hidden lg:flex">
            <h3 className="text-3xl font-bold font-heading mb-6">První konzultace a návrh jsou zdarma!</h3>
            <Link href="/contact" className="btn btn-primary">
              <span className="btn-text-container">
                <span className="btn-text btn-text-visible">Kontakt</span>
                <span className="btn-text btn-text-hidden">VÍCE</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
