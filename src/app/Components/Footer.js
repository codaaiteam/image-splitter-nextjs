// components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-sm mb-6">
          <Link href="/terms" className="hover:text-white transition-colors duration-200">
            Terms and Conditions
          </Link>
          <span className="text-gray-600">·</span>
          <Link href="/privacy" className="hover:text-white transition-colors duration-200">
            Privacy Policy
          </Link>
          <span className="text-gray-600">·</span>
          <Link href="/license" className="hover:text-white transition-colors duration-200">
            License Agreement
          </Link>
          <span className="text-gray-600">·</span>
          <Link href="https://www.playsprunkiphase4.com" target="_blank" rel="noopener noreferrer" 
            className="hover:text-white transition-colors duration-200">
            Play Sprunki Phase 4
          </Link>
          <span className="text-gray-600">·</span>
          <Link href="https://www.blockblastsolvers.org" target="_blank" rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200">
            Block Blast Solver
          </Link>
          <span className="text-gray-600">·</span>
          <Link href="https://www.miside-online.org" target="_blank" rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200">
            Miside Online Game
          </Link>
          <span className="text-gray-600">·</span>
          <Link href="https://www.mochi1preview.com/" target="_blank" rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200">
            Mochi 1 Preview
          </Link>
          <span className="text-gray-600">·</span>
          <Link href="https://c2story.com/" target="_blank" rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200">
            AI Generate Story
          </Link>
          <span className="text-gray-600">·</span>
          <Link href="https://www.hailuoai.work" target="_blank" rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200">
            Hailuo AI Video
          </Link>
          <span className="text-gray-600">·</span>
          <Link href="https://www.calories-calculator.cc" target="_blank" rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200">
            Panda Express Calories
          </Link>
          <span className="text-gray-600">·</span>
          <Link href="/contact" className="hover:text-white transition-colors duration-200">
            Contact Us
          </Link>
          <span className="text-gray-600">·</span>
          <Link href="/support" className="hover:text-white transition-colors duration-200">
            Support
          </Link>
          <span className="text-gray-600">·</span>
          <Link href="/faq" className="hover:text-white transition-colors duration-200">
            FAQ
          </Link>
        </div>

        <div className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Image Splitter. All rights reserved.
        </div>
      </div>
        <span>·</span>
        <a href="https://www.4oimagegeneration.net" target="_blank" rel="noopener noreferrer">
        Gpt 4o Image Generation
        </a>
        <span>·</span>
        <a href="https://www.4oimagegeneration.net" target="_blank" rel="noopener noreferrer">
        Gpt 4o Image Generation
        </a>

    </footer>
  );
};

export default Footer;