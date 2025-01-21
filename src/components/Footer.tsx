import { Facebook, Instagram, Youtube, Mail, MessageCircle } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="px-4 py-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info Column */}
        <div className="space-y-4">
          <nav className="space-y-3">
            <h3 className="text-sm font-medium uppercase mb-4">About Us</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:underline">CAREERS</a></li>
              <li><a href="#" className="text-sm hover:underline">FAQs</a></li>
              <li><a href="#" className="text-sm hover:underline">RETURNS / EXCHANGES</a></li>
              <li><a href="#" className="text-sm hover:underline">CONTACT US</a></li>
              <li><a href="#" className="text-sm hover:underline">PRIVACY POLICY</a></li>
            </ul>
          </nav>
          <div className="space-y-3">
            <p className="text-sm uppercase">Shop faster with the app</p>
            <div className="flex flex-col gap-2">
              <a href="#" className="w-32">
                <img src="/placeholder.svg?height=40&width=120" alt="Get it on Google Play" className="h-10" />
              </a>
              <a href="#" className="w-32">
                <img src="/placeholder.svg?height=40&width=120" alt="Download on App Store" className="h-10" />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Column */}
        <div className="space-y-4">
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase">Sign up and save</h3>
            <p className="text-sm">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <form className="flex gap-2">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-300 text-sm"
                  required
                />
              </div>
              <button type="submit" className="border border-gray-900 p-2">
                <span className="sr-only">Submit</span>
                →
              </button>
            </form>
          </div>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-gray-900">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-gray-900">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="YouTube" className="text-gray-600 hover:text-gray-900">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Store Locations Column */}
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium uppercase mb-4">Store Location</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium">LAHORE</h4>
                <p className="text-sm">FLAGSHIP STORE</p>
                <p className="text-sm">22-A, Block P, Gulberg-II Lahore, Pakistan</p>
              </div>
              <div>
                <h4 className="text-sm font-medium">EMPORIUM MALL</h4>
                <p className="text-sm">101, Level-3</p>
              </div>
              <div>
                <h4 className="text-sm font-medium">ISLAMABAD</h4>
                <p className="text-sm">Sumbul 96, F-10 Markaz F10/4 Islamabad</p>
              </div>
              <div>
                <h4 className="text-sm font-medium">KARACHI</h4>
                <p className="text-sm">LAMA at the mezzanine - Allure Beauty, Dolmen Mall Clifton</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium uppercase mb-2">Customer Service</h3>
            <div className="flex items-center gap-2">
              <a href="mailto:email@example.com" className="text-sm hover:underline inline-flex items-center gap-1">
                <Mail className="w-4 h-4" />
                Email
              </a>
              <span className="text-sm">|</span>
              <a href="https://wa.me/1234567890" className="text-sm hover:underline inline-flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                Whatsapp
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center text-sm">
        <p>© 2024 Lama Retail</p>
      </div>
    </footer>
  )
}
export default Footer;

