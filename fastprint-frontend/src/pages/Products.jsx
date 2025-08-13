import React from 'react';
import Header from '../components/Header';
import pro from "../assets/images/pro.png";
import arr from "../assets/images/arr.png";
import img46 from "../assets/images/img46.png";
import img47 from "../assets/images/img47.png";
import img48 from "../assets/images/img48.png";
import img49 from "../assets/images/img49.png";
import img50 from "../assets/images/img50.png";
import img51 from "../assets/images/img51.png";
import img52 from "../assets/images/img52.png";
import img53 from "../assets/images/img53.png";
import img54 from "../assets/images/img54.png";
import img55 from "../assets/images/img55.png";
import img56 from "../assets/images/img56.png";
import img57 from "../assets/images/img57.png";
import img58 from "../assets/images/img58.png";
import img59 from "../assets/images/img59.png";
import img61 from "../assets/images/img61.jpeg";
import img62 from "../assets/images/img62.jpeg";
import img63 from "../assets/images/img63.jpeg";
import img64 from "../assets/images/img64.jpeg";
import img66 from "../assets/images/img66.png";
import img67 from "../assets/images/img67.png";
import img68 from "../assets/images/img68.png";
import img69 from "../assets/images/img69.png";
import img70 from "../assets/images/img70.png";
import img71 from "../assets/images/img71.png";
import img72 from "../assets/images/img72.png";
import img73 from "../assets/images/img73.png";
import Footer from '../components/Footer';

