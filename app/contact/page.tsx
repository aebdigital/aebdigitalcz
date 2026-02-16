import { ContactForm } from "@/components/ContactForm";
import { ContactInfoSection } from "@/components/ContactInfoSection";
import { BackgroundTextAnimation } from "@/components/BackgroundTextAnimation";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kontakt - Bezplatná konzultace a cenová nabídka | AEB Digital Bratislava",
    description: "Kontaktujte AEB Digital pro bezplatnou konzultaci! Telefon: +421 908 507 131, E-mail: peter@aebdig.com. Cenová nabídka na web do 24 hodin. Sídlo v Bratislavě.",
    keywords: [
        "kontakt AEB Digital",
        "webová agentura Bratislava",
        "bezplatná konzultace webu",
        "cenová nabídka webu",
        "kontakt na vývoj webu",
        "digitální agentura kontakt",
    ],
    alternates: {
        canonical: "https://aebdigital.com/cz/contact",
    },
    openGraph: {
        title: "Kontakt - Bezplatná konzultace | AEB Digital",
        description: "Kontaktujte nás pro bezplatnou konzultaci. Telefon: +421 908 507 131. Cenová nabídka do 24 hodin!",
        url: "https://aebdigital.com/cz/contact",
        type: "website",
    },
};

export default function KontaktPage() {
    return (
        <>
            <BackgroundTextAnimation />

            {/* Page Header */}
            <section className="page-header py-32 bg-custom-bg text-white">
                <div className="container">
                    <h1 className="page-title">Kontaktujte nás</h1>
                </div>
            </section>

            <ContactInfoSection />
            <ContactForm />
            <FAQSection />
            <Footer />

            {/* Large AEB Digital Image below Footer */}
            <div className="relative z-40 w-full h-[400px] pointer-events-none hidden lg:block">
                <Image src="/sources/footimg_copy-removebg-preview.png" alt="AEB DIGITAL" width={1920} height={400} className="object-contain w-full h-full" />
            </div>
        </>
    );
}
