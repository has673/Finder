"use client";

import Image from "next/image";
import Header from "./Header";
import { useMediaQuery } from "@/app/hooks/use-mobile";
import LanguageSwitcher from "./languageSwitcher";
import { useLanguage } from "@/app/context/LanguageContext";

const Main = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { t } = useLanguage();

  return (
    <div
      style={{
        background: "linear-gradient(360deg, #FFFFFF 0%, #CDEFFF 100%)",
      }}
      className="overflow-hidden pt-20"
      id="top"
    >
      <Header />
      <div className="hidden md:flex items-center justify-center">
        <LanguageSwitcher />
      </div>

      <div className="flex flex-col md:flex-row md:justify-between px-4 md:px-0 pb-8 md:pb-0">
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left mt-6 md:mt-0">
          <h1 className="fade-in-up text-[#429AFF] text-3xl md:text-5xl lg:text-[54px] font-bold md:ml-14 max-w-full md:max-w-xl ">
            {t.main}
          </h1>
          <div className="flex flex-col gap-y-0 mt-5 ">
            {" "}
            <div
              className="mt-2 md:ml-[130px] md:mt-1 w-[200px] md:w-auto cursor-pointer"
              onClick={() =>
                window.open(
                  "https://apps.apple.com/pk/app/my-pocket-muslim/id6740291256",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <Image
                src="/icons/appstoreicon.png"
                width={260}
                height={10}
                alt="playstore"
              />
            </div>
            <div
              className="mt-2 md:ml-[130px] w-[200px] md:w-auto cursor-pointeroverflow-hidden"
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.finder.app",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <Image
                src="/icons/play.png"
                width={260}
                height={70}
                alt="playstore"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-0 flex justify-center ">
          <Image
            src="/export.png"
            width={isMobile ? 400 : 700}
            height={isMobile ? 400 : 600}
            alt="export"
            className="w-full max-w-[400px] md:max-w-none h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
