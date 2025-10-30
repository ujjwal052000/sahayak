import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/components/newsletter-section"

export default function InitiativesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Initiatives</h1>
          <p className="text-lg text-gray-600 mb-12">Current and upcoming projects making a difference</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Digital Literacy Program", status: "Active", progress: 75 },
              { title: "Clean Water Initiative", status: "Active", progress: 60 },
              { title: "Scholarship Program", status: "Active", progress: 85 },
              { title: "Healthcare Camp", status: "Upcoming", progress: 30 },
            ].map((initiative, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{initiative.title}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      initiative.status === "Active" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {initiative.status}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-orange-500 h-2 rounded-full transition-all"
                    style={{ width: `${initiative.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">{initiative.progress}% Complete</p>
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
