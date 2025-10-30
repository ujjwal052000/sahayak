export function PartnersSection() {
  const partners = [
    { name: "CGI", logo: "🏢" },
    { name: "Qualcomm Agriti", logo: "📱" },
    { name: "Cognizant Foundation", logo: "🔷" },
    { name: "DXC Technology", logo: "💻" },
  ]

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Working With The <span className="text-orange-600">Best Partners</span>
          </h2>
          <p className="text-gray-600 text-lg">Volunteer. Lead. Inspire</p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-8 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
            >
              <div className="text-center">
                <div className="text-5xl mb-3">{partner.logo}</div>
                <p className="text-gray-700 font-semibold text-sm">{partner.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-16"></div>
      </div>
    </section>
  )
}
