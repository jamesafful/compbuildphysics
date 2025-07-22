const people = [
  {
    name: "James Afful",
    role: "Founder & Principal Investigator",
    location: "Ames, Iowa, USA",
    email: "jamezafful@gmail.com",
    scholar: "https://scholar.google.com/citations?user=y0fEtGwAAAAJ&hl=en&oi=sra",
    linkedin: "https://linkedin.com/in/james-afful-745247179",
    bio: `James Afful is a Ph.D. candidate in Mechanical Engineering at Iowa State University with a research focus on computational fluid dynamics (CFD), high-performance computing (HPC), and machine learning for sustainable building technologies. He has conducted simulations for national security, indoor air quality, and smart city energy systems. James also holds an MBA and has interned at Lawrence Livermore National Lab.`,
  },
  // Add more members here as needed
];

export default function PeoplePage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Our Team</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {people.map((person, index) => (
          <div key={index} className="border rounded-xl p-6 shadow-sm bg-white">
            <div className="flex gap-4">
              <img
                src={person.image}
                alt={person.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <h2 className="text-xl font-semibold">{person.name}</h2>
                <p className="text-gray-700">{person.role}</p>
                <p className="text-sm text-gray-500">{person.location}</p>
                <p className="text-sm text-gray-500">{person.email}</p>
                <div className="mt-2 flex gap-4 text-blue-600 text-sm">
                  <a href={person.linkedin} target="_blank">LinkedIn</a>
                  <a href={person.scholar} target="_blank">Google Scholar</a>
                </div>
              </div>
            </div>
            <p className="mt-4 text-gray-700 text-sm">{person.bio}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

