import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="mb-2">25 Winnington Rd, Birmingham B8 2QH, United Kingdom</p>
            <p className="mb-2">Charity No: 1209628</p>
            <p className="mb-2">
              Phone: <a href="tel:+447460633654" className="hover:text-green-400 underline">+44 7460 633654</a>
            </p>
            <p>
              Email: <a href="mailto:info@alqudrat.org.uk" className="hover:text-green-400 underline">info@alqudrat.org.uk</a>
            </p>
          </div>
          <div className="flex justify-center space-x-6 text-2xl">
            <a 
              href="https://www.facebook.com/alqudratfoundation/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
              className="hover:text-green-400 transition-colors"
            >
              <FaFacebook />
            </a>
            <a 
              href="https://www.youtube.com/@AlQudratFoundation" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="YouTube"
              className="hover:text-green-400 transition-colors"
            >
              <FaYoutube />
            </a>
            <a 
              href="https://www.instagram.com/alqudratfoundation.uk/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              className="hover:text-green-400 transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Al Qudrat Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
