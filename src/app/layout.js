import './globals.css';

export const metadata = {
  title: 'Institute for Computational Building Physics',
  description: 'Research in building physics and computational mechanics.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 text-gray-900">
        {/* Header Navigation */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-bold text-primary">ICBP</div>
            <nav className="space-x-6 text-sm font-medium text-gray-700">
              <a href="/" className="hover:text-primary transition">Home</a>
              <a href="/about" className="hover:text-primary transition">About</a>
              <a href="/people" className="hover:text-primary transition">People</a>
              <a href="/projects" className="hover:text-primary transition">Projects</a>
              <a href="/publications" className="hover:text-primary transition">Publications</a>
              <a href="/contact" className="hover:text-primary transition">Contact</a>
            </nav>
          </div>
        </header>

        {/* Main */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-100 border-t mt-12 py-6 text-center text-sm text-gray-500">
          © 2025 Institute for Computational Building Physics. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
