import { ShoppingCart,Search} from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-sky-400 cursor-pointer">
          ShopEase
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <div className="hover:text-sky-400 transition">
          <Link to={"/"}> Categories</Link>
          </div>
            <div className="hover:text-sky-400 transition">
              <Link to={"/allProducts"}>Products</Link>
          </div>

          <button className="relative hover:text-sky-400 transition">
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-sky-500 text-white text-xs rounded-full px-1.5">
              2
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-6 pb-4">
        <div className="flex items-center bg-slate-800 rounded-lg px-3 py-2">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none px-2 text-sm w-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
