// components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="text-white text-lg font-semibold mb-4">Legal</h4>
            <div className="flex flex-col space-y-2">
              <Link href="/terms" className="hover:text-white transition-colors duration-200">
                Terms and Conditions
              </Link>
              <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/license" className="hover:text-white transition-colors duration-200">
                License Agreement
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white text-lg font-semibold mb-4">Games & Tools</h4>
            <div className="flex flex-col space-y-2">
              <Link href="https://www.playsprunkiphase4.com" target="_blank" rel="noopener noreferrer" 
                className="hover:text-white transition-colors duration-200">
                Play Sprunki Phase 4
              </Link>
              <Link href="https://www.blockblastsolvers.org" target="_blank" rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200">
                Block Blast Solver
              </Link>
              <Link href="https://www.miside-online.org" target="_blank" rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200">
                Miside Online Game
              </Link>
              <Link href="https://www.mochi1preview.com/" target="_blank" rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200">
                Mochi 1 Preview
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white text-lg font-semibold mb-4">AI Services</h4>
            <div className="flex flex-col space-y-2">
              <Link href="https://c2story.com/" target="_blank" rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200">
                AI Generate Story
              </Link>
              <Link href="https://www.hailuoai.work" target="_blank" rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200">
                Hailuo AI Video
              </Link>
              <Link href="https://www.calories-calculator.cc" target="_blank" rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200">
                Panda Express Calories
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
            <div className="flex flex-col space-y-2">
              <Link href="/contact" className="hover:text-white transition-colors duration-200">
                Contact Us
              </Link>
              <Link href="/support" className="hover:text-white transition-colors duration-200">
                Support
              </Link>
              <Link href="/faq" className="hover:text-white transition-colors duration-200">
                FAQ
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p className="text-gray-400">
            {new Date().getFullYear()} Image Splitter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;