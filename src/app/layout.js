import './globals.css';

export const metadata = {
  title: 'Institute for Computational Building Physics',
  description: 'Research in building physics and computational mechanics.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <header className="bg-gray-900 text-white px-4 py-4">
          <nav className="max-w-3xl mx-auto flex gap-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/people" className="hover:underline">People</a>
            <a href="/projects" className="hover:underline">Projects</a>
            <a href="/publications" className="hover:underline">Publications</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-100 text-center py-4 mt-12">
          © 2025 Institute for Computational Building Physics
        </footer>
      </body>
    </html>
  );
}

