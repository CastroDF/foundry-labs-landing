import { GradientText } from './GradientText'

export function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-gray-100 py-24 px-6 relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left">
          <h2 className="text-4xl mb-4 inline-block text-balance">
            <GradientText className="font-serif italic">Ready to build?</GradientText>
          </h2>
          <p className="text-gray-500 mb-8">Limited availability for Q1 2026.</p>
          <a
            href="mailto:contact@foundry.ar"
            className="inline-block bg-black text-white px-8 py-3 text-lg rounded-full font-medium transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2"
          >
            Start Project
          </a>
        </div>

        <div className="flex gap-12 text-sm text-gray-500">
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-black mb-2">Studio</span>
            <a href="#about" className="hover:text-purple-600 focus-visible:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 rounded-sm">About</a>
            <a href="#manifesto" className="hover:text-purple-600 focus-visible:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 rounded-sm">Manifesto</a>
            <a href="#contact" className="hover:text-purple-600 focus-visible:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 rounded-sm">Contact</a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-black mb-2">Connect</span>
            <a href="#twitter" className="hover:text-purple-600 focus-visible:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 rounded-sm">Twitter</a>
            <a href="#linkedin" className="hover:text-purple-600 focus-visible:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 rounded-sm">LinkedIn</a>
            <a href="#email" className="hover:text-purple-600 focus-visible:text-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 rounded-sm">Email</a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400">
        <span>&copy; Foundry Labs 2026</span>
        <span>Crafted in Argentina</span>
      </div>
    </footer>
  )
}
