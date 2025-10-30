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
    <section className="bg-green-600 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Volunteer to Transform India</h2>

          <Link href="/volunteer">
            <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition">
              Volunteer Now
            </button>
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="aspect-square bg-gradient-to-br from-green-400 to-green-700 rounded-lg flex items-center justify-center hover:shadow-lg transition cursor-pointer"
            >
              <div className="text-center">
                <div className="text-5xl mb-2">{activity.emoji}</div>
                <p className="text-white text-sm font-semibold">{activity.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
