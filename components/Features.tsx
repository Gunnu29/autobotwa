export default function Features() {
  return (
    <div className="mx-auto max-w-7xl px-10 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="rounded-xl border  border-gray-200 p-6 bg-white hover:scale-[1.02] hover:shadow-lg transition">
          <svg
            className="w-8 h-8 text-indigo-600 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <h3 className="font-semibold text-lg mb-2">Fast UI Generation</h3>
          <p className="text-gray-500 text-sm">
            Generate beautiful UI layouts instantly from plain text prompts using AI.
          </p>
        </div>

        <div className="rounded-xl border hover:scale-[1.02] border-gray-200 p-6 bg-white hover:shadow-lg transition">
          <svg
            className="w-8 h-8 text-indigo-600 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <h3 className="font-semibold text-lg mb-2">Instant Deployment</h3>
          <p className="text-gray-500 text-sm">Deploy your generated pages directly to Vercel with one click.</p>
        </div>

        <div className="rounded-xl border border-gray-200 p-6 bg-white hover:shadow-lg hover:scale-[1.02] transition">
          <svg
            className="w-8 h-8 text-indigo-600 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          <h3 className="font-semibold text-lg mb-2">Secure by Default</h3>
          <p className="text-gray-500 text-sm">
            All generated components follow best security and accessibility practices.
          </p>
        </div>
      </div>
    </div>
  )
}
