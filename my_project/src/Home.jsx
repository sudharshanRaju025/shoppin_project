function Home(){

    return (
             
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-24 sm:py-32">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1500')" }}></div>
        <div className="relative container mx-auto px-6 sm:px-12 z-10">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">Welcome to Our Amazing Platform</h1>
          <p className="text-lg sm:text-xl mb-8">We provide the best services to help you grow your business, connect with customers, and achieve your goals.</p>
          <a
            href="#signup"
            className="inline-block bg-yellow-500 text-gray-900 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-6 sm:px-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg shadow-lg">
              <i className="fas fa-cogs text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-2xl font-semibold mb-2">Customizable</h3>
              <p className="text-gray-600">Easily adapt the platform to fit your needs with custom configurations and settings.</p>
            </div>
            <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg shadow-lg">
              <i className="fas fa-chart-line text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-2xl font-semibold mb-2">Analytics</h3>
              <p className="text-gray-600">Get real-time insights and track your progress with built-in analytics tools.</p>
            </div>
            <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg shadow-lg">
              <i className="fas fa-lock text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-2xl font-semibold mb-2">Security</h3>
              <p className="text-gray-600">Keep your data secure with top-notch encryption and security features.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 sm:py-24 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-6 sm:px-12">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Ready to Take the Next Step?</h2>
          <p className="text-lg sm:text-xl mb-8">Join thousands of happy users and take advantage of our powerful features.</p>
          <a
            href="#signup"
            className="inline-block bg-yellow-500 text-gray-900 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition duration-300"
          >
            Sign Up Now
          </a>
        </div>
      </section>
    </div>

        
    )
}
export default Home;