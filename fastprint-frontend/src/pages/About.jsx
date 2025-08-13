import React, { useEffect, useRef } from 'react'
import Header from "../components/Header"
import abt from "../assets/images/abt.svg"
import image45 from "../assets/images/image45.png"
import image37 from "../assets/images/image37.png"
import image38 from "../assets/images/image38.png"
import bg1 from "../assets/images/bg1.png"
import bg2 from "../assets/images/bg2.png"
import bg3 from "../assets/images/bg3.png"
import Footer from '../components/Footer'

const About = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    // Observe all elements with scroll-animate class
    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
   <>
   <Header/>
   
   {/* Add custom CSS for animations */}
   <style jsx>{`
     @keyframes fadeInUp {
       from {
         opacity: 0;
         transform: translateY(30px);
       }
       to {
         opacity: 1;
         transform: translateY(0);
       }
     }
     
     @keyframes fadeInLeft {
       from {
         opacity: 0;
         transform: translateX(-50px);
       }
       to {
         opacity: 1;
         transform: translateX(0);
       }
     }
     
     @keyframes fadeInRight {
       from {
         opacity: 0;
         transform: translateX(50px);
       }
       to {
         opacity: 1;
         transform: translateX(0);
       }
     }
     
     @keyframes scaleIn {
       from {
         opacity: 0;
         transform: scale(0.8);
       }
       to {
         opacity: 1;
         transform: scale(1);
       }
     }
     
     @keyframes float {
       0%, 100% {
         transform: translateY(0px);
       }
       50% {
         transform: translateY(-20px);
       }
     }
     
     @keyframes pulse {
       0%, 100% {
         transform: scale(1);
       }
       50% {
         transform: scale(1.05);
       }
     }
     
     @keyframes slideInDown {
       from {
         opacity: 0;
         transform: translateY(-30px);
       }
       to {
         opacity: 1;
         transform: translateY(0);
       }
     }
     
     .scroll-animate {
       opacity: 0;
       transform: translateY(30px);
       transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
     }
     
     .scroll-animate.animate-in {
       opacity: 1;
       transform: translateY(0);
     }
     
     .fade-in-up {
       animation: fadeInUp 1s ease-out;
     }
     
     .fade-in-left {
       animation: fadeInLeft 1s ease-out;
     }
     
     .fade-in-right {
       animation: fadeInRight 1s ease-out;
     }
     
     .scale-in {
       animation: scaleIn 1s ease-out;
     }
     
     .float {
       animation: float 3s ease-in-out infinite;
     }
     
     .pulse {
       animation: pulse 2s ease-in-out infinite;
     }
     
     .slide-in-down {
       animation: slideInDown 1s ease-out;
     }
     
     .hover-lift {
       transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
     }
     
     .hover-lift:hover {
       transform: translateY(-10px);
       box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
     }
     
     .stagger-1 { animation-delay: 0.1s; }
     .stagger-2 { animation-delay: 0.2s; }
     .stagger-3 { animation-delay: 0.3s; }
     .stagger-4 { animation-delay: 0.4s; }
   `}</style>

