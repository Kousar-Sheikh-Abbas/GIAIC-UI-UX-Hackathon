import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"; // For social media icons
import { Clock, MapPin } from "lucide-react"; // For icons like opening timings

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      {/* Main Footer Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1: About Us */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">About Us</h3>
          <p className="text-lg mb-4">
            We are a top-tier restaurant offering delightful meals and services. Discover
            the best dining experience with us.
          </p>
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-white" />
            <span className="text-lg">Opening Hours: 9:00 AM - 9:00 PM</span>
          </div>
        </div>

        {/* Column 2: Useful Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">News</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Partners</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Team</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Menu</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Contact</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Help? */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Help?</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">FAQ</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Terms and Conditions</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Reporting</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Documentation</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Support Policy</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Privacy</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Recent Posts */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Recent Posts</h3>
          <ul className="space-y-4">
            <li>
              <p className="text-sm text-gray-400">January 10, 2024</p>
              <p className="text-lg">Discover our new seasonal menu items!</p>
            </li>
            <li>
              <p className="text-sm text-gray-400">February 15, 2024</p>
              <p className="text-lg">Exciting new partnerships for 2024!</p>
            </li>
            <li>
              <p className="text-sm text-gray-400">March 5, 2024</p>
              <p className="text-lg">Join us for an exclusive cooking class.</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-orange-500 text-white py-4 flex justify-between items-center px-6">
        {/* Left: Copyright Notice */}
        <div className="text-sm">
          <p>&copy; 2024 Kousar Restaurant. All rights reserved.</p>
        </div>

        {/* Right: Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <Youtube size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
