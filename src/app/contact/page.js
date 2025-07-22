export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <p className="mb-6 text-gray-700">
        We welcome inquiries about research collaborations, speaking engagements, or joining our team.
        Please use the form below or reach out directly.
      </p>

      <div className="grid gap-6 mb-12">
        <div>
          <h2 className="text-xl font-semibold">General Contact</h2>
          <p className="text-gray-700">James Afful</p>
          <p className="text-gray-700">Email: <a href="mailto:jamezafful@gmail.com" className="text-blue-600 underline">jamezafful@gmail.com</a></p>
          <p className="text-gray-700">Location: Ames, Iowa, USA</p>
        </div>

        <div className="flex gap-4 text-blue-600">
          <a href="https://linkedin.com/in/james-afful-745247179" target="_blank" className="underline">LinkedIn</a>
          <a href="https://scholar.google.com/citations?user=y0fEtGwAAAAJ&hl=en&oi=sra" target="_blank" className="underline">Google Scholar</a>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-2">Contact Form</h2>
      <form
        action="https://formspree.io/f/meozakkw" // replace with your Formspree or Netlify endpoint
        method="POST"
        className="space-y-6"
      >
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-medium">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full border rounded px-3 py-2"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}

