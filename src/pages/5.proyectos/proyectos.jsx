import React from 'react'

export default function proyectos() {
  return (
    <>
    <div className="grid md:grid-cols-2 items-center py-6 md:gap-8 gap-6 font-[sans-serif] text-[#333] max-w-5xl max-md:max-w-md mx-auto">
      <div className="max-md:order-1 max-md:text-center">
        <h2 className="md:text-4xl text-3xl md:leading-10 font-extrabold text-[#333] mb-4">Savor Every Bite</h2>
        <p className="mt-4 text-base text-[#666] leading-relaxed">Embark on a gastronomic journey with our curated dishes, delivered promptly to your doorstep. Elevate your dining experience today.</p>
        <div className="mt-8 flex max-sm:flex-col sm:space-x-4 max-sm:space-y-6">
          <a href="javascript:void(0);" className="px-6 py-3 text-base font-semibold text-white bg-[#f032e6] rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#f032e6] focus:outline-none focus:ring-opacity-50">Explore Our Menu</a>
          <a href="javascript:void(0);" className="px-6 py-3 text-base font-semibold text-[#f032e6] border border-[#f032e6] rounded-full hover:text-white hover:bg-[#f032e6] transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#f032e6] focus:outline-none focus:ring-opacity-50">Order Now</a>
        </div>
      </div>
      <div className="md:h-[450px]">
        <img src="https://readymadeui.com/hotel-img.webp" className="w-full h-full object-cover rounded-lg shadow-xl" alt="Dining Experience" />
      </div>
    </div>

    {/* INICIO DE GRID */}
    <div className="bg-gray-100 md:px-10 px-4 py-12 font-[sans-serif]">
      <div className="max-md:max-w-lg mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-b from-indigo-800 to-indigo-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img src="https://readymadeui.com/cardImg.webp" alt="Blog Post 1" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Lorem Ipsum Dolor</h3>
              <p className="text-sm opacity-75">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...</p>
              <a href="javascript:void(0);" className="mt-4 inline-block text-blue-200 text-sm hover:underline">Read More</a>
            </div>
          </div>
          <div className="bg-gradient-to-b from-purple-800 to-purple-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img src="https://readymadeui.com/hotel-img.webp" alt="Blog Post 2" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Consectetur Adipiscing</h3>
              <p className="text-sm opacity-75">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...</p>
              <a href="javascript:void(0);" className="mt-4 inline-block text-pink-200 text-sm hover:underline">Read More</a>
            </div>
          </div>
          <div className="bg-gradient-to-b from-teal-800 to-teal-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img src="https://readymadeui.com/team-image.webp" alt="Blog Post 3" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Lorem Ipsum Sit Amet</h3>
              <p className="text-sm opacity-75">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...</p>
              <a href="javascript:void(0);" className="mt-4 inline-block text-green-200 text-sm hover:underline">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
