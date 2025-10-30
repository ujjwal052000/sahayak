import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/components/newsletter-section"
import { Button } from "@/components/ui/button"

export default function DonatePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Support Our Cause</h1>
          <p className="text-lg text-gray-600 mb-12">Your donation makes a real difference</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Where Your Money Goes</h2>
              <div className="space-y-4">
                {[
                  { area: "Education Programs", percentage: 40 },
                  { area: "Healthcare Initiatives", percentage: 25 },
                  { area: "Community Development", percentage: 20 },
                  { area: "Operations & Admin", percentage: 15 },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{item.area}</span>
                      <span className="text-orange-600 font-bold">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Make a Donation</h2>
              <div className="space-y-4 mb-6">
                {[100, 500, 1000, 5000].map((amount) => (
                  <button
                    key={amount}
                    className="w-full px-4 py-3 border-2 border-green-500 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition"
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Custom Amount"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-green-500"
              />
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2">
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      </main>
      <NewsletterSection />
      <Footer />
    </>
  )
}
