import Link from "next/link"

export function VolunteerGallery() {
  const activities = [
    { emoji: "🌱", title: "Environment" },
    { emoji: "📚", title: "Education" },
    { emoji: "🌍", title: "Sustainability" },
    { emoji: "🤝", title: "Community" },
    { emoji: "💡", title: "Innovation" },
  ]

  return (
    <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Volunteer to Transform India</h2>

          <Link href="/volunteer">
            <button className="bg-orange-500 text-white hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold transition shadow-lg hover:shadow-xl">
              Volunteer Now
            </button>
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="aspect-square bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center hover:bg-gray-700 hover:border-orange-500 transition cursor-pointer"
            >
              <div className="text-center">
                <div className="text-5xl mb-3">{activity.emoji}</div>
                <p className="text-white text-sm font-semibold">{activity.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
