import { Navbar } from "@/components/navbar"
import { StatsSection } from "@/components/stats-section"
import { ProgramShowcase } from "@/components/program-showcase"
import { PartnersSection } from "@/components/partners-section"
import { FellowshipSection } from "@/components/fellowship-section"
import { GlobalFocusSection } from "@/components/global-focus-section"
import { VolunteerGallery } from "@/components/volunteer-gallery"
import { CTASection } from "@/components/cta-section"
import NewsletterSection from "@/components/newsletter-section"
import Footer from "@/components/footer"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-6">
                <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
                  Empowering Communities
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Change Today
                <br />
                <span className="text-orange-600">Change Tomorrow</span>
              </h1>

              {/* Volunteer Stats */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex -space-x-2">
                  <div className="w-12 h-12 rounded-full bg-gray-800 border-4 border-white flex items-center justify-center text-white text-xs font-bold shadow-lg">
                    A
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gray-700 border-4 border-white flex items-center justify-center text-white text-xs font-bold shadow-lg">
                    B
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gray-600 border-4 border-white flex items-center justify-center text-white text-xs font-bold shadow-lg">
                    C
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gray-500 border-4 border-white flex items-center justify-center text-white text-xs font-bold shadow-lg">
                    D
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">50,000+</p>
                  <p className="text-gray-600 text-sm">Active Volunteers</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                At Sahayak, we believe in the transformative potential of volunteering. Our programs are designed with
                volunteers and fellows at the heart, each tailored to create significant and lasting impact in various
                fields. From education to leadership, and community development, we strive to create a network of
                passionate individuals driving positive change across India.
              </p>

              {/* CTA Button */}
              <Link href="/volunteer">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                  Join Our Mission
                  <span>↗</span>
                </button>
              </Link>
            </div>

            {/* Right Side - Community Impact Image */}
            <div className="relative h-96 lg:h-[500px]">
              {/* Community Impact Image */}
              <div className="relative h-full flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5u-aAvNvS8jqJIeXAoNHSYgE1uBPMXTAm.png"
                  alt="Community Impact - Diverse Volunteers"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Solid overlay with text */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 p-8">
                  <p className="text-white font-bold text-xl">Change Millions Lives in 10 years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
      <ProgramShowcase />
      <PartnersSection />
      <FellowshipSection />
      <GlobalFocusSection />
      <VolunteerGallery />
      <CTASection />

      <NewsletterSection />
      <Footer />
    </main>
  )
}
