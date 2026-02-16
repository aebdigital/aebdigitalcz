import Image from "next/image";
import Link from "next/link";
import { BackgroundTextAnimation } from "@/components/BackgroundTextAnimation";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Služby - Vývoj webů, E-shopy, Aplikace | AEB Digital Bratislava",
    description: "Kompletní digitální služby v Bratislavě: vývoj webových stránek od 500 €, e-shopy na míru, webové aplikace, digitální marketing, SEO optimalizace, UI/UX design. Konzultace zdarma!",
    keywords: [
        "vývoj webů",
        "web design služby",
        "vývoj e-shopů",
        "webové aplikace na míru",
        "SEO optimalizace",
        "digitální marketing",
        "UI/UX design",
        "responzivní web design",
        "WordPress weby",
        "React vývoj",
    ],
    alternates: {
        canonical: "https://aebdigital.com/cz/services",
    },
    openGraph: {
        title: "Služby - Vývoj webů, E-shopy, Aplikace | AEB Digital",
        description: "Kompletní digitální služby v Bratislavě: weby, e-shopy, aplikace, marketing. Konzultace zdarma!",
        url: "https://aebdigital.com/cz/services",
        type: "website",
    },
};

interface ServiceItemProps {
    id: string;
    title: string;
    description: string;
    features: string[];
    imageSrc: string;
    imageAlt: string;
    reverse?: boolean;
}

