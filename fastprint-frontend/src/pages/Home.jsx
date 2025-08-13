import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import bg1 from "../assets/images/bg1.png"
import bg2 from "../assets/images/bg2.png"
import bg3 from "../assets/images/bg3.png"
import c1 from "../assets/images/c1.png"
import c2 from "../assets/images/c2.png"
import c3 from "../assets/images/c3.png"
import c4 from "../assets/images/c4.png"
import c5 from "../assets/images/c5.png"
import c6 from "../assets/images/c6.png"
import c7 from "../assets/images/c7.png"
import c8 from "../assets/images/c8.png"

import image32 from "../assets/images/image-32.png"
import image33 from "../assets/images/image-33.png"
import image29 from "../assets/images/image-29.png"
import image30 from "../assets/images/image-30.png"
import image31 from "../assets/images/image-31.png"
import image34 from "../assets/images/image34.jpg"
import image35 from "../assets/images/image35.webp"
import image36 from "../assets/images/image36.webp"
import image37 from "../assets/images/image37.png"
import image38 from "../assets/images/image38.png"
import image39 from "../assets/images/image39.png"
import image40 from "../assets/images/image40.png"
import image41 from "../assets/images/image41.png"
import image42 from "../assets/images/image42.png"
import image43 from "../assets/images/image43.jpg"

import Footer from "../components/Footer"