<section className="relative w-full py-20 bg-[#101D2E] overflow-hidden">
  {/* Dark Blue Background with Grid Pattern */}
  <div
    className="absolute top-[84px] left-0 w-full h-[341px] -z-10"
    style={{
      backgroundColor: "#101D2E",
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px),
        linear-gradient(rgba(255,255,255,0.1) 2px, transparent 2px),
        linear-gradient(90deg, rgba(255,255,255,0.1) 2px, transparent 2px)
      `,
      backgroundSize: "60px 60px, 60px 60px, 15px 15px, 15px 15px",
      backgroundPosition: "0 0, 0 0, 0 0, 0 0",
      backgroundRepeat: "repeat"
    }}
  ></div>

  <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:items-start gap-16 md:gap-32 relative z-10">
    {/* Left Content */}
    <div className="flex-1 text-white fade-in-left">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 whitespace-nowrap">
        About <span className="text-[#EE831E] pulse">Fast Print Guys</span>
      </h2>
      <p className="text-gray-200 text-lg leading-relaxed max-w-xl slide-in-down">
        At Fast Print Guys, we deliver high-quality printing services with
        unmatched speed and precision. From business cards and flyers to
        banners, books, and custom projects, we help bring your vision to
        life—fast, without compromising on quality.
      </p>
    </div>

    {/* Right Image */}
    <div className="flex-1 flex justify-center md:justify-end fade-in-right">
      <img
        src={abt}
        alt="About Fast Print Guys"
        className="w-full max-w-md md:max-w-lg h-auto object-cover rounded-lg shadow-xl float hover:scale-105 transition-transform duration-500"
      />
    </div>
  </div>
</section>

<section className="relative w-full py-16 overflow-hidden scroll-animate">
  <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
    
    {/* Left Content */}
    <div className="flex-1 flex flex-col items-start text-left">
      <h3 className="text-lg md:text-xl font-medium text-gray-700 mb-1 fade-in-up stagger-1">
        Live out your life.
      </h3>
      <h2 className="text-2xl md:text-3xl font-bold text-[#2A428C] mb-4 leading-snug fade-in-up stagger-2">
        The Happiness & Crafting Artworks
      </h2>
      <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md fade-in-up stagger-3">
        Create your own book as a gift! With international custom book printing and no order
        minimum, you can have books printed & bound in hardcover, paperback, coil bound,
        or saddle stitch. Print a novel, children's book, cookbook, magazine, or any kind
        of book you can think of.
      </p>
    </div>

    {/* Right Image */}
    <div className="flex-1 flex justify-end fade-in-right stagger-4">
      <img
        src={image45}
        alt="Custom Book Printing"
        className="w-full max-w-sm md:max-w-md h-auto object-cover rounded-lg shadow-lg hover-lift"
      />
    </div>
  </div>
</section>

<div className="w-full min-h-screen flex justify-center items-center px-0 py-10 bg-transparent -mt-12 rounded-t-lg scroll-animate">
  <div
    className="w-full min-h-screen rounded-none backdrop-blur-[200px] bg-gradient-to-br from-blue-100 via-pink-100 to-blue-100 flex flex-col items-start text-left px-8 py-12"
    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
  >
    {/* Heading */}
    <h2 className="text-4xl font-extrabold mb-4 text-gray-900 pl-12 fade-in-up">
      <span>Our </span>
      <span className="text-blue-600">Services</span>
    </h2>

    {/* Paragraph */}
    <p className="text-gray-700 text-lg max-w-4xl mb-12 leading-relaxed pl-12 fade-in-up stagger-1">
      Whether you're a business owner, marketer, or writer, we provide the best printing services tailored to all your needs.
    </p>

    {/* Service Cards Grid */}
    <div className="w-full flex justify-center px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-[1440px]">
        {[
          {
            title: "Book Printing",
            description:
              "Personalized book printing for memoirs, novels, cookbooks, workbooks, children's books, and much more is our specialty. Choose from hardcover, paperback, coil bound, or saddle stitch forms.",
          },
          {
            title: "Book Writing & Formatting",
            description:
              "Writing a book requires a clear structure, engaging content, and proper formatting for readability. Focus on consistent fonts, appropriate margins, headers, and spacing.",
          },
          {
            title: "Book Cover Design",
            description:
              "A compelling book cover quickly captures attention and reflects your story. Use striking images, vibrant colors, and clear, well-balanced typography that perfectly suits your book's genre.",
          },
          {
            title: "Book Publishing Services",
            description:
              "Book publishing means choosing between traditional or self-publishing. Ensure your manuscript is polished, formatted, and ready to engage readers.",
          },
        ].map(({ title, description }, index) => (
          <div
            key={title}
            className={`bg-white rounded-2xl shadow-md border border-gray-300 p-6 flex flex-col justify-between text-left transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 scale-in stagger-${index + 1} hover-lift`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-4">{title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

<div className="w-full py-16 px-6 bg-white scroll-animate">
  <div className="max-w-[1200px] mx-auto">

    {/* Heading */}
    <h2 className="text-center text-3xl md:text-4xl font-bold mb-4 fade-in-up">
      <span className="text-black">What Our </span>
      <span className="text-blue-600">Clients</span>
      <span className="text-black"> Says</span>
    </h2>

    {/* Subtext */}
    <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12 fade-in-up stagger-1">
      Not only should you rely on our word-of-mouth recommendations; here are comments 
      from customers on our printing capabilities:
    </p>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* Card 1 */}
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover-lift scale-in stagger-2">
        {/* Rating */}
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i} 
              className="w-5 h-5 text-yellow-400 fill-current transition-all duration-300 hover:scale-110" 
              viewBox="0 0 20 20"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.073 3.304a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.073 3.304c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.073-3.304a1 1 0 00-.364-1.118L2.98 8.731c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.073-3.304z"/>
            </svg>
          ))}
        </div>
        {/* Text */}
        <p className="text-gray-700 mb-4">
          Having self-published, I have used several printers. The best mix of speed, cost, and quality among Fast Print Guys is found here. My books look great!
        </p>
        {/* Author */}
        <div className="flex items-center gap-4">
          <img 
            src={image37} 
            alt="Client 1" 
            className="w-14 h-14 rounded-full object-cover hover:scale-110 transition-transform duration-300" 
          />
          <div>
            <p className="font-semibold">Michael T.</p>
            <p className="text-sm text-gray-500">Author</p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover-lift scale-in stagger-3">
        {/* Rating */}
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i} 
              className="w-5 h-5 text-yellow-400 fill-current transition-all duration-300 hover:scale-110" 
              viewBox="0 0 20 20"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.073 3.304a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.073 3.304c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.073-3.304a1 1 0 00-.364-1.118L2.98 8.731c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.073-3.304z"/>
            </svg>
          ))}
        </div>
        {/* Text */}
        <p className="text-gray-700 mb-4">
          Fast Print Guys rescued my event! In six hours, I needed 500 flyers, and they produced PERFECT printing on schedule. Unbelievably excellent service!
        </p>
        {/* Author */}
        <div className="flex items-center gap-4">
          <img 
            src={image38} 
            alt="Client 2" 
            className="w-14 h-14 rounded-full object-cover hover:scale-110 transition-transform duration-300" 
          />
          <div>
            <p className="font-semibold">Sarah</p>
            <p className="text-sm text-gray-500">Director of Marketing</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

<section className="w-full bg-gray-100 -mt-6 scroll-animate">
  <div className="max-w-[1400px] mx-auto rounded-3xl overflow-hidden p-6 space-y-8">
    
    {/* Third Div */}
    <div
      className="w-full flex flex-col md:flex-row-reverse items-center justify-center text-white p-8 md:p-12 rounded-2xl min-h-[200px] scale-in"
      style={{
        background: "linear-gradient(90deg, #D15D9E 38.04%, #5D4495 121.51%)",
      }}
    >
      <div className="md:w-1/2 flex flex-col justify-center items-center text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-snug fade-in-up">
          Get premium-quality printing with unbeatable speed and service.
        </h2>
        {/* Button */}
        <button className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-purple-100 transition-all duration-500 hover:scale-110 hover:shadow-2xl pulse">
          Start Now
        </button>
      </div>
    </div>

  </div>
</section>

<Footer/>

   </>
  )
}

export default About