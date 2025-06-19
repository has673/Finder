import CampSection from "../../Components/CampSection";
import Choose from "../../Components/Choose";
import ContactForm from "../../Components/ContacForm";
import Features from "../../Components/Features";
import Main from "../../Components/Main";
import Testimonials from "../../Components/Testimonials";

export default function Home() {
  return (
    <div className="bg-[#f0faff]">
      <Main />

      <div id="about">
        <CampSection />
        <div>
          {/*
          <h1 className="text-[#429AFF] text-3xl lg:text-[54px] font-bold ml-4 lg:ml-14 mt-12">
            Why Choose Our App?
          </h1>
           <p className=" text-[black] text-lg sm:text-xl md:text-2xl lg:text-[28px] font-normal ml-4 sm:ml-8 md:ml-14 ">
            Built Around Your Needs, Every Step of the Way
          </p>{" "}
          */}
        </div>

        {/* <Choose /> */}
        <Features />
        <Testimonials />
      </div>

      <ContactForm />
    </div>
  );
}
