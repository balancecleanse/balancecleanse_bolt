import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Balance Cleanse</h3>
            <p className="text-gray-600">Natural wellness products for a balanced lifestyle.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/shop" className="text-gray-600 hover:text-primary">Shop</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-primary">About</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-primary">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link href="/shipping" className="text-gray-600 hover:text-primary">Shipping</Link></li>
              <li><Link href="/returns" className="text-gray-600 hover:text-primary">Returns</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-primary">FAQ</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4">
              <h5 className="font-semibold mb-2">Newsletter</h5>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 border rounded-md"
                />
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Balance Cleanse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;