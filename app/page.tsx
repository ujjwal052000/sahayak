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
      <section className="bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/programs" className="text-orange-600 font-semibold hover:text-orange-700">
              Our Programs
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Change Today...
                <br />
                <span className="text-orange-600">Change Tomorrow</span>
              </h1>

              {/* Volunteer Stats */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    A
                  </div>
                  <div className="w-10 h-10 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    B
                  </div>
                  <div className="w-10 h-10 rounded-full bg-purple-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    C
                  </div>
                  <div className="w-10 h-10 rounded-full bg-pink-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    D
                  </div>
                </div>
                <p className="text-gray-700 font-semibold">
                  50K+ <span className="text-gray-600 font-normal">Active Volunteers</span>
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                At Sahayak, we believe in the transformative potential of volunteering. Our programs are designed with
                volunteers and fellows at the heart, each tailored to create significant and lasting impact in various
                fields. From education to leadership, and community development, we strive to create a network of
                passionate individuals driving positive change across India.
              </p>

              {/* CTA Button */}
              <Link href="/volunteer">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition inline-flex items-center gap-2">
                  Join Our Mission
                  <span>↗</span>
                </button>
              </Link>
            </div>

            {/* Right Side - Community Impact Image */}
            <div className="relative h-96 lg:h-full min-h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-orange-100 rounded-3xl opacity-50"></div>
              <div className="absolute top-10 right-10 w-32 h-32 bg-orange-400 rounded-full opacity-20"></div>
              <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-400 rounded-full opacity-20"></div>
              <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-green-400 rounded-full opacity-20"></div>

              {/* Community Impact Image */}
              <div className="relative h-full flex items-center justify-center rounded-3xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5u-aAvNvS8jqJIeXAoNHSYgE1uBPMXTAm.png"
                  alt="Community Impact - Diverse Volunteers"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay with text */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <p className="text-white font-semibold text-lg">Change Millions Lives in 10 years</p>
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
