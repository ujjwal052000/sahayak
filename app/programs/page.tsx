import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/components/newsletter-section"

export default function ProgramsPage() {
  const programs = [
    {
      title: "Education Initiative",
      description: "Empowering students through quality education and skill development programs",
      icon: "📚",
    },
    {
      title: "Community Development",
      description: "Building sustainable communities through grassroots initiatives",
      icon: "🏘️",
    },
    {
      title: "Healthcare Program",
      description: "Providing accessible healthcare and wellness services",
      icon: "⚕️",
    },
    {
      title: "Environmental Conservation",
      description: "Protecting our environment through sustainable practices",
      icon: "🌱",
    },
    {
      title: "Youth Empowerment",
      description: "Developing leadership skills in young individuals",
      icon: "🚀",
    },
    {
      title: "Women Welfare",
      description: "Supporting women's rights and economic independence",
      icon: "👩",
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Programs</h1>
          <p className="text-lg text-gray-600 mb-12">Discover the initiatives making a difference</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
                <div className="text-5xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
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
