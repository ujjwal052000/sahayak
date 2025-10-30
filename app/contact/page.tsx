import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/components/newsletter-section"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-12">We'd love to hear from you</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
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
                  <option>Select Subject</option>
                  <option>General Inquiry</option>
                  <option>Volunteering</option>
                  <option>Partnership</option>
                  <option>Feedback</option>
                </select>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                ></textarea>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-orange-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-700">
                  123 Sahayak Street
                  <br />
                  New Delhi, India - 110001
                </p>
              </div>

              <div className="bg-green-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-700">+91 (11) 1234-5678</p>
              </div>

              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-700">contact@sahayak.org</p>
              </div>

              <div className="bg-purple-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Office Hours</h3>
                <p className="text-gray-700">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 4:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <NewsletterSection />
      <Footer />
    </>
  )
}
