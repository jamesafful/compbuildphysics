export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Institute for Computational Building Physics</h1>
      <p className="mb-6">
        Welcome to ICBP — a research group focused on simulation, computational mechanics,
        and building physics for a sustainable built environment.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><a href="/about" className="text-blue-600 underline">About</a></li>
        <li><a href="/people" className="text-blue-600 underline">People</a></li>
        <li><a href="/projects" className="text-blue-600 underline">Projects</a></li>
        <li><a href="/publications" className="text-blue-600 underline">Publications</a></li>
        <li><a href="/contact" className="text-blue-600 underline">Contact</a></li>
      </ul>
    </main>
  );
}

