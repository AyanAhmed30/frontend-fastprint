import React, { useState } from 'react'
import portfolioImg from "../assets/images/img75.png"
import Header from '../components/Header'
import Footer from '../components/Footer'

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  // Portfolio categories and items
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'books', name: 'Books & Covers' },
    { id: 'banners', name: 'Banners & Signs' },
    { id: 'flyers', name: 'Flyers & Marketing' },
    { id: 'business', name: 'Business Materials' },
    { id: 'packaging', name: 'Packaging & Labels' }
  ]

  const portfolioItems = [
    {
      id: 1,
      category: 'books',
      title: 'Novel Book Cover Design',
      description: 'Custom book cover with premium matte finish',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&crop=center',
      size: '6x9 inches',
      material: 'Premium Matte Cover'
    },
    {
      id: 2,
      category: 'books',
      title: 'Academic Textbook',
      description: 'Perfect bound textbook with glossy cover',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop&crop=center',
      size: '8.5x11 inches',
      material: 'Perfect Binding'
    },
    {
      id: 3,
      category: 'books',
      title: 'Children\'s Book',
      description: 'Colorful children\'s book with saddle stitching',
      image: 'https://i.pinimg.com/originals/62/0b/33/620b3334c1eed3de8b751a812506360e.jpg',
      size: '8x10 inches',
      material: 'Saddle Stitched'
    },
    {
      id: 4,
      category: 'books',
      title: 'Business Manual',
      description: 'Professional training manual with spiral binding',
      image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=300&fit=crop&crop=center',
      size: '8.5x11 inches',
      material: 'Spiral Bound'
    },
    {
      id: 5,
      category: 'books',
      title: 'Photography Portfolio Book',
      description: 'High-quality photo book with premium paper',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop&crop=center',
      size: '10x8 inches',
      material: 'Premium Photo Paper'
    },
    {
      id: 6,
      category: 'books',
      title: 'Magazine Design',
      description: 'Full-color magazine with perfect binding',
      image: 'https://i.pinimg.com/originals/38/b7/0d/38b70d083e110038939c9b84c7e43e6a.jpg',
      size: '8.5x11 inches',
      material: 'Perfect Bound Magazine'
    },
    {
      id: 7,
      category: 'banners',
      title: 'Grand Opening Banner',
      description: 'Large vinyl banner for restaurant grand opening',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center',
      size: '10x4 feet',
      material: 'Vinyl Banner'
    },
    {
      id: 8,
      category: 'banners',
      title: 'Trade Show Display',
      description: 'Retractable banner stand for exhibitions',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop&crop=center',
      size: '33x78 inches',
      material: 'Fabric Banner'
    },
    {
      id: 9,
      category: 'banners',
      title: 'Event Backdrop',
      description: 'Large format backdrop for corporate events',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&crop=center',
      size: '8x8 feet',
      material: 'Fabric Backdrop'
    },
    {
      id: 10,
      category: 'banners',
      title: 'Outdoor Signage',
      description: 'Weather-resistant outdoor business sign',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&crop=center',
      size: '4x8 feet',
      material: 'Aluminum Composite'
    },
    {
      id: 11,
      category: 'flyers',
      title: 'Event Promotion Flyer',
      description: 'Colorful promotional flyers for music festival',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&crop=center',
      size: '8.5x11 inches',
      material: 'Glossy Paper'
    },
    {
      id: 12,
      category: 'flyers',
      title: 'Real Estate Flyer',
      description: 'Professional real estate marketing flyers',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop&crop=center',
      size: '8.5x11 inches',
      material: 'Premium Paper'
    },
    {
      id: 13,
      category: 'flyers',
      title: 'Restaurant Menu',
      description: 'Full-color restaurant menu with lamination',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop&crop=center',
      size: '8.5x14 inches',
      material: 'Laminated Paper'
    },
    {
      id: 14,
      category: 'flyers',
      title: 'Product Catalog',
      description: 'Multi-page product showcase catalog',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop&crop=center',
      size: '8.5x11 inches',
      material: 'Saddle Stitched'
    },
    {
      id: 15,
      category: 'flyers',
      title: 'Direct Mail Postcard',
      description: 'Eye-catching postcards for direct marketing',
      image: 'https://4over.com/media/catalog/product/cache/427dcc6f1c72ba2bca8eaa23d0254ccc/d/i/direct-mail-postcards.jpg',
      size: '6x4 inches',
      material: 'Cardstock'
    },
    {
      id: 16,
      category: 'business',
      title: 'Corporate Business Cards',
      description: 'Premium business cards with embossed logo',
      image: 'https://i.etsystatic.com/27562580/r/il/c5af55/3106328992/il_fullxfull.3106328992_7npd.jpg',
      size: '3.5x2 inches',
      material: 'Premium Cardstock'
    },
    {
      id: 17,
      category: 'business',
      title: 'Company Brochures',
      description: 'Tri-fold brochures with company information',
      image: 'https://designshack.net/wp-content/uploads/tips-ideas-tri-fold-brochure-design-368x245.jpg',
      size: '8.5x11 inches',
      material: 'Matte Finish'
    },
    {
      id: 18,
      category: 'business',
      title: 'Presentation Folders',
      description: 'Professional folders with business card slots',
      image: 'https://www.creativefabrica.com/wp-content/uploads/2023/05/30/eyecatching-presentation-folder-design-Graphics-70905966-1.jpg',
      size: '9x12 inches',
      material: 'Heavy Cardstock'
    },
    {
      id: 19,
      category: 'packaging',
      title: 'Product Packaging Boxes',
      description: 'Custom retail packaging with brand colors',
      image: 'https://i.pinimg.com/originals/d8/4b/25/d84b25af5945788a9603fb74648681ec.png',
      size: 'Custom Dimensions',
      material: 'Corrugated Cardboard'
    },
    {
      id: 20,
      category: 'packaging',
      title: 'Custom Stickers',
      description: 'Die-cut vinyl stickers with UV coating',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center',
      size: '2x2 inches',
      material: 'Vinyl with UV Coating'
    }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Johnson\'s Restaurant',
      text: 'Fast Print Guys delivered our grand opening banners on time and exceeded our expectations. The quality was outstanding!'
    },
    {
      name: 'Mike Chen',
      company: 'TechStart Inc.',
      text: 'Professional business cards and brochures that perfectly represent our brand. Quick turnaround and excellent service.'
    },
    {
      name: 'Lisa Rodriguez',
      company: 'Event Masters',
      text: 'We trust Fast Print Guys for all our event materials. Consistent quality and reliable delivery every time.'
    }
  ]

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
     <section
        className="relative w-full py-16"
        style={{
          background: "#101D2E",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          
          {/* Left Text */}
          <div className="md:w-1/2 text-left">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-yellow-400">Our </span>
              <span className="text-white">Portfolio</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
         At Fast Print Guys, our portfolio highlights vibrant, high-quality prints — from banners to custom products — all designed to leave a lasting impression.

            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src={portfolioImg}
              alt="Our Portfolio"
              className="w-full max-w-md rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
            />
          </div>

        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-blue-600">Our </span>
              <span className="text-gray-800">Work Gallery</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore our diverse range of printing projects and see the quality that sets us apart
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white opacity-0 hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{item.size}</span>
                    <span>{item.material}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-yellow-400">What We </span>
              <span className="text-gray-800">Print</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From small business cards to large format banners, we handle it all with precision and care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-3">Books & Binding</h3>
              <p className="text-gray-600 mb-4">Novels, textbooks, manuals, magazines, and professional binding services</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Perfect binding & saddle stitch</li>
                <li>• Spiral & wire-o binding</li>
                <li>• Custom cover designs</li>
              </ul>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 4v10a2 2 0 002 2h8a2 2 0 002-2V8M7 8h10" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-3">Banners & Signs</h3>
              <p className="text-gray-600 mb-4">Large format banners, outdoor signs, trade show displays, and event backdrops</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Weather-resistant materials</li>
                <li>• Retractable banner stands</li>
                <li>• Custom sizes available</li>
              </ul>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-3">Flyers & Marketing</h3>
              <p className="text-gray-600 mb-4">Promotional flyers, postcards, menus, catalogs, and direct mail pieces</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• High-resolution printing</li>
                <li>• Variety of paper finishes</li>
                <li>• Bulk order discounts</li>
              </ul>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-3">Business Materials</h3>
              <p className="text-gray-600 mb-4">Business cards, letterheads, brochures, and professional stationery</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Premium cardstock options</li>
                <li>• Embossing & foil stamping</li>
                <li>• Multiple finishing options</li>
              </ul>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-3">Packaging & Labels</h3>
              <p className="text-gray-600 mb-4">Custom boxes, labels, stickers, and retail packaging solutions</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Eco-friendly options</li>
                <li>• Die-cut shapes</li>
                <li>• Food-safe materials</li>
              </ul>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-3">Design Services</h3>
              <p className="text-gray-600 mb-4">Custom graphic design, layout services, and creative consultation</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Logo & brand design</li>
                <li>• Layout & typography</li>
                <li>• Creative consultation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-blue-600">Client </span>
              <span className="text-gray-800">Success Stories</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Don't just take our word for it - hear what our satisfied customers have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        className="w-full py-24"
        style={{
          background: "linear-gradient(135deg, rgba(173, 216, 230, 0.3), rgba(255, 182, 193, 0.3))",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6">
            <span className="text-blue-400">Why </span>
            <span className="text-black">Choose Us</span>
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
            At Fast Print Guys, we go beyond printing — delivering top-tier quality, speed, and personalized service that makes your ideas stand out.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            <div className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <h3 className="font-semibold text-xl mt-5 mb-3">Exceptional Quality</h3>
              <p className="text-gray-600 text-base">
                We use premium materials and advanced printing technology for stunning results every time.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-semibold text-xl mt-5 mb-3">Fast Turnaround</h3>
              <p className="text-gray-600 text-base">
                Quick processing without compromising quality — get your prints right when you need them.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-semibold text-xl mt-5 mb-3">Nationwide Delivery</h3>
              <p className="text-gray-600 text-base">
                We ship across the country, ensuring your prints reach you safely and on time.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="font-semibold text-xl mt-5 mb-3">Custom Solutions</h3>
              <p className="text-gray-600 text-base">
                From design to finishing, we tailor every order to match your exact needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-all duration-300"
            >
              ✕
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4 rounded-b-lg">
              <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300 mb-2">{selectedImage.description}</p>
              <div className="flex justify-between text-sm text-gray-400">
                <span>{selectedImage.size}</span>
                <span>{selectedImage.material}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
  )
}

export default Portfolio