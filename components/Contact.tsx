export default function Contact() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">We had love to hear from you.</p>
        </div>

        <form className="space-y-6 bg-white p-8 rounded-xl shadow-sm">
          <div>
            <label htmlFor="name" className="block font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
              placeholder="Your name"
            />
            <p className="mt-1 text-sm text-red-500 hidden">Please enter your name</p>
          </div>

          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
              placeholder="your@email.com"
            />
            <p className="mt-1 text-sm text-red-500 hidden">Please enter a valid email</p>
          </div>

          <div>
            <label htmlFor="message" className="block font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition resize-none"
              placeholder="Tell us what's on your mind..."
            />
            <p className="mt-1 text-sm text-red-500 hidden">Please enter a message</p>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-black py-3 text-white font-semibold hover:bg-blue-900 cursor-pointer transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
