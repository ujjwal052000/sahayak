import Image from "next/image"

export function FellowshipSection() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
              Fellowship Program
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Turn Education Into
              <br />
              <span className="text-orange-600">Empowerment</span>
            </h2>

            <p className="text-2xl font-bold text-gray-900 mb-8">
              Become a Sahayak Fellow of
              <br />
              2025 Cohort
            </p>

            <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition shadow-lg hover:shadow-xl">
              Learn More
            </button>
          </div>

          {/* Right - Image */}
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4u-4NeWvzQ15xAgY46kly9V8dPVIWtSxj.png"
              alt="Fellowship 2025 Cohort"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
