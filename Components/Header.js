"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import StoreButtons from "./StoreButtons";
import LanguageSwitcher from "./languageSwitcher";
import { useLanguage } from "@/app/context/LanguageContext";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const { t } = useLanguage();
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["top", "about", "contact"];
      const offset = 80;

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= offset && top + el.offsetHeight > offset) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // set on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 flex items-center justify-between px-4 md:px-6 py-4">
      {/* Logo */}
      <div className="flex items-center space-x-2 relative z-20">
        <Image
          src="/logo.png"
          alt="My Pocket Muslim Logo"
          width={40}
          height={40}
        />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden relative z-20 ripple rounded-full p-2 transition-all duration-200 ease-in-out"
        onClick={(e) => {
          const target = e.currentTarget;
          const circle = document.createElement("span");

          const diameter = Math.max(target.clientWidth, target.clientHeight);
          const radius = diameter / 2;

          circle.style.width = circle.style.height = `${diameter}px`;
          circle.style.left = `${
            e.clientX - target.getBoundingClientRect().left - radius
          }px`;
          circle.style.top = `${
            e.clientY - target.getBoundingClientRect().top - radius
          }px`;
          circle.classList.add("ripple");

          const ripple = target.getElementsByClassName("ripple")[0];
          if (ripple) ripple.remove();

          target.appendChild(circle);
          setMobileMenuOpen(!mobileMenuOpen);
        }}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {mobileMenuOpen ? (
          <X className="h-6 w-6 text-[#429AFF]" />
        ) : (
          <Menu className="h-6 w-6 text-[#429AFF]" />
        )}
      </button>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-10 flex flex-col items-center justify-center space-y-6 md:hidden transition-all duration-500 ease-in-out animate-fade-in">
          <button
            className={`px-6 py-2 rounded-full text-sm font-semibold ${
              activeSection === "top"
                ? "bg-[#429AFF] text-white"
                : "text-[#429AFF]"
            }`}
            onClick={() => scrollToSection("top")}
          >
            {t.home}
          </button>
          <button
            className={`px-6 py-2 rounded-full text-sm font-semibold ${
              activeSection === "about"
                ? "bg-[#429AFF] text-white"
                : "text-[#429AFF]"
            }`}
            onClick={() => scrollToSection("about")}
          >
            {t.about}
          </button>
          <button
            className={`px-6 py-2 rounded-full text-sm font-semibold ${
              activeSection === "contact"
                ? "bg-[#429AFF] text-white"
                : "text-[#429AFF]"
            }`}
            onClick={() => scrollToSection("contact")}
          >
            {t.contact}
          </button>
          <button>
            <LanguageSwitcher />
          </button>

          <div className="mt-6">
            <StoreButtons />
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:flex bg-[#429AFF] rounded-full items-center px-1 py-1 shadow-md cursor-pointer">
        <button
          className={`px-4 py-1 rounded-full text-sm font-semibold ${
            activeSection === "top" ? "bg-white text-[#429AFF]" : "text-white"
          }`}
          onClick={() => scrollToSection("top")}
        >
          {t.home}
        </button>
        <button
          className={`px-4 py-1 rounded-full text-sm font-semibold ${
            activeSection === "about" ? "bg-white text-[#429AFF]" : "text-white"
          }`}
          onClick={() => scrollToSection("about")}
        >
          {t.about}
        </button>
        <button
          className={`px-4 py-1 rounded-full text-sm font-semibold ${
            activeSection === "contact"
              ? "bg-white text-[#429AFF]"
              : "text-white"
          }`}
          onClick={() => scrollToSection("contact")}
        >
          {t.contact}
        </button>
      </nav>

      {/* App Store Combined Image - Desktop only */}
      <div className="hidden md:block">
        <StoreButtons />
      </div>
    </header>
  );
};

export default Header;
