import { Facebook, Instagram, Youtube, Mail, MessageCircle } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="px-4 py-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <nav className="space-y-3">
            <h3 className="text-sm font-medium uppercase mb-4">Sobre Nós</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:underline">CARREIRA</a></li>
              <li><a href="#" className="text-sm hover:underline">FAQs</a></li>
              <li><a href="#" className="text-sm hover:underline">CONTATO</a></li>
              <li><a href="#" className="text-sm hover:underline">POLÍTICA DE PRIVACIDADE</a></li>
            </ul>
          </nav>
        </div>

        <div className="space-y-4">
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase">Registre-se e economize</h3>
            <p className="text-sm">Inscreva-se para receber ofertas especiais, brindes gratuitos e ofertas únicas</p>
            <form className="flex gap-2">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Coloque seu email"
                  className="w-full px-3 py-2 border border-gray-300 text-sm"
                  required
                />
              </div>
              <button type="submit" className="border border-gray-900 p-1">
                <span className="sr-only">Enviar</span>
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

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium uppercase mb-4">Localização da loja</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm">101 Bloco V, UTFPR, Fraron - PB</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium uppercase mb-2">Serviço</h3>
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

