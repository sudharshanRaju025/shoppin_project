function Footer(){

    return (

        <div>
             
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Company</h3>
            <p className="text-gray-400">
              We provide the best services to help you grow your business and succeed in today's competitive market.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-blue-500">
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-blue-500">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-pink-500">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-700">
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul>
              <li><a href="#home" className="text-gray-400 hover:text-blue-500">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-blue-500">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-500">Services</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-blue-500">Pricing</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-500">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Info</h3>
            <ul>
              <li className="text-gray-400">1234 Street Name, City, Country</li>
              <li className="text-gray-400">+1 (123) 456-7890</li>
              <li className="text-gray-400">info@company.com</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Newsletter</h3>
            <p className="text-gray-400">
              Sign up for our newsletter and get the latest updates delivered to your inbox.
            </p>
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 w-full rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>

          {/* Legal Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Legal</h3>
            <ul>
              <li><a href="#privacy" className="text-gray-400 hover:text-blue-500">Privacy Policy</a></li>
              <li><a href="#terms" className="text-gray-400 hover:text-blue-500">Terms of Service</a></li>
              <li><a href="#cookie" className="text-gray-400 hover:text-blue-500">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
        </div>
    )
}
export default Footer;