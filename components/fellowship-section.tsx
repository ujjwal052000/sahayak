import Image from "next/image"

export function FellowshipSection() {
  return (
    <section className="bg-gradient-to-r from-orange-50 to-green-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <div className="relative">
              {/* Decorative waves */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-orange-400 rounded-full opacity-10"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-400 rounded-full opacity-10"></div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 relative z-10">
                Turn Education Into
                <br />
                <span className="text-orange-600">Empowerment</span>
              </h2>

              <p className="text-2xl font-bold text-green-600 mb-8 relative z-10">
                Become a Sahayak Fellow of
                <br />
                2025 Cohort
              </p>

              <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-semibold transition relative z-10">
                Know more
              </button>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative h-96 lg:h-full min-h-96 rounded-2xl overflow-hidden">
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
