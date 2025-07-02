export default function Footer() {
  return (
    <footer className="bg-gray-600 text-gray-300 py-10 ">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Hostel Ease Info */}
        <div>
          <h2 className="text-lg font-semibold">Travel Journal</h2>
          <p className="text-sm text-gray-300 mt-2">
            The ultimate platform for creating wonderful Travel Journals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="text-sm text-gray-300 hover:text-gray-500">About Us</a></li>
            <li><a href="#" className="text-sm text-gray-300 hover:text-gray-500">Destinations</a></li>
            <li><a href="#" className="text-sm text-gray-300 hover:text-gray-500">Pricing</a></li>
            <li><a href="#" className="text-sm text-gray-300 hover:text-gray-500">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-lg font-semibold">Resources</h2>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="text-sm text-gray-300 hover:text-gray-500">Travel Guide</a></li>
            <li><a href="#" className="text-sm text-gray-300 hover:text-gray-500">FAQs</a></li>
            <li><a href="#" className="text-sm text-gray-300 hover:text-gray-500">Blog</a></li>
            <li><a href="#" className="text-sm text-gray-300 hover:text-gray-500">Support</a></li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div>
          <h2 className="text-lg font-semibold">Connect With Us</h2>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="text-gray-300 hover:text-gray-300">
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-gray-300">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-gray-300">
              <i className="fab fa-twitter text-xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-300 mt-8">
        © 2025 Travel Journal. All rights reserved.
      </div>
    </footer>
  );
}