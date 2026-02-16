import { InfiniteGrid } from "@/components/InfiniteGrid";
import { FaHandPointer } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Naše nejlepší weby a projekty | AEB Digital",
  description: "Prohlédněte si ukázky našich projektů pro 120+ spokojených klientů - weby, e-shopy, aplikace pro firmy. Moderní design, SEO optimalizace, responzivní web.",
  keywords: [
    "web portfolio",
    "ukázky webů",
    "web design reference",
    "ukázky e-shopů",
    "webové projekty",
    "AEB Digital projekty",
    "moderní weby",
  ],
  alternates: {
    canonical: "https://aebdigital.com/cz/portfolio",
  },
  openGraph: {
    title: "Portfolio - 120+ Úspěšných projektů | AEB Digital",
    description: "Prohlédněte si ukázky našich projektů - weby, e-shopy, aplikace pro firmy.",
    url: "https://aebdigital.com/cz/portfolio",
    type: "website",
  },
};

export default function PortfolioPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header py-32 text-white relative">
        <div className="container">
          <h1 className="page-title">Naše portfolio</h1>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        className="portfolio-apple-style py-5 relative overflow-hidden"
      >
        <div className="portfolio-content relative z-10">
          {/* Portfolio Gallery */}
          <div className="portfolio-gallery relative">
            {/* Infinite Grid Component */}
            <InfiniteGrid />
            {/* Drag Prompt - Centered overlay with bounce animation */}
            <div
              id="drag-prompt"
              className="drag-prompt absolute inset-0 flex justify-center items-center z-20 pointer-events-none transition-opacity duration-500"
            >
              <div className="flex items-center bg-black/70 backdrop-blur-sm px-6 py-4 rounded-full text-white text-2xl animate-bounce-gentle">
                <FaHandPointer className="drag-hand-icon mr-3" />
                <span className="drag-prompt-text">Tažením prozkoumejte galerii</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}