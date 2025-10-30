import Image from "next/image"
import { Users, Clock, Heart } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      number: "2,05,901+",
      label: "Volunteers Engaged",
    },
    {
      icon: Clock,
      number: "18+",
      label: "Years of Voluntary Service",
    },
    {
      icon: Heart,
      number: "1,53,616+",
      label: "Children and Youth Impacted",
    },
  ]

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6 shadow-md">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-5xl font-bold text-gray-900 mb-3">{stat.number}</h3>
                <p className="text-gray-600 text-lg">{stat.label}</p>
              </div>
            )
          })}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-16"></div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Our Mission
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              We are Driven by
              <br />
              <span className="text-orange-600">Volunteering & Transformation</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              At Sahayak, our unwavering optimism fuels our pursuit of meaningful change. Through the power of
              volunteering, we are building a society where every individual can reshape the conversation with their
              voices and stories, creating a brighter future for all.
            </p>
          </div>

          {/* Right Content - Image */}
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1u-o7YGxLQ6F7Uu3bw0dMFaXvTZrXJM1G.png"
              alt="Community Impact"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