const Products = () => {
  return (
    <>
      <Header />
      <section
        className="relative w-full py-20 bg-[#101D2E] overflow-hidden transition-colors duration-500 hover:bg-[#1A2A4A]"
      >
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
            backgroundRepeat: "repeat",
            transition: "background-color 0.5s ease",
          }}
        ></div>

        <div
          className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:items-start gap-16 md:gap-32 md:space-x-20 relative z-10"
        >
          {/* Left Content */}
          <div
            className="flex-1 text-white animate-fadeIn"
            style={{ animationDuration: '1s', animationFillMode: 'forwards' }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 whitespace-nowrap">
              Create
              <span className="text-[#EE831E]"> Your Book</span>
              <br />
              Your Way
            </h2>
            <p
              className="text-gray-200 text-lg leading-relaxed"
              style={{ maxWidth: '22rem' }}
            >
              Offers custom book printing services with over 3,000 possible sizes, paper types, and binding option combinations
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center md:justify-end relative">
            {/* Main image with hover scale animation */}
            <img
              src={pro}
              alt="Custom Book Printing"
              className="w-full max-w-xl md:max-w-2xl h-auto object-cover rounded-lg shadow-xl relative z-10 transition-transform duration-300 hover:scale-105"
            />

            {/* Overlay image with gentle floating animation */}
            <img
              src={arr}
              alt="Overlay Graphic"
              className="absolute top-[-20px] right-[-140px] w-36 md:w-48 h-auto object-contain z-20 pointer-events-none animate-float"
              style={{ animationDuration: '3s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}
            />
          </div>
        </div>

        <style jsx>{`
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fadeIn {
      animation-name: fadeIn;
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
    .animate-float {
      animation-name: float;
    }
  `}</style>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-black mb-2">
          Book Types You Can Make On
        </h2>
        <h3 className="text-2xl font-semibold text-blue-600 text-center mb-10">
          Fast Print Guys
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { src: img46, alt: "Print Book", title: "Print Book", desc: "Personalized book printing for memoirs, novels, cookbooks, workbooks, children's books, and much more is our specialty." },
            { src: img47, alt: "Photo Book", title: "Photo Book", desc: "A photo book beautifully captures cherished memories through carefully curated images, allowing you to tell your story." },
            { src: img48, alt: "E-Book", title: "E-Book", desc: "Using our user-friendly platform, you can design, prepare, and publish your eBook in a few simple steps, therefore enabling anybody." },
            { src: img49, alt: "Wall Calendar", title: "Wall Calendar", desc: "Our wall calendars are perfect for keeping track of important dates while showcasing your favorite photos or artwork. Available in various sizes and customizable layouts to suit your needs." },
            { src: img50, alt: "Comic Book", title: "Comic Book", desc: "Expert Comic Book Printing Can Help You Realize Your Story Regarding narrative, comic books and graphic novels offer a unique mix of words and graphics that captivate readers." },
            { src: img51, alt: "Magazine", title: "Magazine", desc: "Whether your book is just one copy or a big order, our professional book printing services let you design your own book in any volume." },
            { src: img52, alt: "Cookbook", title: "Cookbook", desc: "Are you ready to compile a cookbook of expert caliber from your best recipes? Whether you are writing a personal recipe book for your family, a self-published cookbook." },
            { src: img53, alt: "Yearbook", title: "Yearbook", desc: "Creating a yearbook that captures the memories of an entire academic year is an interesting project; yet, the complexity of managing significant..." },
          ].map(({ src, alt, title, desc }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col
          transform opacity-0 translate-y-6
          animate-fadeInUp animation-delay-[calc(0.1s*var(--i))]
          transition-transform duration-300 ease-in-out
          hover:scale-105 hover:shadow-xl cursor-pointer"
              style={{ '--i': idx }}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-40 object-cover
            transition-transform duration-300 ease-in-out
            group-hover:scale-110"
              // Add "group" class to parent if using group-hover
              />
              <div className="p-4 flex flex-col flex-grow">
                <h4
                  className="font-semibold text-lg mb-2
              transition-colors duration-300
              hover:text-blue-600"
                >
                  {title}
                </h4>
                <p className="text-gray-600 text-sm flex-grow">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translateY(24px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-fadeInUp {
      animation-name: fadeInUp;
      animation-duration: 0.6s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-out;
    }

    .animation-delay-\\[calc\\(0\\.1s\\*var\\(--i\\)\\)] {
      animation-delay: var(--i);
    }
  `}</style>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Heading */}
        <h2 className="text-center text-4xl font-bold mb-12">
          <span className="text-black">Book </span>
          <span className="text-blue-600">Bindings</span>
        </h2>

        {/* Content flex container */}
        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* Left - Large image */}
          <div className="md:w-2/5">
            <img
              src={img54}
              alt="Book Binding"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Right - Text and images */}
          <div className="md:w-3/5 flex flex-col h-full">
            <div className="flex-grow">
              <h3 className="text-blue-600 text-2xl font-semibold mb-2">
                Paperback Perfect Bound
              </h3>
              <p className="text-gray-600 mb-4">32-800 pages</p>

              {/* Light horizontal line */}
              <hr className="border-gray-300 mb-6" />

              <p className="text-gray-700 leading-relaxed mb-6">
                The industry term for traditional paperback binding, perfect bound is the most cost-efficient and popular way to bind on-demand products. Suitable for most projects.
              </p>

              {/* Images grid */}
              <div className="grid grid-cols-4 gap-4">
                {[img55, img56, img57, img58].map((imgSrc, idx) => (
                  <img
                    key={idx}
                    src={imgSrc}
                    alt={`Binding option ${idx + 1}`}
                    className="w-full h-24 object-cover rounded-md shadow-sm hover:shadow-md transition-shadow duration-200"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Heading */}
        <h2 className="text-center text-4xl font-bold mb-12">
          <span className="text-black">Interior Color </span>
          <span className="text-blue-600">Options</span>
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              img: img61,  // replace with appropriate images
              title: "Standard Black & White",
              desc: "Standard black & white printing for novels, memoirs, and other text-heavy books.",
            },
            {
              img: img62,
              title: "Premium Black & White",
              desc: "Heavy ink coverage great for books with black & white images, graphs, or other graphics.",
            },
            {
              img: img63,
              title: "Standard Color",
              desc: "If your book is predominantly text but has a few color images, standard color is the right option for you.",
            },
            {
              img: img64,
              title: "Premium Color",
              desc: "The best color printing on every page with rich colors and heavy ink coverage.",
            },
          ].map(({ img, title, desc }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={img}
                alt={title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h4 className="font-semibold text-lg mb-2">{title}</h4>
                <p className="text-gray-600 text-sm flex-grow">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Heading */}
        <h2 className="text-center text-4xl font-bold mb-12">
          <span className="text-black">Paper</span>
          <span className="text-blue-600"> Types</span>
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              img: img66,  // replace with appropriate images
              title: "60# Cream Uncoated",

              desc: "Traditional cream paper most frequently used for black & white novels and workbooks.",
            },
            {
              img: img67,
              title: "60# White Uncoated",
              desc: "Versatile and economical white paper commonly found in a wide range of books.",
            },
            {
              img: img68,
              title: "80# White Coated",
              desc: "Ultra-smooth, high opacity bright white paper used for photo books, magazines, and comic books.",
            },
            {
              img: img69,
              title: "100# White Coated",
              desc: "The heaviest available stock, used to create durable, vibrant calendars.",
            },
          ].map(({ img, title, desc }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={img}
                alt={title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h4 className="font-semibold text-lg mb-2">{title}</h4>
                <p className="text-gray-600 text-sm flex-grow">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-6 py-12">
        {/* Heading */}
        <h2 className="text-center text-4xl font-bold mb-12">
          <span className="text-black">Cover </span>
          <span className="text-blue-600">Finish</span>
        </h2>

        {/* Cards container */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Card 1 - Glossy */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col max-w-sm w-full">
            <img
              src={img70} // replace with glossy image
              alt="Glossy Finish"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">Glossy</h3>
              <p className="text-gray-600 flex-grow">
                Stiff cover stock with a glossy coating finish. Glossy covers withstand wear and tear well while emphasizing the cover imagery.
              </p>
            </div>
          </div>

          {/* Card 2 - Matte */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col max-w-sm w-full">
            <img
              src={img71} // replace with matte image
              alt="Matte Finish"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">Matte</h3>
              <p className="text-gray-600 flex-grow">
                A matte finish gives your cover a more subdued, natural look. Used most often with novels and notebooks.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-full py-16"
        style={{
          background: "linear-gradient(90deg, #a8d8ff 0%, #ffd6e8 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* Left - Image */}
          <div className="flex-1 overflow-hidden rounded-lg shadow-lg">
            <img
              src={img72} // replace with your image import
              alt="Book Pricing Calculator"
              className="w-full h-auto object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>

          {/* Right - Text content */}
          <div className="flex-1 text-left">
            <h2 className="text-4xl font-bold text-black leading-tight">
              Book Pricing
            </h2>
            <h3 className="text-3xl font-semibold text-blue-600 mb-4">
              Calculator
            </h3>
            <p className="text-lg text-black mb-6 leading-relaxed">
              Quality book printing at a reasonable price. Check pricing, format
              variations, retail pricing, and shipping for custom books or calendars.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-200">
              Print Your Book
            </button>

          </div>
        </div>
      </section>
      <Footer/>






    </>
  );
};

export default Products;