const Home = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleQuoteClick = () => {
    navigate('/calculator/printbook');
  };
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <div className="home-page">
        <Header />

        {/* Main Hero Section */}
        <div className="relative w-full h-[80vh] bg-[#101D2E] overflow-hidden">

          {/* Enhanced Floating Animation Styles */}
          <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(5deg);
            }
          }

          @keyframes floatAlt {
            0%, 100% {
              transform: translateY(0) rotate(0deg) scale(1);
            }
            50% {
              transform: translateY(-15px) rotate(-3deg) scale(1.05);
            }
          }

          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }

          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(60px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInLeft {
            0% {
              opacity: 0;
              transform: translateX(-60px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeInRight {
            0% {
              opacity: 0;
              transform: translateX(60px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInScale {
            0% {
              opacity: 0;
              transform: scale(0.8) translateY(30px);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          @keyframes zoomIn {
            0% {
              opacity: 0;
              transform: scale(0.5);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes bounceIn {
            0% {
              opacity: 0;
              transform: scale(0.3) translateY(-100px);
            }
            50% {
              opacity: 1;
              transform: scale(1.1) translateY(0);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          @keyframes slideUp {
            0% {
              opacity: 0;
              transform: translateY(100px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes rotateIn {
            0% {
              opacity: 0;
              transform: rotate(-200deg) scale(0.5);
            }
            100% {
              opacity: 1;
              transform: rotate(0deg) scale(1);
            }
          }

          @keyframes wiggle {
            0%, 100% { transform: rotate(-3deg); }
            50% { transform: rotate(3deg); }
          }

          .float {
            animation: float 6s ease-in-out infinite;
          }

          .float-alt {
            animation: floatAlt 8s ease-in-out infinite;
          }

          .pulse {
            animation: pulse 3s ease-in-out infinite;
          }

          .animate-fadeInUp {
            animation: fadeInUp 1s ease-out forwards;
          }

          .animate-fadeInLeft {
            animation: fadeInLeft 1s ease-out forwards;
          }

          .animate-fadeInRight {
            animation: fadeInRight 1s ease-out forwards;
          }

          .animate-slideInScale {
            animation: slideInScale 1.2s ease-out forwards;
          }

          .animate-zoomIn {
            animation: zoomIn 0.8s ease-out forwards;
          }

          .animate-bounceIn {
            animation: bounceIn 1.5s ease-out forwards;
          }

          .animate-slideUp {
            animation: slideUp 1s ease-out forwards;
          }

          .animate-rotateIn {
            animation: rotateIn 1s ease-out forwards;
          }

          .wiggle:hover {
            animation: wiggle 0.5s ease-in-out;
          }

          .hover-lift {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .hover-lift:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          }

          .text-glow {
            text-shadow: 0 0 20px rgba(248, 194, 10, 0.5);
          }

          .card-hover {
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            transform-style: preserve-3d;
          }

          .card-hover:hover {
            transform: translateY(-15px) rotateX(5deg) rotateY(5deg);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
          }

          @keyframes gradientShift {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          .gradient-animate {
            background-size: 200% 200%;
            animation: gradientShift 4s ease infinite;
          }

          .stagger-1 { animation-delay: 0.1s; }
          .stagger-2 { animation-delay: 0.2s; }
          .stagger-3 { animation-delay: 0.3s; }
          .stagger-4 { animation-delay: 0.4s; }
          .stagger-5 { animation-delay: 0.5s; }
          .stagger-6 { animation-delay: 0.6s; }
          .stagger-7 { animation-delay: 0.7s; }
          .stagger-8 { animation-delay: 0.8s; }
        `}</style>

          {/* Decorative Background Images with Enhanced Animation */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://fastprintguys.com/wp-content/uploads/2025/06/Group.png"
              alt=""
              width="186"
              height="124"
              className="absolute top-[5%] left-[2%] float pulse opacity-90 hover:opacity-100 transition-opacity duration-300"
            />

            <img
              src="https://fastprintguys.com/wp-content/uploads/2025/06/Vector-1.png"
              alt=""
              width="166"
              height="101"
              className="absolute bottom-[8%] right-[3%] float-alt wiggle opacity-90 hover:opacity-100 transition-opacity duration-300"
            />

            <img
              src="https://fastprintguys.com/wp-content/uploads/2025/06/image-309.png"
              alt=""
              width="232"
              height="302"
              className="absolute top-[12%] right-[10%] float pulse opacity-80 hover:opacity-100 transition-all duration-500"
            />

            <img
              src="https://fastprintguys.com/wp-content/uploads/2025/06/Group-1261153638.png"
              alt=""
              width="179"
              height="175"
              className="absolute bottom-[15%] left-[8%] float-alt opacity-80 hover:opacity-100 transition-all duration-500"
            />
          </div>

          {/* Hero Content with Enhanced Animations */}
          <div className="relative z-10 flex flex-col justify-start items-center text-center px-4 min-h-screen pt-20">
            <h1
              className="text-[50px] font-bold mb-2 animate-bounceIn text-glow"
              style={{
                fontFamily: "'Lobster', cursive",
                fontSize: '50px',
                fontWeight: '700',
                color: '#f8c20a',
              }}
            >
              Fast Print Guys
            </h1>

            <h2
              className="text-[50px] leading-[60px] font-bold mb-4 animate-fadeInUp stagger-2"
              style={{
                fontFamily: '"Plus Jakarta Sans New Font", Sans-serif',
                color: '#FFFFFF',
              }}
            >
              Unbeatable Premium Printing<br />Service Speed &amp; Quality
            </h2>

            <p className="text-white text-lg max-w-2xl mb-6 animate-fadeInUp stagger-3">
              Fast, affordable, and reliable printing services – no hidden fees, no quality compromise.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-slideInScale stagger-4">
              <button
                onClick={handleQuoteClick}
                className="px-6 py-3 text-white rounded-full text-sm font-medium border border-transparent transition-all duration-500 hover:bg-transparent hover:border-[#f8c20a] cursor-pointer hover-lift pulse"
                style={{
                  backgroundColor: '#F8C20A',
                  fontFamily: '"Plus Jakarta Sans New Font", Sans-serif',
                  fontSize: '16px',
                  fontWeight: 500,
                }}
              >
                Get an Instant Quote Now
              </button>

              <h3
                className="text-[20px] font-bold leading-[26px] text-center md:text-left wiggle text-glow"
                style={{
                  fontFamily: "'Lobster', cursive",
                  color: '#f8c20a',
                }}
              >
                Start Your Order – 10%<br />Off First Print!
              </h3>
            </div>
          </div>
        </div>

      </div>
      {/* Services Section with Enhanced Animations */}
      <div className="w-full min-h-screen flex justify-center items-center px-0 py-10 bg-transparent -mt-12 rounded-t-lg">
        <div
          className="w-full min-h-screen rounded-none backdrop-blur-[200px] bg-gradient-to-br from-blue-100 via-pink-100 to-blue-100 gradient-animate flex flex-col items-start text-left px-8 py-12"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          data-animate
          id="services-section"
        >
          {/* Heading */}
          <h2 className="text-5xl font-extrabold mb-4 text-gray-900 pl-12 animate-fadeInLeft">
            <span>Our </span>
            <span className="text-blue-600">Services</span>
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 text-xl max-w-4xl mb-12 leading-relaxed pl-12 animate-fadeInLeft stagger-2">
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
                  className={`bg-white rounded-2xl shadow-md border border-gray-300 p-8 flex flex-col justify-between text-left transition-all duration-500 card-hover animate-slideUp stagger-${index + 1}`}
                >
                  <h3 className="text-2xl font-semibold text-blue-600 mb-5 animate-zoomIn stagger-2">{title}</h3>
                  <p className="text-gray-700 text-base leading-relaxed animate-fadeInUp stagger-3">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="w-full bg-gray-100 -mt-6">
        <div className="max-w-[1400px] mx-auto rounded-3xl overflow-hidden p-6 space-y-8">

          {/* First Div */}
          <div
            className="w-full flex flex-col md:flex-row items-center text-white p-8 md:p-12 rounded-2xl min-h-[320px] animate-slideInScale hover-lift"
            style={{
              background:
                "linear-gradient(195.35deg, #F8C20A 19.33%, #EE831E 81.45%)",
            }}
            data-animate
            id="book-printing-section"
          >
            <div className="md:w-1/2 flex flex-col justify-center md:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fadeInLeft">
                Book Printing and Publishing
              </h2>
              <p className="text-base md:text-lg leading-relaxed animate-fadeInLeft stagger-2">
                Our book printing services provide high-quality prints for authors,
                publishers, and businesses. We offer customizable options for paper,
                binding, and finishes, ensuring your book is professionally produced
                and ready for distribution.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src={bg1}
                alt="Book Printing"
                className="w-full max-w-[480px] rounded-lg shadow-lg object-contain animate-fadeInRight hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Second Div */}
          <div
            className="w-full flex flex-col md:flex-row-reverse items-center text-white p-8 md:p-12 rounded-2xl min-h-[320px] animate-slideInScale stagger-2 hover-lift"
            style={{
              background:
                "linear-gradient(90deg, #016AB3 16.41%, #0096CD 60.03%, #00AEDC 87.93%)",
            }}
            data-animate
            id="print-solutions-section"
          >
            <div className="md:w-1/2 flex flex-col justify-center md:pl-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fadeInRight">Premium Print Solutions</h2>
              <p className="text-base md:text-lg leading-relaxed animate-fadeInRight stagger-2">
                Discover top-quality printing services tailored to your needs. From business
                essentials to custom creations, we deliver sharp, vibrant prints with fast
                turnaround times and competitive prices. Our commitment to excellence ensures
                every project makes a lasting impression.
              </p>

            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src={bg2}
                alt="Print Shop"
                className="w-full max-w-[480px] rounded-lg shadow-lg object-contain animate-fadeInLeft hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Third Div */}
          <div
            className="w-full flex flex-col md:flex-row-reverse items-center text-white p-8 md:p-12 rounded-2xl min-h-[320px] animate-slideInScale stagger-3 hover-lift"
            style={{
              background:
                "linear-gradient(90deg, #D15D9E 38.04%, #5D4495 121.51%)",
            }}
            data-animate
            id="guides-section"
          >
            <div className="md:w-1/2 flex flex-col justify-center md:pl-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fadeInRight">
                Guides & Templates
              </h2>
              <p className="text-base md:text-lg leading-relaxed animate-fadeInRight stagger-2">
                Explore our collection of helpful guides and templates to simplify
                your book creation process. From manuscript formatting to cover
                design, our resources provide step-by-step instructions to ensure your
                project is a success.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src={bg3}
                alt="Guides and Templates"
                className="w-full max-w-[480px] rounded-lg shadow-lg object-contain animate-fadeInLeft hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </section>

      <div className="w-full bg-white px-8 py-16" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        {/* Heading & Paragraph */}
        <div className="max-w-[1440px] mx-auto mb-12" data-animate id="products-header">
          <h2 className="text-5xl font-extrabold text-left mb-4 animate-bounceIn">
            <span className="text-black">Our </span>
            <span className="text-blue-600">Products</span>
          </h2>
          <p className="text-black text-lg max-w-3xl animate-fadeInUp stagger-2">
            Offers custom book printing services with over 3,000 possible sizes, paper types, and binding option combinations.
          </p>
        </div>

        {/* Product Cards */}
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Print Book",
              description:
                "Personalized book printing for memoirs, novels, cookbooks, workbooks, children's books, and much more is our specialty.",
              img: c1,
            },
            {
              title: "YearBook",
              description:
                "A children's book captivates young readers with imaginative stories and vibrant illustrations. It aims to entertain while imparting...",
              img: c2,
            },
            {
              title: "Photo Book",
              description:
                "A photo book beautifully captures cherished memories through carefully curated images, allowing you to tell your story..",
              img: c3,
            },
            {
              title: "E-book",
              description:
                "An e-book offers a convenient and accessible way to read, allowing users to enjoy literature on various devices anytime, anywhere.",
              img: c4,
            },
            {
              title: "Business Card",
              description:
                "A business card is a professional tool that presents your contact information and brand identity succinctly. It serves as a memorable",
              img: c5,
            },
            {
              title: "Flyer",
              description:
                "A flyer is a cost-effective marketing tool designed to grab attention and convey essential information quickly. Ideal for promoting events..",
              img: c6,
            },
            {
              title: "Brochures",
              description:
                "Brochures are informative printed materials that present detailed information about a company, product, or service in a visually..",
              img: c7,
            },
            {
              title: "EDDM & DDM Marketing",
              description:
                "EDDM and DDM marketing are strategies that allow businesses to reach targeted audiences through physical mail.",
              img: c8,
            },
          ].map(({ title, description, img }, index) => (
            <div
              key={title}
              className={`bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 transition-all duration-500 card-hover cursor-pointer flex flex-col animate-rotateIn stagger-${index + 1}`}
            >
              <img src={img} alt={title} className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-blue-600 mb-3 animate-zoomIn stagger-2">{title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed flex-grow animate-fadeInUp stagger-3">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full py-16 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-50 gradient-animate">
        <div className="max-w-[1440px] mx-auto">

          {/* Top Row: Heading + Button */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12" data-animate id="portfolio-header">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slideInScale">
                <span className="text-black">Our </span>
                <span className="text-blue-600">Portfolio</span>
              </h2>
              <p className="text-gray-800 max-w-2xl animate-fadeInUp stagger-2">
                Quality book printing at a reasonable price. Check pricing, format variations, retail pricing,
                and shipping for custom books or calendars.
              </p>
            </div>
 <button
      onClick={() => navigate("/portfolio")}
      className="mt-6 md:mt-0 flex justify-center items-center px-6 py-3 rounded-full text-white font-medium text-base hover-lift animate-bounceIn stagger-3"
      style={{
        background: "linear-gradient(90deg, #016AB3 16.41%, #0096CD 60.03%, #00AEDC 87.93%)"
      }}
    >
      View All
    </button>
          </div>

          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 card-hover animate-slideUp">
              <img
                src={image29}
                alt="Portfolio 1"
                className="w-full h-72 object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 card-hover animate-slideUp stagger-2">
              <img
                src={image30}
                alt="Portfolio 2"
                className="w-full h-72 object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 card-hover animate-slideUp stagger-3">
              <img
                src={image31}
                alt="Portfolio 3"
                className="w-full h-72 object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>

          {/* Second row - 2 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 card-hover animate-slideUp stagger-4">
              <img
                src={image32}
                alt="Portfolio 4"
                className="w-full h-72 object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 card-hover animate-slideUp stagger-5">
              <img
                src={image33}
                alt="Portfolio 5"
                className="w-full h-72 object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>

        </div>
      </div>

      <div className="w-full py-16 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-50 gradient-animate">
        <div className="max-w-[1440px] mx-auto">

          {/* Top Row: Heading + Button */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12" data-animate id="blogs-header">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slideInScale">
                <span className="text-black">Our Latest </span>
                <span className="text-blue-600">Blogs</span>
              </h2>
              <p className="text-gray-800 max-w-2xl animate-fadeInUp stagger-2">
                Explore our latest blogs for insightful articles and engaging content on various topics.
                Stay updated with trends, tips, and expert advice that can inspire and inform your journey!
              </p>
            </div>

            <button
              className="mt-6 md:mt-0 flex justify-center items-center px-6 py-3 rounded-full text-white font-medium text-base hover-lift animate-bounceIn stagger-3"
              style={{
                background: "linear-gradient(90deg, #016AB3 16.41%, #0096CD 60.03%, #00AEDC 87.93%)"
              }}
            >
              View All Blogs
            </button>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 card-hover animate-rotateIn">
              <div className="relative group overflow-hidden">
                <img
                  src={image34}
                  alt="Benefits of Book Writing Services"
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute bottom-3 right-3 bg-white/80 text-gray-800 text-sm px-3 py-1 rounded-full shadow animate-pulse">
                  June 16, 2025
                </span>
              </div>
              <div className="p-5 flex flex-col h-full">
                <h3 className="text-blue-600 text-lg font-semibold mb-2 animate-zoomIn stagger-2">
                  Benefits of Book Writing Services
                </h3>
                <p className="text-gray-600 flex-grow animate-fadeInUp stagger-3">
                  Inner Blogs Advantages of Book Writing Services Many who aspire to writing their book
                  find it an unachievable goal in…
                </p>
                <button
                  className="mt-4 self-start px-5 py-2 rounded-full text-white font-medium text-sm hover-lift animate-slideUp stagger-4"
                  style={{
                    background: "linear-gradient(90deg, #016AB3 16.41%, #0096CD 60.03%, #00AEDC 87.93%)"
                  }}
                >
                  Read More
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 card-hover animate-rotateIn stagger-2">
              <div className="relative group overflow-hidden">
                <img
                  src={image35}
                  alt="Benefits of Book Publishing Services"
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute bottom-3 right-3 bg-white/80 text-gray-800 text-sm px-3 py-1 rounded-full shadow animate-pulse">
                  June 16, 2025
                </span>
              </div>
              <div className="p-5 flex flex-col h-full">
                <h3 className="text-blue-600 text-lg font-semibold mb-2 animate-zoomIn stagger-2">
                  Benefits of Book Publishing Services
                </h3>
                <p className="text-gray-600 flex-grow animate-fadeInUp stagger-3">
                  Inner Blogs The Advantages of Book Publishing Services: Why Authors Need
                  Professional Assistance Publishing a book can be an arduous…
                </p>
                <button
                  className="mt-4 self-start px-5 py-2 rounded-full text-white font-medium text-sm hover-lift animate-slideUp stagger-4"
                  style={{
                    background: "linear-gradient(90deg, #016AB3 16.41%, #0096CD 60.03%, #00AEDC 87.93%)"
                  }}
                >
                  Read More
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 card-hover animate-rotateIn stagger-3">
              <div className="relative group overflow-hidden">
                <img
                  src={image36}
                  alt="Benefits of EDDM and DMM Services"
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute bottom-3 right-3 bg-white/80 text-gray-800 text-sm px-3 py-1 rounded-full shadow animate-pulse">
                  June 13, 2025
                </span>
              </div>
              <div className="p-5 flex flex-col h-full">
                <h3 className="text-blue-600 text-lg font-semibold mb-2 animate-zoomIn stagger-2">
                  Benefits of EDDM and DMM Services
                </h3>
                <p className="text-gray-600 flex-grow animate-fadeInUp stagger-3">
                  Inner Blogs In today's digital era, many businesses have transitioned their marketing
                  activities online. Our guide to EDDM and DMM…
                </p>
                <button
                  className="mt-4 self-start px-5 py-2 rounded-full text-white font-medium text-sm hover-lift animate-slideUp stagger-4"
                  style={{
                    background: "linear-gradient(90deg, #016AB3 16.41%, #0096CD 60.03%, #00AEDC 87.93%)"
                  }}
                >
                  Read More
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="w-full py-16 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">

          {/* Heading */}
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-4 animate-bounceIn" data-animate id="testimonials-header">
            <span className="text-black">What Our </span>
            <span className="text-blue-600">Clients</span>
            <span className="text-black"> Says</span>
          </h2>

          {/* Subtext */}
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12 animate-fadeInUp stagger-2">
            Not only should you rely on our word-of-mouth recommendations; here are comments
            from customers on our printing capabilities:
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Card 1 */}
            <div className="flex bg-gray-50 rounded-xl shadow-md overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-slideUp card-hover">
              {/* Text */}
              <div className="flex flex-col justify-center p-6 flex-1">
                <p className="text-gray-700 mb-4 animate-fadeInLeft stagger-2">
                  Having self-published, I have used several printers. The best mix of speed, cost, and quality among Fast Print Guys is found here. My books look great!
                </p>
                <p className="font-semibold animate-zoomIn stagger-3">Michael T.</p>
                <p className="text-sm text-gray-500 animate-fadeInUp stagger-4">Author</p>
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
            <div className="flex bg-gray-50 rounded-xl shadow-md overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-slideUp stagger-2 card-hover">
              {/* Text */}
              <div className="flex flex-col justify-center p-6 flex-1">
                <p className="text-gray-700 mb-4 animate-fadeInLeft stagger-2">
                  Fast Print Guys rescued my event! In six hours, I needed 500 flyers, and they produced PERFECT printing on schedule. Unbelievably excellent service!
                </p>
                <p className="font-semibold animate-zoomIn stagger-3">Sarah</p>
                <p className="text-sm text-gray-500 animate-fadeInUp stagger-4">Director of Marketing</p>
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

      <section className="w-full py-32 bg-white"> {/* Increased vertical padding */}
        <div className="max-w-[1600px] mx-auto px-12" data-animate id="partners-section"> {/* Wider max width and padding */}
          {/* Heading */}
          <h2 className="text-center text-5xl md:text-6xl font-extrabold mb-12 animate-bounceIn">
            <span className="text-black">Our </span>
            <span className="text-blue-600">Partner</span>
          </h2>

          {/* Scrolling logos */}
          <div className="overflow-hidden relative">
            <div className="flex animate-scroll will-change-transform space-x-24 hover:animation-play-state-paused">
              {/* Duplicate logos for seamless scroll */}
              {[image43, image39, image40, image41, image43, image42, image39, image40, image41, image42, image43].map((logo, idx) => (
                <img
                  key={idx}
                  src={logo}
                  alt={`Brand ${idx + 1}`}
                  className="h-32 w-auto object-contain hover:scale-110 transition-transform duration-300 wiggle" // Increased height to 32
                />
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    .animate-scroll {
      animation: scroll 20s linear infinite;
    }
    .animate-scroll:hover {
      animation-play-state: paused;
    }
  `}</style>
      </section>

      <section className="w-full py-16 px-6 bg-[#E6EEFA]">
        <div className="max-w-[900px] mx-auto" data-animate id="faq-section">
          {/* Heading */}
          <h2 className="text-center text-3xl md:text-4xl font-bold text-black mb-4 animate-bounceIn">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto animate-fadeInUp stagger-2">
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
                  "Yes! Our in-house design team can help you create professional and eye-catching designs for your print materials, whether you're starting from scratch or refining existing artwork."
              },
              {
                question: "Can you handle bulk printing orders?",
                answer:
                  "Absolutely. We have the capacity and equipment to handle large-volume printing while maintaining high quality and competitive pricing."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className={`bg-[#2A428C] rounded-lg overflow-hidden shadow animate-slideUp stagger-${index + 1} card-hover`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className={`w-full text-left px-6 py-4 font-semibold flex justify-between items-center transition-all duration-500 ${openIndex === index
                      ? "bg-[#3B5BBF] transform scale-105"
                      : "hover:bg-[#3B5BBF] hover:transform hover:scale-102"
                    } text-white wiggle`}
                >
                  <span className="animate-fadeInLeft">{faq.question}</span>
                  <span className={`text-xl font-bold transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''} animate-pulse`}>
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="bg-white text-black px-6 py-4 transition-all duration-500 ease-in-out animate-fadeInUp">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

    </>
  );
};

export default Home;