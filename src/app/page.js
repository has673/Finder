"use client";
import CampSection from "../../Components/CampSection";
import Choose from "../../Components/Choose";
import ContactForm from "../../Components/ContacForm";
import CookieBanner from "../../Components/CookierBanner";
import Features from "../../Components/Features";
import Main from "../../Components/Main";
import Testimonials from "../../Components/Testimonials";
import { useLanguage } from "./context/LanguageContext";
import "./globals.css";
export default function Home() {
  const { t } = useLanguage();
  return (
    <div className="bg-[#f0faff]">
      <Main />
      <CookieBanner />
      <div id="about">
        <CampSection />
        <div>
          <h1 className="text-[#429AFF] text-3xl lg:text-[54px] font-bold ml-4 lg:ml-14 mt-12">
            {t.app}
          </h1>
          <p className=" text-[black] text-lg sm:text-xl md:text-2xl lg:text-[28px] font-normal ml-4 sm:ml-8 md:ml-14 "></p>{" "}
        </div>

        <Choose />
        <Features />
        <Testimonials />
      </div>

      <ContactForm />
    </div>
  );
}