function ServiceSection({ id, title, description, features, imageSrc, imageAlt, reverse = false }: ServiceItemProps) {
    return (
        <section id={id} className={`services-page-section ${reverse ? 'reverse' : ''}`}>
            {/* Desktop Layout */}
            <div className={`hidden lg:flex ${reverse ? 'flex-row-reverse' : 'flex-row'} min-h-screen`}>
                {/* Text Column */}
                <div className="w-1/2 flex items-center">
                    <div className={`py-20 ${reverse ? 'pl-8 pr-[5vw]' : 'pl-[5vw] pr-8'}`}>
                        <h2 className="text-7xl xl:text-8xl font-bold mb-6">{title}</h2>
                        <p className="text-gray-light mb-8">{description}</p>

                        <div className="service-list grid grid-cols-1 gap-4 mb-8">
                            {features.map((feature, index) => (
                                <div key={index} className="service-item flex items-center">
                                    <span className="service-number text-accent-teal font-bold text-lg mr-2">{(index + 1).toString().padStart(2, '0')}</span>
                                    <span className="text-gray-light">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <Link href="/contact" className="btn btn-primary">Požádat o nabídku</Link>
                    </div>
                </div>
                {/* Image Column - 50vw, touching edge */}
                <div className="w-1/2 relative h-screen">
                    <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden">
                <div className="relative h-[50vh] w-full">
                    <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
                </div>
                <div className="py-12 px-4">
                    <h2 className="text-4xl font-bold mb-6">{title}</h2>
                    <p className="text-gray-light mb-8">{description}</p>

                    <div className="service-list grid grid-cols-1 gap-4 mb-8">
                        {features.map((feature, index) => (
                            <div key={index} className="service-item flex items-center">
                                <span className="service-number text-accent-teal font-bold text-lg mr-2">{(index + 1).toString().padStart(2, '0')}</span>
                                <span className="text-gray-light">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <Link href="/contact" className="btn btn-primary">Požádat o nabídku</Link>
                </div>
            </div>
        </section>
    );
}

function ProcessSection() {
    const processSteps = [
        {
            step: 1,
            title: "Konzultace",
            description: "Na první schůzce společně definujeme vaše potřeby a cíle projektu."
        },
        {
            step: 2,
            title: "Návrh",
            description: "Vytvoříme detailní návrh řešení a cenovou nabídku na míru vašemu rozpočtu."
        },
        {
            step: 3,
            title: "Vývoj",
            description: "Projekt realizujeme s využitím nejnovějších technologií a osvědčených postupů."
        },
        {
            step: 4,
            title: "Testování",
            description: "Důkladně otestujeme veškerou funkcionalitu a optimalizujeme výkon řešení."
        },
        {
            step: 5,
            title: "Spuštění",
            description: "Projekt nasadíme do produkce a zajistíme hladký přechod."
        },
        {
            step: 6,
            title: "Podpora",
            description: "Poskytujeme technickou podporu a údržbu pro dlouhodobý úspěch projektu."
        },
    ];

    return (
        <section className="process-section py-20 text-white relative overflow-hidden">
            <div className="container relative z-10">
                <h2 className="heading-section text-center mb-12">Náš proces</h2>

                <div className="process-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {processSteps.map((step, index) => (
                        <div key={index} className="process-card">
                            <div className="process-icon">
                                <span className="text-2xl font-bold">{step.step}</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
                            <p className="text-gray-light">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function ServicesPage() {
    return (
        <>
            <BackgroundTextAnimation />

            {/* Page Header */}
            <section className="page-header py-32 text-white">
                <div className="container">
                    <h1 className="page-title">Naše služby</h1>
                </div>
            </section>

            <ServiceSection
                id="websites"
                title="Webové stránky"
                description="Vytváříme moderní, responzivní webové stránky optimalizované pro všechna zařízení. Naše weby jsou rychlé, SEO optimalizované a navržené s ohledem na uživatelský zážitek."
                features={["Responzivní design", "SEO optimalizace", "Rychlé načítání", "CMS systém", "Technická podpora", "SSL certifikáty", "Hosting a domény", "Google Analytics"]}
                imageSrc="/sources/web-design.webp"
                imageAlt="Webové stránky"
            />

            <ServiceSection
                id="web-applications"
                title="Webové aplikace"
                description="Vyvíjíme pokročilé webové aplikace s moderními funkcemi. Využíváme nejnovější technologie jako React, Node.js a TypeScript pro robustní řešení."
                features={["React & Vue.js", "Node.js Backend", "Real-time funkce", "API integrace", "Škálovatelnost", "Progresivní webové aplikace", "Databáze a Cloud", "Automatizace"]}
                imageSrc="/sources/services/aplikacie.webp"
                imageAlt="Webové aplikace"
                reverse
            />

            <ServiceSection
                id="e-shops"
                title="E-shopy"
                description="Vytváříme komplexní e-commerce řešení, která zvýší váš prodej. Od designu přes platební brány až po správu objednávek – vše na jednom místě."
                features={["WooCommerce & Shopify", "Platební brány", "Správa skladu", "Analytika a reporty", "Mobilní optimalizace", "Skladové hospodářství", "Vícekanálový prodej", "Integrace email marketingu"]}
                imageSrc="/sources/Gemini_Generated_Image_lxz7dglxz7dglxz7.webp"
                imageAlt="E-shopy"
            />

            <ServiceSection
                id="digital-marketing"
                title="Digitální marketing"
                description="Pomáháme vaší značce růst online. Spravujeme sociální sítě, vytváříme obsah a spouštíme reklamní kampaně, které přinášejí výsledky."
                features={["Správa sociálních sítí", "Google Ads & Facebook Ads", "Tvorba obsahu", "Email marketing", "SEO optimalizace", "Influencer marketing", "Optimalizace konverzí", "Marketingová automatizace"]}
                imageSrc="/sources/social-media.webp"
                imageAlt="Digitální marketing"
                reverse
            />

            <ServiceSection
                id="email-marketing"
                title="Email marketing"
                description="Vytváříme efektivní emailové kampaně, které budují vztahy se zákazníky a zvyšují konverze. Od newsletterů po automatizované sekvence."
                features={["Newsletter kampaně", "Emailová automatizace", "A/B testování", "Analytika a reporty", "Personalizace obsahu", "Drip kampaně", "Lead nurturing", "Optimalizace ROI"]}
                imageSrc="/sources/email-market.webp"
                imageAlt="Email marketing"
            />

            <ProcessSection />
        </>
    );
}
