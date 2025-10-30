import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/components/newsletter-section"

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Team</h1>
          <p className="text-lg text-gray-600 mb-12">Meet the passionate individuals driving change at Sahayak</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="w-full h-64 bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center">
                  <span className="text-6xl font-bold text-orange-600">👤</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Team Member {i}</h3>
                  <p className="text-gray-600 mb-2">Position Title</p>
                  <p className="text-sm text-gray-500">Dedicated to making a difference in our community</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <NewsletterSection />
      <Footer />
    </>
  )
}
