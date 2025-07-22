export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>

      <p className="mb-4">
        The <strong>Institute for Computational Building Physics (ICBP)</strong> is an interdisciplinary
        research group focused on advancing the science of the built environment through high-fidelity modeling,
        computational mechanics, and building-scale physics.
      </p>

      <p className="mb-4">
        Our work spans thermal-fluid simulation, energy modeling, structural analysis, and
        optimization techniques that inform the design of next-generation sustainable buildings.
        We develop computational tools, conduct applied research, and collaborate with architects,
        engineers, and climate scientists.
      </p>

      <p className="mb-4">
        The ICBP is committed to open science, academic rigor, and producing impactful
        insights that bridge the gap between digital modeling and real-world performance.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Research Areas</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Thermal modeling and HVAC system simulation</li>
        <li>Computational mechanics for building materials and structures</li>
        <li>Multi-physics simulation of indoor environments</li>
        <li>Energy optimization and parametric design workflows</li>
        <li>Digital twin frameworks and model validation</li>
      </ul>
    </main>
  );
}

