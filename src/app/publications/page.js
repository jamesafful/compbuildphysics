const publications = {
  published: [
    {
      title:
        "Evaluating Neural Radiance Fields for 3D Plant Geometry Reconstruction in Field Conditions",
      authors: "M. A. Arshad, T. Z. Jubery, J. Afful, et al.",
      journal: "Plant Phenomics, Vol. 6, Article 0235",
      year: 2024,
      link: "https://spj.science.org/doi/full/10.34133/plantphenomics.0235",
    },
    {
      title:
        "Plant Geometry Reconstruction from Field Data using Neural Radiance Fields",
      authors: "A. Jignasu, E. Herron, T. Z. Jubery, J. Afful, et al.",
      journal: "2nd AAAI Workshop on AI for Agriculture and Food Systems",
      year: 2023,
      link: "https://openreview.net/pdf?id=TvKKqWn_-6",
    },
  ],
  inProgress: [
    {
      title:
        "A Building Energy Simulation Algorithm to Quantify Evapo-transpirative Cooling",
      authors: "J. Afful, et al.",
      status: "In development",
    },
    {
      title:
        "High-Fidelity Computational Fluid Dynamics Simulations for Evaluating Indoor Air Quality in K-12 Classrooms",
      authors: "J. Afful, et al.",
      status: "In review",
    },
    {
      title:
        "A Review of HPC-Accelerated CFD in National Security and Defense",
      authors: "J. Afful",
      status: "Preprint drafting",
    },
  ],
};

export default function PublicationsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Publications</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Peer-Reviewed</h2>
        <ul className="space-y-6">
          {publications.published.map((pub, i) => (
            <li key={i}>
              <p className="font-semibold">{pub.title}</p>
              <p className="text-sm text-gray-700">{pub.authors}</p>
              <p className="text-sm italic text-gray-600">
                {pub.journal} ({pub.year})
              </p>
              <a
                href={pub.link}
                className="text-blue-600 text-sm underline"
                target="_blank"
              >
                View publication
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">In Progress</h2>
        <ul className="space-y-4">
          {publications.inProgress.map((pub, i) => (
            <li key={i}>
              <p className="font-semibold">{pub.title}</p>
              <p className="text-sm text-gray-700">{pub.authors}</p>
              <p className="text-sm italic text-gray-600">{pub.status}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

