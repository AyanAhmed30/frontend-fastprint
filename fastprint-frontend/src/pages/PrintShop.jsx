import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import imgx from "../assets/images/img74.png";
import img75 from "../assets/images/img75.jpeg";
import img76 from "../assets/images/img76.jpeg";
import img77 from "../assets/images/img77.jpeg";
import img78 from "../assets/images/img78.jpeg";
import img79 from "../assets/images/img79.jpeg";
import img80 from "../assets/images/img80.jpeg";
import img81 from "../assets/images/img81.jpeg";
import img82 from "../assets/images/img82.jpeg";
import image37 from "../assets/images/image37.png"
import image38 from "../assets/images/image38.png"
import Footer from "../components/Footer";

const cards = [
  { src: img75, title: "Banners and Posters", desc: "We make high-quality prints for events, exhibitions." },
  { src: img76, title: "Business Cards", desc: "Building Brands That Speak. Let’s create something unforgettable." },
  { src: img77, title: "Flyers", desc: "Big Ideas. Bold Results. Your success is our business. Designs That Captivate" },
  { src: img78, title: "Customized Products", desc: "Made Just for You. Because Ordinary Isn’t Your Style." },
  { src: img79, title: "Customized Sticker", desc: "We make high-quality prints for events, exhibitions." },
  { src: img80, title: "Invitation Cards", desc: "Building Brands That Speak. Let’s create something unforgettable." },
  { src: img81, title: "T-Shirt Printing", desc: "Big Ideas. Bold Results. Your success is our business. Designs That Captivate" },
  { src: img82, title: "Personalized Book Printing", desc: "Made Just for You. Because Ordinary Isn’t Your Style." }
];

const PrintShop = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  return (
    <>
      <Header />

      {/* Top Section */}
      <section
        className="relative w-full"
        style={{
          background: "#101D2E",
          height: "341px"
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center h-full">
          {/* Left Content */}
          <div className="md:w-1/2 text-left text-white">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">Print </span>
              <span className="text-yellow-400">Shop</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Fast Print Guys offers high-quality printing services with fast
              turnaround times and a commitment to excellence. From books to
              marketing materials, we bring your vision to life.
            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center items-center relative">
            <img
              src={imgx}
              alt="Center"
              className="w-56 h-56 object-cover rounded-lg shadow-lg relative z-10 transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
            />
          </div>
        </div>
      </section>

      {/* New Card Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Headings */}
        <h2 className="text-3xl font-bold text-center text-black mb-2">
          <span className="text-blue-600">Fast Print Guys </span>
          <span className="text-black">Makes it Simple to Print.</span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {cards.map(({ src, title, desc }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col
              transform opacity-0 translate-y-6
              animate-fadeInUp animation-delay-[calc(0.1s*var(--i))]
              transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-xl cursor-pointer"
              style={{ "--i": idx }}
            >
              <img
                src={src}
                alt={title}
                className="w-full h-44 object-cover
                transition-transform duration-300 ease-in-out"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h4
                  className="font-semibold text-lg mb-2
                  transition-colors duration-300 hover:text-blue-600"
                >
                  {title}
                </h4>
                <p className="text-gray-600 text-sm flex-grow">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Animation CSS */}
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
      <div className="w-full py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">

          {/* Heading */}
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-4 animate-fadeIn">
            <span className="text-black">What Our </span>
            <span className="text-blue-600">Clients</span>
            <span className="text-black"> Says</span>
          </h2>

          {/* Subtext */}
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12 animate-fadeIn delay-200">
            Not only should you rely on our word-of-mouth recommendations; here are comments
            from customers on our printing capabilities:
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Card 1 */}
            <div className="flex bg-gray-50 rounded-xl shadow-md overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-slideUp">
              {/* Text */}
              <div className="flex flex-col justify-center p-6 flex-1">
                <p className="text-gray-700 mb-4">
                  Having self-published, I have used several printers. The best mix of speed, cost, and quality among Fast Print Guys is found here. My books look great!
                </p>
                <p className="font-semibold">Michael T.</p>
                <p className="text-sm text-gray-500">Author</p>
              </div>
              {/* Image */}
              <div className="relative w-48 group overflow-hidden">
                <img
                  src={image37}
                  alt="Client 1"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex bg-gray-50 rounded-xl shadow-md overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-slideUp delay-200">
              {/* Text */}
              <div className="flex flex-col justify-center p-6 flex-1">
                <p className="text-gray-700 mb-4">
                  Fast Print Guys rescued my event! In six hours, I needed 500 flyers, and they produced PERFECT printing on schedule. Unbelievably excellent service!
                </p>
                <p className="font-semibold">Sarah</p>
                <p className="text-sm text-gray-500">Director of Marketing</p>
              </div>
              {/* Image */}
              <div className="relative w-48 group overflow-hidden">
                <img
                  src={image38}
                  alt="Client 2"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <section className="w-full py-16 px-6 bg-[#E6EEFA]">
  <div className="max-w-[900px] mx-auto">
    {/* Heading */}
    <h2 className="text-center text-3xl md:text-4xl font-bold text-black mb-4">
      Frequently Asked <span className="text-blue-600">Questions</span>
    </h2>
    <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
      Got questions about our printing services? Here are the answers to some of
      the most common inquiries from our customers.
    </p>

    {/* FAQ List */}
    <div className="space-y-4">
      {[
        {
          question: "What types of printing services do you offer?",
          answer:
            "Fast Print Guys provide a wide range of printing services including business cards, flyers, posters, banners, books, brochures, calendars, and more. We also offer custom printing solutions tailored to your needs."
        },
        {
          question: "How quickly can you complete a print job?",
          answer:
            "We specialize in fast turnaround times. Many standard print jobs can be completed within 24–48 hours, and we offer same-day printing for urgent orders."
        },
        {
          question: "Do you offer design assistance?",
          answer:
            "Yes! Our in-house design team can help you create professional and eye-catching designs for your print materials, whether you’re starting from scratch or refining existing artwork."
        },
        {
          question: "Can you handle bulk printing orders?",
          answer:
            "Absolutely. We have the capacity and equipment to handle large-volume printing while maintaining high quality and competitive pricing."
        }
      ].map((faq, index) => (
        <div
          key={index}
          className="bg-[#2A428C] rounded-lg overflow-hidden shadow"
        >
          <button
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
            className={`w-full text-left px-6 py-4 font-semibold flex justify-between items-center transition-colors duration-300 ${
              openIndex === index
                ? "bg-[#3B5BBF]"
                : "hover:bg-[#3B5BBF]"
            } text-white`}
          >
            <span>{faq.question}</span>
            <span className="text-xl font-bold">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>

          {openIndex === index && (
            <div className="bg-white text-black px-6 py-4 transition-all duration-500 ease-in-out">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>
<Footer/>

    </>
  );
};

export default PrintShop;
