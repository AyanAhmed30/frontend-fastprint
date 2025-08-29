import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi';

import ComicBook from '../assets/images/comic.png';
import ThesisBook from '../assets/images/thesis.png';
import YearBook from '../assets/images/yearbook.png';
import Calendar from '../assets/images/calender.png';
import Magazine from '../assets/images/magzene.png';
import PrintBook from '../assets/images/pnew.png';
import PhotoBook from '../assets/images/myphoto.png';

const carouselData = [
  { name: 'Print Book', image: PrintBook, link: '/calculator/printbook', description: 'Professional book printing' },
  { name: 'Comic Book', image: ComicBook, link: '/calculator/comicbook', description: 'Vibrant comic printing' },
  { name: 'Thesis Binding', image: ThesisBook, link: '/pricing-calculator', description: 'Academic binding service' },
  { name: 'Year Book', image: YearBook, link: '/calculator/yearbook', description: 'Memory book creation' },
  { name: 'Calendar', image: Calendar, link: '/calculator/calender', description: 'Custom calendar design' },
  { name: 'Magazine', image: Magazine, link: '/calculator/magazine', description: 'Premium magazine printing' },
  { name: 'Photo Book', image: PhotoBook, link: '/calculator/photobook', description: 'Personalized photo albums' },
];

const Carousel = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const [isScrolling, setIsScrolling] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Create infinite scroll data
  const infiniteData = [...carouselData, ...carouselData, ...carouselData];

  useEffect(() => {
    if (scrollRef.current) {
      // Responsive card width calculation
      const getCardWidth = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 640) return 280; // Mobile
        if (screenWidth < 1024) return 320; // Tablet
        return 350; // Desktop
      };
      
      const cardWidth = getCardWidth() + 24; // card width + gap
      scrollRef.current.scrollLeft = cardWidth * carouselData.length;
    }
  }, []);

  const getCardWidth = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 640) return 280;
    if (screenWidth < 1024) return 320;
    return 350;
  };

  const handleScroll = () => {
    if (!scrollRef.current || isScrolling) return;

    const container = scrollRef.current;
    const cardWidth = getCardWidth() + 24;
    const totalOriginalWidth = cardWidth * carouselData.length;

    if (container.scrollLeft <= 0) {
      container.scrollLeft = totalOriginalWidth;
    } else if (container.scrollLeft >= totalOriginalWidth * 2) {
      container.scrollLeft = totalOriginalWidth;
    }
  };

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    setIsScrolling(true);
    const cardWidth = getCardWidth() + 24;
    const scrollAmount = window.innerWidth < 640 ? cardWidth : cardWidth * 2;
    
    if (direction === 'left') {
      scrollRef.current.scrollLeft -= scrollAmount;
    } else {
      scrollRef.current.scrollLeft += scrollAmount;
    }

    setTimeout(() => {
      setIsScrolling(false);
      handleScroll();
    }, 400);
  };

  const handleCardClick = (item, originalIndex) => {
    if (item.link) {
      setSelectedIndex(originalIndex);
      setTimeout(() => {
        navigate(item.link);
      }, 200);
    }
  };

  return (
    <section className="relative py-12 px-4 w-full max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
       <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent mb-4">
  Our Services
</h2>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Choose from our comprehensive range of professional printing and binding services
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth py-4 px-2"
          onScroll={handleScroll}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {infiniteData.map((item, idx) => {
            const originalIndex = idx % carouselData.length;
            const isHovered = hoveredIndex === originalIndex;
            const isSelected = selectedIndex === originalIndex;

            return (
              <div
                key={idx}
                onClick={() => handleCardClick(item, originalIndex)}
                onMouseEnter={() => setHoveredIndex(originalIndex)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  group min-w-[280px] sm:min-w-[320px] lg:min-w-[350px] 
                  max-w-[280px] sm:max-w-[320px] lg:max-w-[350px]
                  h-[280px] sm:h-[320px] lg:h-[350px]
                  flex flex-col relative overflow-hidden
                  bg-white rounded-2xl shadow-lg
                  transition-all duration-500 ease-out
                  ${item.link ? 'cursor-pointer' : 'cursor-default'}
                  ${isHovered ? 'transform -translate-y-2 shadow-2xl' : ''}
                  ${isSelected ? 'ring-4 ring-blue-500 ring-opacity-60' : ''}
                  hover:shadow-2xl border border-gray-100
                `}
              >
                {/* Image Container */}
                <div className="relative h-2/5 p-4 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`
                      w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain
                      transition-all duration-500 ease-out
                      ${isHovered ? 'transform scale-110' : ''}
                      filter drop-shadow-lg
                    `}
                  />
                  
                  {/* Hover Overlay */}
                  {item.link && (
                    <div className={`
                      absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent
                      transition-opacity duration-300
                      ${isHovered ? 'opacity-100' : 'opacity-0'}
                    `}>
                      <div className="absolute bottom-4 right-4">
                        <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-45">
                          <FiArrowRight className="text-blue-600 text-lg" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Container */}
                <div className="h-3/5 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-1 line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Action Indicator */}
                  {item.link && (
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
                        Calculate Now
                      </span>
                      <div className={`
                        transform transition-transform duration-300
                        ${isHovered ? 'translate-x-1' : ''}
                      `}>
                        <FiArrowRight className="text-blue-600 text-xs" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Animated Background Effect */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5
                  transition-opacity duration-500
                  ${isHovered ? 'opacity-100' : 'opacity-0'}
                `}></div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => scroll('left')}
          className={`
            absolute left-0 top-1/2 transform -translate-y-1/2 z-20
            w-12 h-12 lg:w-14 lg:h-14
            bg-white shadow-2xl rounded-full
            flex items-center justify-center
            transition-all duration-300 hover:scale-110
            border border-gray-200
            group
          `}
        >
          <FiChevronLeft className="text-gray-700 text-xl lg:text-2xl group-hover:text-blue-600 transition-colors duration-300" />
        </button>

        <button
          onClick={() => scroll('right')}
          className={`
            absolute right-0 top-1/2 transform -translate-y-1/2 z-20
            w-12 h-12 lg:w-14 lg:h-14
            bg-white shadow-2xl rounded-full
            flex items-center justify-center
            transition-all duration-300 hover:scale-110
            border border-gray-200
            group
          `}
        >
          <FiChevronRight className="text-gray-700 text-xl lg:text-2xl group-hover:text-blue-600 transition-colors duration-300" />
        </button>

        {/* Gradient Overlays for Edge Fade Effect */}
        <div className="absolute left-0 top-0 h-full w-8 lg:w-16 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 h-full w-8 lg:w-16 bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none z-10"></div>
      </div>

      {/* Bottom Decorative Elements */}
      <div className="flex justify-center mt-8 space-x-2">
        {carouselData.map((_, index) => (
          <div
            key={index}
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${selectedIndex === index ? 'bg-blue-500 w-8' : 'bg-gray-300'}
            `}
          ></div>
        ))}
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Carousel;