import Image from "next/image"

export function ProgramShowcase() {
  return (
    <section className="bg-gradient-to-r from-orange-50 to-yellow-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative h-96 lg:h-full min-h-96 rounded-2xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3u-nQ6phJYCUoHOfrKpaSX81bSlIODuZp.png"
              alt="Empowering Dreams - Scholarship Program"
              fill
              className="object-cover"
            />
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Empowering
              <br />
              <span className="text-orange-600">Dreams</span>
            </h2>

            <p className="text-xl text-gray-700 font-semibold mb-6">With Sahayak | Bring smiles Scholarship</p>

            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Transforming Lives
              <br />
              Through Education
            </h3>

            <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-semibold transition">
              Know more
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
