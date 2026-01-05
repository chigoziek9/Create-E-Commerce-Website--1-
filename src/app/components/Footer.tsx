import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full" style={{ background: 'linear-gradient(135deg, #7fc94e 0%, #f99212 100%)' }} />
              <span className="ml-3 text-xl font-bold">
                <span style={{ color: '#7fc94e' }}>Roots</span>
                <span style={{ color: '#80838c' }}>n</span>
                <span style={{ color: '#f99212' }}>Juices</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Fresh. Healthy. Natural. Your destination for premium juices, smoothies, and wholesome meals.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['home', 'about', 'products', 'contact'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => onNavigate(page)}
                    className="text-gray-400 hover:text-[#7fc94e] transition-colors capitalize"
                  >
                    {page === 'products' ? 'Menu' : page}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Juices</li>
              <li>Smoothies</li>
              <li>Parfaits</li>
              <li>Shawarma</li>
              <li>Salads</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400 text-sm">
                <Phone className="w-4 h-4 mr-2" style={{ color: '#7fc94e' }} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Mail className="w-4 h-4 mr-2" style={{ color: '#7fc94e' }} />
                <span>hello@rootsnjuices.com</span>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mr-2" style={{ color: '#7fc94e' }} />
                <span>123 Health St, Wellness City</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#7fc94e' }}
              >
                <Facebook className="w-4 h-4 text-white" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#f99212' }}
              >
                <Instagram className="w-4 h-4 text-white" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#7fc94e' }}
              >
                <Twitter className="w-4 h-4 text-white" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm"
        >
          <p>&copy; {new Date().getFullYear()} RootsnJuices. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}