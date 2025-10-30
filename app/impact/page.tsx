import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/components/newsletter-section"

export default function ImpactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Impact Stories</h1>
          <p className="text-lg text-gray-600 mb-12">Real stories of transformation and change</p>

          <div className="space-y-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-8 border-l-4 border-orange-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Impact Story {i}</h3>
                <p className="text-gray-700 mb-4">
                  Through our programs, we have been able to create meaningful change in the lives of thousands of
                  individuals. This story showcases the real impact of our work and the dedication of our volunteers.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Impact:</strong> 500+ lives transformed | <strong>Duration:</strong> 2 years |{" "}
                  <strong>Volunteers:</strong> 50+
                </p>
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
