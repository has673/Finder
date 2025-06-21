"use client";

import React from "react";
import { RefreshCcw, Coins, Briefcase } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

const icons = [
  <RefreshCcw key="refresh" className="w-10 h-10 text-[#429AFF]" />,
  <Coins key="coin" className="w-10 h-10 text-[#429AFF]" />,
  <Briefcase key="case" className="w-10 h-10 text-[#429AFF]" />,
];

const Choose = () => {
  const { t } = useLanguage();
  const features = t.choose_features;

  return (
    <div className="py-10 px-4 sm:px-8 md:px-12">
      <div className="flex flex-col items-center justify-center gap-6 lg:flex-row">
        {features.map((item, idx) => (
          <div
            key={idx}
            style={{
              background: "linear-gradient(180deg, #F2FAFF 0%, #DFF2FF 100%)",
              boxShadow: "0px 13px 11.4px -8px #0077CC33",
            }}
            className="w-full max-w-[325px] rounded-xl flex flex-col items-center text-center p-6"
          >
            <div className="mb-4">{icons[idx]}</div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#429AFF] mb-2">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base text-[#351C45]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choose;
