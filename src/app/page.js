export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-800 text-white py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Institute for Computational Building Physics
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Bridging simulation, sustainability, and science to reimagine the built environment.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Welcome</h2>
          <p className="text-gray-600 text-lg mb-10">
            At ICBP, we lead computational research in fluid dynamics, energy modeling,
            and digital twins for sustainable buildings and resilient infrastructure.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <a
              href="/about"
              className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary-dark transition"
            >
              Learn More
            </a>
            <a
              href="/projects"
              className="inline-block border border-primary text-primary px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
