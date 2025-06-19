"use client";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function ContactInfo({ icon: Icon, title, detail }) {
  return (
    <div className="flex items-start space-x-4 p-4 rounded-xl shadow bg-[#fcf5ff]">
      <div className="bg-[#429AFF] p-2 rounded-full">
        <Icon className="text-white h-4 w-4 md:h-5 md:w-5" />
      </div>
      <div>
        <p className="font-semibold text-xs md:text-sm text-gray-600">
          {title}
        </p>
        <p className="text-gray-800 text-xs md:text-sm">{detail}</p>
      </div>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div
      className="min-h-screen bg-[#f0faff] flex flex-col justify-center items-center py-8 md:py-10 px-4"
      id="contact"
    >
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-2 text-[#222222]">
        Get in touch
      </h2>
      <p className="text-xs md:text-sm text-center text-[#4B5563] font-normal mb-6 md:mb-8">
        Drop us message to see how we can help you
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full max-w-5xl">
        <div className="space-y-4 md:space-y-6">
          <ContactInfo
            icon={MapPin}
            title="Office Address"
            detail="Street 1, Street 2, Town, AA12 2AB"
          />
          <ContactInfo
            icon={Mail}
            title="Email Address"
            detail="info@finder.com"
          />
          <ContactInfo
            icon={Phone}
            title="Phone Number"
            detail="0208 123 4567"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="p-3 border border-black  placeholder-black rounded-lg w-full"
              required
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email"
              className="p-3 border border-black   placeholder-black  rounded-lg w-full"
              required
            />
          </div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message here"
            className="p-3 border  border-black placeholder-black rounded-lg w-full h-32"
            required
          />
          <p className="text-xs text-gray-600">
            I consent to my personal data being stored and used in accordance
            with the privacy policy
          </p>
          <button
            type="submit"
            className="bg-[#429AFF] text-white py-3 px-6 rounded-lg hover:bg-purple-800 transition w-full"
          >
            Send Message
          </button>
        </form>
      </div>

      <footer className="w-full mt-8 md:mt-12 border-t pt-6 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-600 space-y-4 md:space-y-0">
          {/* Left: Policy Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:space-x-4">
            <a href="#" className="hover:underline">
              Cookie Policy
            </a>
            <a href="#" className="hover:underline">
              Privacy policy
            </a>
            <a href="#" className="hover:underline">
              Terms & conditions
            </a>
          </div>

          <div className="flex space-x-4 text-[#429AFF]">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-[#429AFF]  p-3 rounded-full md:p-4 hover:scale-105 transition">
                <Facebook className="w-6 h-6 md:w-7 md:h-7 text-[#F2FAFF]" />
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-[#429AFF]  p-3 rounded-full md:p-4 hover:scale-105 transition">
                <Instagram className="w-6 h-6 md:w-7 md:h-7 text-[#F2FAFF]" />
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-[#429AFF] p-3 rounded-full md:p-4 hover:scale-105 transition">
                <Linkedin className="w-6 h-6 md:w-7 md:h-7 text-[#F2FAFF]" />
              </div>
            </a>
          </div>
        </div>
        <p className="text-center text-xs md:text-sm text-gray-600 mt-6 md:mt-10">
          © 2025 Finder. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default ContactForm;
