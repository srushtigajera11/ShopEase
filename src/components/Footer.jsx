const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-5">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-sky-400">ShopEase</h2>
          <p className="mt-3 text-sm leading-6">
            Your one-stop shop for quality products at unbeatable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-sky-400 cursor-pointer">Home</li>
            <li className="hover:text-sky-400 cursor-pointer">Shop</li>
            <li className="hover:text-sky-400 cursor-pointer">About Us</li>
            <li className="hover:text-sky-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Customer Service
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-sky-400 cursor-pointer">FAQ</li>
            <li className="hover:text-sky-400 cursor-pointer">Returns</li>
            <li className="hover:text-sky-400 cursor-pointer">Shipping</li>
            <li className="hover:text-sky-400 cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>
          <p className="text-sm">support@shopease.com</p>
          <p className="text-sm mt-2">+91 98765 43210</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-700 text-center py-4 text-sm bg-slate-950">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
