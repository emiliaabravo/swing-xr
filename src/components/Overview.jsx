import React from 'react';
import { ChevronDown } from 'lucide-react';

const Overview = () => {
  return (
    <section id="overview" className="relative h-100 xs:h-110 sm:h-120 md:130 lg:h-[80vh] xl:h-[90vh] xxl:h-[100vh] xxxl:h-[120vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background image fully fills viewport regardless of screen size */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/golf-placeholder.jpg"
          alt="Golf Course"
          className="w-full h-full object-cover object-center scale-[1.1] sm:scale-[1.12] md:scale-[1.13] lg:scale-[1.14] brightness-[1.1] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
      </div>

      {/* Central content */}
      <div className="relative z-10 text-center text-white px-4">
        <p className="text-[6vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] font-extrabold tracking-tight drop-shadow-2xl mb-4">
          SWING XR
        </p>
        <p className="text-[4vw] sm:text-[3.5vw] md:text-[3vw] lg:text-[2.5vw] font-light drop-shadow-xl">
          An immersive VR Golf experience
        </p>

        <p className="text-[3vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.5vw] font-semibold mt-4">
          A swing into the future
        </p>

        <button
          onClick={() => {
            const nextSection = document.querySelector('section#Demo') || document.querySelector('section:nth-of-type(2)');
            if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
          }}
          className="mt-20 bg-white text-black rounded-full p-6 shadow-2xl hover:bg-gray-100 hover:scale-110 transition-all duration-300 cursor-pointer animate-bounce hover:animate-none"
          aria-label="Scroll to next section"
        >
          <ChevronDown size={40} strokeWidth={2.5} />
        </button>
      </div>
    </section>
  );
};

export default Overview;

