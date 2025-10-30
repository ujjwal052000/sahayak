import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/components/newsletter-section"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Story</h1>
            <p className="text-lg text-gray-600">Learn about Sahayak's journey and mission</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Sahayak is a leading NGO dedicated to creating positive social change through education, community
              development, and empowerment initiatives. Our mission is to build a society where every individual has the
              opportunity to reach their full potential.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Founded with a vision to transform lives through volunteering and meaningful action, Sahayak has grown
              into a network of passionate individuals working across multiple sectors including education, healthcare,
              environmental conservation, and community welfare.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe in the power of collective action and the transformative potential of volunteering. Through our
              programs and initiatives, we aim to create lasting impact in the communities we serve.
            </p>
          </div>
        </div>
      </main>
      <NewsletterSection />
      <Footer />
    </>
  )
}
