import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/components/newsletter-section"

export default function BlogsPage() {
  const blogs = [
    {
      title: "The Power of Volunteering",
      excerpt: "Discover how volunteering can transform both communities and individuals",
      date: "Oct 25, 2025",
      category: "Impact",
    },
    {
      title: "Education: The Key to Change",
      excerpt: "Exploring how quality education creates lasting social impact",
      date: "Oct 20, 2025",
      category: "Education",
    },
    {
      title: "Community Stories: Making a Difference",
      excerpt: "Real stories from our volunteers and the communities they serve",
      date: "Oct 15, 2025",
      category: "Stories",
    },
    {
      title: "Sustainable Development Goals",
      excerpt: "How Sahayak aligns with global sustainability initiatives",
      date: "Oct 10, 2025",
      category: "Sustainability",
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-lg text-gray-600 mb-12">Stories, insights, and updates from Sahayak</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.map((blog, i) => (
              <article
                key={i}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer"
              >
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                      {blog.category}
                    </span>
                    <span className="text-xs text-gray-500">{blog.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <a href="#" className="text-orange-600 font-semibold hover:text-orange-700">
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <NewsletterSection />
      <Footer />
    </>
  )
}
