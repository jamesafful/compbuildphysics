export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4 text-center shadow-md">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight tracking-tight">
            Institute for Computational Building Physics
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-blue-100">
            Bridging high-performance computing, simulation, and the future of sustainable buildings.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome</h2>
          <p className="text-gray-700 text-lg mb-6">
            At ICBP, we blend computational mechanics, fluid dynamics, and digital modeling to reimagine how buildings perform—
            from classroom air quality to city-scale sustainability. Our team leads cutting-edge research at the intersection of
            engineering, data, and the built environment.
          </p>
          <div className="mt-8 flex justify-center gap-6 flex-wrap">
            <a href="/about" className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 font-medium">
              Learn More
            </a>
            <a href="/projects" className="border border-blue-700 text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-50 font-medium">
              View Projects
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

