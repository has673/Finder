"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Ali R.",
    feedback:
      "Switching between my personal and business profiles is so smooth. It feels like two apps in one!",
  },
  {
    name: "Fatima K.",
    feedback:
      "I love earning tokens just by checking in and watching quick ads. It makes using the app rewarding!",
  },
  {
    name: "Hassan M.",
    feedback:
      "As a business owner, the built-in website link and analytics helped me attract more clients effortlessly.",
  },
  {
    name: "Zara T.",
    feedback:
      "The swipe-up and story privacy controls give me full control over who sees my content. Game changer!",
  },
  {
    name: "Bilal A.",
    feedback:
      "Finally, an app that respects privacy while still being social. Finder is my go-to daily app.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev + 1 > testimonials.length - itemsPerPage ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? testimonials.length - itemsPerPage : prev - 1
    );
  };

  const visible = testimonials.slice(currentIndex, currentIndex + itemsPerPage);

  // For wrap-around when at the end
  const wrappedVisible =
    visible.length < itemsPerPage
      ? [...visible, ...testimonials.slice(0, itemsPerPage - visible.length)]
      : visible;

  return (
    <div className="bg-[#429AFF] text-white py-8 md:py-12 px-4">
      <div className="text-center mb-6 md:mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">What Our Users Say</h2>
        <p className="text-xs md:text-sm mt-2">
          Real feedback from people growing with Finder
        </p>
      </div>

      <div className="flex justify-center gap-4 md:gap-6 flex-wrap transition-all duration-300">
        {wrappedVisible.map((item, idx) => (
          <div
            key={idx}
            className="bg-white text-[#351C45] rounded-xl p-4 md:p-6 w-full max-w-[300px] shadow-md"
          >
            <h3 className="font-bold text-lg mb-3 text-center">{item.name}</h3>
            <p className="text-sm text-center">{item.feedback}</p>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center gap-4 mt-6 md:mt-8">
        <button
          onClick={prevTestimonial}
          className="w-8 h-8 md:w-10 md:h-10 bg-white text-[#429AFF] rounded-full flex items-center justify-center shadow-md"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextTestimonial}
          className="w-8 h-8 md:w-10 md:h-10 bg-white text-[#429AFF] rounded-full flex items-center justify-center shadow-md"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
