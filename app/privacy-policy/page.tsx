import { BackgroundTextAnimation } from "@/components/BackgroundTextAnimation";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ochrana osobních údajů | GDPR | AEB Digital",
    description: "Zásady ochrany osobních údajů a GDPR společnosti AEB Digital. Informace o zpracování osobních údajů, cookies a právech subjektů údajů dle GDPR.",
    alternates: {
        canonical: "https://aebdigital.com/cz/privacy-policy",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function PrivacyPolicyPage() {
    return (
        <>
            <BackgroundTextAnimation />

            {/* Page Header */}
            <section className="page-header py-32 bg-custom-bg text-white">
                <div className="container">
                    <h1 className="page-title">Ochrana osobních údajů</h1>
                </div>
            </section>

            {/* Privacy Policy Content */}
            <section className="privacy-policy-content py-20 bg-custom-bg text-white">
                <div className="container">
                    <div className="privacy-text max-w-4xl mx-auto">
                        <p className="mb-4"><strong>AEB Digital s. r. o.</strong><br />
                            IČO: 57 307 709<br />
                            CEO: Peter Samuel Bobák<br />
                            E-mail: peter@aebdig.com<br />
                            Telefon: +421 908 507 131</p>

                        <p className="mb-8">Tyto zásady ochrany osobních údajů (dále jen „Zásady“) popisují, jaké osobní údaje zpracováváme v souvislosti s používáním našich webových stránek a kontaktních formulářů.</p>

                        <hr className="my-8 border-gray-medium" />

                        <h2 className="text-3xl font-bold mb-4">I. Kontaktní formulář</h2>
                        <p className="mb-4">Na webových stránkách www.aebdigital.cz provozujeme kontaktní formulář na dvou samostatných stránkách, jehož účelem je umožnit vám:</p>
                        <ul className="list-disc list-inside mb-4 pl-4 text-gray-light">
                            <li>Položit dotaz ohledně našich produktů a služeb</li>
                            <li>Požádat o cenovou nabídku</li>
                        </ul>

                        <p className="mb-2"><strong>Rozsah zpracovávaných údajů:</strong></p>
                        <ul className="list-disc list-inside mb-4 pl-4 text-gray-light">
                            <li>Jméno a příjmení</li>
                            <li>E-mailová adresa</li>
                            <li>Telefonní číslo</li>
                        </ul>

                        <p className="mb-2"><strong>Účel zpracování:</strong><br />
                            Výše uvedené údaje zpracováváme za účelem kontaktování a zodpovězení vašeho dotazu.</p>

                        <p className="mb-8"><strong>Právní základ:</strong><br />
                            Článek 6 odst. 1 písm. b) GDPR – plnění opatření před uzavřením smlouvy na žádost subjektu údajů.</p>

                        <p className="mb-2"><strong>Doba uchování:</strong><br />
                            Osobní údaje budeme uchovávat po dobu maximálně 10 let od zodpovězení vašeho dotazu, pokud nevznikne další smluvní vztah.</p>

                        <hr className="my-8 border-gray-medium" />

                        <h2 className="text-3xl font-bold mb-4">II. Cookies</h2>
                        <p className="mb-4">Na našich webových stránkách používáme cookies výhradně k následujícím účelům:</p>
                        <ul className="list-disc list-inside mb-4 pl-4 text-gray-light">
                            <li><strong>Nezbytné cookies</strong> – zajišťují základní funkčnost webu (např. uložení relace, nastavení prohlížeče).</li>
                            <li><strong>Statistické (analytické) cookies</strong> – pomáhají nám pochopit, jak návštěvníci web používají (nasazujeme je pouze se souhlasem uživatele).</li>
                        </ul>

                        <p className="mb-8"><strong>Správa souhlasu:</strong><br />
                            Uživatel může souhlas s používáním statistických cookies kdykoli odvolat prostřednictvím nastavení cookie lišty nebo přímo v prohlížeči.</p>

                        <hr className="my-8 border-gray-medium" />

                        <h3 className="text-3xl font-bold mb-4">III. Práva subjektu údajů</h3>
                        <p className="mb-4">Podle nařízení GDPR máte následující práva:</p>
                        <ul className="list-disc list-inside mb-4 pl-4 text-gray-light">
                            <li>Přístup k osobním údajům, které zpracováváme</li>
                            <li>Oprava nepřesných nebo neúplných údajů</li>
                            <li>Výmaz („právo být zapomenut“), pokud již neexistuje právní důvod pro zpracování</li>
                            <li>Omezení zpracování</li>
                            <li>Přenositelnost údajů</li>
                            <li>Odvolání souhlasu – nabývá účinnosti dnem odvolání</li>
                            <li>Podání stížnosti u Úřadu na ochranu osobních údajů Slovenské republiky (Hraničná 12, 820 07 Bratislava, <a href="http://www.dataprotection.gov.sk" target="_blank" rel="noopener noreferrer" className="text-accent-teal hover:underline">www.dataprotection.gov.sk</a>)</li>
                        </ul>

                        <p className="mb-8">Pokuď máte jakékoli dotazy nebo si přejete uplatnit svá práva, můžete nás kontaktovat na <a href="mailto:reachout@aebdig.com" className="text-accent-teal hover:underline">reachout@aebdig.com</a> nebo telefonicky na +421 917 422 245.</p>

                        <hr className="my-8 border-gray-medium" />

                        <p className="italic text-gray-light"><em>Tyto Zásady nabývají účinnosti dnem 25. dubna 2025.</em></p>
                    </div>
                </div>
            </section>
        </>
    );
}
