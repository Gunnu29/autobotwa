import { Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 py-12 px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">AutoBotWa</h2>
            <p className="text-sm text-gray-600 max-w-xs ">
              Build beautiful landing pages in minutes with AI-powered tools and deploy instantly to Vercel.
            </p>
          </div>

          <nav className="space-y-3">
            <h3 className="text-sm font-bold text-center text-gray-900 mb-4">Navigation</h3>
            <ul className="space-y-3 flex gap-5 justify-center">
              <li>
                <a href="#home" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">
                  Features
                </a>
              </li>
             
              <li>
                <a href="#contact" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-center text-gray-900">Follow Us</h3>
            <div className="flex gap-3 place-content-center">
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">© 2025 AutoBotWa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
