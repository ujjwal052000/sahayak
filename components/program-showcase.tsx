import Image from "next/image"

export function ProgramShowcase() {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3u-nQ6phJYCUoHOfrKpaSX81bSlIODuZp.png"
              alt="Empowering Dreams - Scholarship Program"
              fill
              className="object-cover"
            />
          </div>

          {/* Right - Content */}
          <div>
            <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
              Our Programs
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Empowering
              <br />
              <span className="text-orange-600">Dreams</span>
            </h2>

            <p className="text-lg text-gray-700 mb-8">With Sahayak | Bring smiles Scholarship</p>

            <h3 className="text-2xl font-bold text-gray-900 mb-10">
              Transforming Lives Through Education
            </h3>

            <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition shadow-lg hover:shadow-xl">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
