import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/components/newsletter-section"
import { Button } from "@/components/ui/button"

export default function VolunteerPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Become a Volunteer</h1>
          <p className="text-lg text-gray-600 mb-12">Join our community of changemakers</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Volunteer With Us?</h2>
              <ul className="space-y-4">
                {[
                  "Make a real difference in people's lives",
                  "Develop new skills and gain experience",
                  "Join a community of passionate individuals",
                  "Flexible volunteering opportunities",
                  "Comprehensive training and support",
                ].map((reason, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-xl">✓</span>
                    <span className="text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-orange-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                />
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500">
                  <option>Select Interest Area</option>
                  <option>Education</option>
                  <option>Healthcare</option>
                  <option>Environment</option>
                  <option>Community Development</option>
                </select>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2">
                  Register Now
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
