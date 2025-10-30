import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/components/newsletter-section"

export default function MissionPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Mission & Vision</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-orange-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-orange-600 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To empower individuals and communities through education, volunteering, and sustainable development
                initiatives that create lasting positive change in society.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-green-600 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                A society where every individual has the opportunity to reach their full potential, contributing
                meaningfully to their communities and creating a more equitable and sustainable world.
              </p>
            </div>
          </div>
        </div>
      </main>
      <NewsletterSection />
      <Footer />
    </>
  )
}
