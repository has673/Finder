"use client";

import React from "react";
import {
  Users,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Newspaper,
  UserCircle,
} from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

const iconList = [
  <Users className="w-8 h-8 text-[#429AFF]" />,
  <MapPin className="w-8 h-8 text-[#429AFF]" />,
  <MessageCircle className="w-8 h-8 text-[#429AFF]" />,
  <ShieldCheck className="w-8 h-8 text-[#429AFF]" />,
  <Newspaper className="w-8 h-8 text-[#429AFF]" />,
  <UserCircle className="w-8 h-8 text-[#429AFF]" />,
];

const CampSection = () => {
  const { t } = useLanguage();
  const features = t.camp_features;

  return (
    <div className="py-16 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="p-6 text-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4 mx-auto shadow-md">
              {iconList[index]}
            </div>
            <h3 className="text-xl font-bold text-[#429AFF]">
              {feature.title}
            </h3>
            <p className="text-gray-700 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampSection;
