import Link from "next/link"

export const metadata = {
  title: "Industries | Systems Integration",
  description: "Industry expertise across healthcare, finance, manufacturing, aerospace, and more.",
  alternates: {
    canonical: "https://www.systemsintegration.co/industries",
  },
}

export default function IndustriesPage() {
  const industries = [
    { name: "Healthcare", slug: "healthcare" },
    { name: "Financial Services", slug: "fintech" },
    { name: "Manufacturing", slug: "manufacturing" },
    { name: "Oil & Gas", slug: "oil-gas" },
    { name: "Aerospace & Defense", slug: "aerospace" },
    { name: "Education", slug: "education" },
    { name: "Transportation", slug: "transport" },
    { name: "Real Estate", slug: "real-estate" },
  ]

  return (
    <main className="min-h-screen text-white relative overflow-hidden">
      {/* Background image from public folder */}
      <div className="absolute inset-0 -z-20">
        <div className="w-full h-full bg-cover bg-center bg-[url('/images/services-bg.jpg')]" />
      </div>

      {/* Dark overlay to improve contrast */}
      <div className="absolute inset-0 bg-transparent -z-10" />


      {/* Hero */}
      <section className="pt-32 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Industries We Serve</h1>
          <p className="text-lg sm:text-xl text-white mx-auto whitespace-nowrap sm:whitespace-normal">
            Deep expertise across key verticals with tailored solutions for every sector.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((industry) => (
              <Link key={industry.slug} href={`/industries/${industry.slug}`}>
                <div className="h-full p-8 rounded-lg border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm hover:border-orange-400 hover:bg-orange-500/20 transition cursor-pointer group">
                  <h3 className="text-xl font-bold text-white transition-all duration-300">
                    {industry.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


    </main>
  )
}
