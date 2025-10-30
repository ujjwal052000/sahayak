import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/components/newsletter-section"
import { Button } from "@/components/ui/button"

export default function PartnerPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Partner With Us</h1>
          <p className="text-lg text-gray-600 mb-12">Let's create impact together</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Partnership Opportunities</h2>
              <div className="space-y-4">
                {[
                  "Corporate Social Responsibility",
                  "Educational Institutions",
                  "Healthcare Providers",
                  "Technology Companies",
                  "Government Agencies",
                  "International Organizations",
                ].map((opportunity, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <span className="text-orange-500 text-xl">→</span>
                    <span className="text-gray-700">{opportunity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Organization Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <input
                  type="email"
                  placeholder="Contact Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <input
                  type="tel"
                  placeholder="Contact Phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <textarea
                  placeholder="Tell us about your organization"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                ></textarea>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2">
                  Submit Partnership Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <NewsletterSection />
      <Footer />
    </>
  )
}
