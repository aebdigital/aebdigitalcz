import Image from "next/image";
import { BackgroundTextAnimation } from "@/components/BackgroundTextAnimation";
import { ContactForm } from "@/components/ContactForm";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { TechnologiesShowcase } from "@/components/TechnologiesShowcase";
import { FaRocket, FaHeart, FaHandshake, FaAward } from 'react-icons/fa';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "O nás - Tým webových expertů | AEB Digital Bratislava",
    description: "Seznamte se s týmem AEB Digital - webovou agenturou z Bratislavy s 5+ lety zkušeností. 120+ úspěšných projektů, moderní technologie, individuální přístup. Váš partner pro digitální transformaci.",
    keywords: [
        "AEB Digital tým",
        "webová agentura Bratislava",
        "o nás",
        "web development tým",
        "digitální agentura",
        "web designéři",
        "vývojáři Bratislava",
    ],
    alternates: {
        canonical: "https://aebdigital.com/cz/about",
    },
    openGraph: {
        title: "O nás - Tým webových expertů | AEB Digital",
        description: "Seznamte se s týmem AEB Digital - webovou agenturou z Bratislavy s 5+ lety zkušeností a 120+ úspěšnými projekty.",
        url: "https://aebdigital.com/cz/about",
        type: "website",
    },
};

interface StorySectionProps {
    label: string;
    title: string;
    leadText: string;
    paragraph: string;
    imageSrc: string;
    imageAlt: string;
    reverse?: boolean;
}

function StorySection({ label, title, leadText, paragraph, imageSrc, imageAlt, reverse = false }: StorySectionProps) {
    return (
        <div className="story-content grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16" style={{ backgroundColor: 'transparent' }}>
            <div className={`story-text ${reverse ? 'md:order-2' : 'md:order-1'}`}>
                <span className="story-label inline-block bg-accent-teal text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                    {label}
                </span>
                <h2 className="text-4xl leading-tight mb-6 text-white">{title}</h2>
                <p className="lead-text text-lg text-white/[0.9] mb-6 font-medium">{leadText}</p>
                <p className="text-base text-white/[0.8] leading-relaxed">{paragraph}</p>
            </div>
            <div className={`story-image rounded-none overflow-hidden shadow-xl transform transition-transform duration-300 hover:-translate-y-1 ${reverse ? 'md:order-1' : 'md:order-2'}`}>
                <Image src={imageSrc} alt={imageAlt} width={800} height={400} layout="responsive" objectFit="cover" />
            </div>
        </div>
    );
}

function ValuesGrid() {
    const values = [
        { icon: <FaRocket />, title: "Inovace", description: "Využíváme nejnovější technologie a trendy k vytváření moderních řešení, která vás posunou vpřed." },
        { icon: <FaHeart />, title: "Vášeň pro detail", description: "Každý pixel, každý řádek kódu a každá interakce jsou promyšlené a dokonale propracované." },
        { icon: <FaHandshake />, title: "Partnerství", description: "Nejsme jen dodavatel – jsme váš partner na cestě k digitálnímu úspěchu." },
        { icon: <FaAward />, title: "Kvalita", description: "100% spokojenost klientů není náhoda – je to výsledek naší práce a nasazení." },
    ];

    return (
        <section className="values-grid py-24 text-white relative overflow-hidden z-10">
            <div className="container relative z-10">
                <div className="values-grid-inner grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <div key={index} className="value-card text-center p-8 bg-white/[0.05] backdrop-blur-md rounded-xl border border-white/[0.1] transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.1]">
                            <div className="value-icon w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-accent-teal rounded-full text-white text-3xl">
                                {value.icon}
                            </div>
                            <h3 className="text-2xl font-extrabold text-accent-teal mb-3">{value.title}</h3>
                            <p className="text-base text-white/[0.9] leading-relaxed">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function AboutUsPage() {
    return (
        <>
            {/* Page Header */}
            <section className="page-header py-20 text-white relative z-10">
                <div className="container">
                    <h1 className="page-title">O AEB Digital</h1>
                </div>
            </section>

            {/* About Content */}
            <section className="about-content-modern py-20 relative z-10">
                <div className="container">
                    <div className="about-layout">
                        <StorySection
                            label="Náš příběh"
                            title="Vytváříme digitální zážitky, které inspirují"
                            leadText="Jsme mladý, dynamický tým s více než 5 lety zkušeností v digitálních technologiích. Začínali jsme jako malá agentura s velkými sny."
                            paragraph="Dnes máme za sebou 120+ spokojených klientů a nadále inspirujeme ostatní. Ke každému projektu přistupujeme individuálně a s citem pro detail."
                            imageSrc="/sources/aeb-portfolio/30.webp"
                            imageAlt="AEB Digital práce"
                        />
                        <StorySection
                            label="Naše filozofie"
                            title="Kvalita a inovace jsou na prvním místě"
                            leadText="Věříme, že každý projekt je jedinečný a zaslouží si individuální přístup. Využíváme nejnovější technologie a trendy, ale nikdy nezapomínáme na základní principy kvalitní práce."
                            paragraph="Naším cílem není jen vytvořit funkční řešení, ale pomoci vaší firmě dosáhnout skutečného úspěchu v digitálním světě."
                            imageSrc="/sources/aeb-portfolio/80.webp"
                            imageAlt="Digitální řešení"
                            reverse
                        />
                    </div>
                </div>
            </section>

            <ValuesGrid />

            <TechnologiesShowcase />

            <ContactForm />
            <FAQSection />
            <Footer />

            {/* Large AEB Digital Image below FAQ */}
            <div className="relative z-40 w-full h-[400px] pointer-events-none hidden lg:block">
                <Image src="/sources/footimg_copy-removebg-preview.png" alt="AEB DIGITAL" width={1920} height={400} className="object-contain w-full h-full" />
            </div>
        </>
    );
}
