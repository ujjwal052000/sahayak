import Image from "next/image"
import { Globe, Target } from "lucide-react"

export function GlobalFocusSection() {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <div className="inline-block bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Volunteering for NGO
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Global Focus Enables
              <br />
              <span className="text-orange-600">Individual Potential</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              If you are still wondering, we would like to be judged by the work we do and not just the words we say.
            </p>

            {/* Two Column Content */}
            <div className="space-y-8">
              {/* Our Community */}
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Community</h3>
                  <p className="text-gray-600">
                    At Sahayak, we strive for meaningful change. Through volunteering, we aim to build a society that
                    empowers every individual to reshape the conversation with their voices and stories.
                  </p>
                </div>
              </div>

              {/* Our Impact */}
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Impact</h3>
                  <p className="text-gray-600">
                    We have engaged 90,000+ volunteers in various causes aligned to the sustainable development goals of
                    the UN.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition shadow-lg hover:shadow-xl inline-flex items-center gap-2">
              Donate For The Cause
              <span>↗</span>
            </button>
          </div>

          {/* Right - Image */}
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5u-EneCAg7dhDfPBqOwOikMRksEq20amD.png"
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
