export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg md:text-2xl mb-8">Discover amazing content and connect with us.</p>
        <a href="#features" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">Get Started</a>
      </div>
    </section>
  );
}