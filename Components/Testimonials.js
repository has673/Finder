"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Yasmine",
    lines: [
      "Finally, an Islamic app that has everything in one place!",
      "The Zakat calculator saved me hours!",
      "Clean design, super helpful during Hajj.",
    ],
  },
  {
    name: "Yasmine",
    lines: [
      "Finally, an Islamic app that has everything in one place!",
      "The Zakat calculator saved me hours!",
      "Clean design, super helpful during Hajj.",
    ],
  },
  {
    name: "Yasmine",
    lines: [
      "Finally, an Islamic app that has everything in one place!",
      "The Zakat calculator saved me hours!",
      "Clean design, super helpful during Hajj.",
    ],
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleTestimonials = () => {
    // On mobile, show only one testimonial
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return [testimonials[currentIndex]];
    }

    // On tablet, show two testimonials if available
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      return testimonials.slice(currentIndex, currentIndex + 2);
    }

    // On desktop, show all testimonials
    return testimonials;
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1 >= testimonials.length ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-[#429AFF] text-white py-8 md:py-12 px-4">
      <div className="text-center mb-6 md:mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">Testimonials</h2>
        <p className="text-xs md:text-sm mt-2">
          Hear how others have found the Nomad Nurse experience
        </p>
      </div>

      <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
        {visibleTestimonials().map((item, idx) => (
          <div
            key={idx}
            className="bg-white text-[#351C45] rounded-xl p-4 md:p-6 w-full max-w-[300px] shadow-md"
          >
            <h3 className="font-bold text-lg mb-3 text-center">{item.name}</h3>
            {item.lines.map((line, index) => (
              <p key={index} className="text-xs md:text-sm text-center mb-1">
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center gap-4 mt-6 md:mt-8">
        <button
          onClick={prevTestimonial}
          className="w-8 h-8 md:w-10 md:h-10 bg-white text-[#429AFF] rounded-full flex items-center justify-center shadow-md"
        >
          <ChevronLeft size={16} className="md:size-20" />
        </button>
        <button
          onClick={nextTestimonial}
          className="w-8 h-8 md:w-10 md:h-10 bg-white text-[#429AFF] rounded-full flex items-center justify-center shadow-md"
        >
          <ChevronRight size={16} className="md:size-20" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
