export default function Testimonials() {
  const testimonials = [
    {
      name: "Aarav Mehta",
      role: "Product Designer",
      text: "AutoBotWa helped me generate landing pages in minutes. The workflow is incredibly smooth.",
      avatar: "AM",
    },
    {
      name: "Sara Kapoor",
      role: "Frontend Developer",
      text: "The AI-generated UI components saved hours of manual work. Highly recommended.",
      avatar: "SK",
    },
    {
      name: "Rohan Singh",
      role: "Startup Founder",
      text: "A fantastic tool for quick prototypes and instant deployment to Vercel.",
      avatar: "RS",
    },
  ]

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-gray-900 mb-3">What Our Users Say</h2>
        <p className="text-gray-600">Trusted by designers, developers, and founders worldwide.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
                {testimonial.avatar}
              </div>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </div>

            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-gray-600 leading-relaxed">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
