"use client";

import React from "react";
import { RefreshCcw, Coins, Briefcase } from "lucide-react";

const Choose = () => {
  const features = [
    {
      icon: <RefreshCcw className="w-10 h-10 text-[#429AFF]" />,
      title: "Dual Profiles",
      description: "Switch between personal and business accounts in one tap.",
    },
    {
      icon: <Coins className="w-10 h-10 text-[#429AFF]" />,
      title: "Earn Rewards",
      description: "Collect tokens and unlock premium features effortlessly.",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-[#429AFF]" />,
      title: "Business Ready",
      description: "Promote, analyze, and grow with built-in business tools.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10 px-4 sm:px-8 md:px-12 lg:flex-row">
      {features.map((item, idx) => (
        <div
          key={idx}
          style={{
            background: "linear-gradient(180deg, #F2FAFF 0%, #DFF2FF 100%)",
            boxShadow: "0px 13px 11.4px -8px #0077CC33",
          }}
          className="w-full max-w-[325px] rounded-xl flex flex-col items-center text-center p-6"
        >
          <div className="mb-4">{item.icon}</div>
          <h3 className="text-xl sm:text-2xl font-semibold text-[#429AFF] mb-2">
            {item.title}
          </h3>
          <p className="text-sm sm:text-base text-[#351C45]">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Choose;
