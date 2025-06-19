import React from "react";
import {
  Users,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Newspaper,
  UserCircle,
} from "lucide-react";
const CampSection = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-[#429AFF]" />,
      title: "Real-Time Matching",
      description:
        "Instantly connect with people who share your vibe, goals, or interests.",
    },
    {
      icon: <MapPin className="w-8 h-8 text-[#429AFF]" />,
      title: "Explore Nearby",
      description:
        "Discover people, events, and hangouts around your current location.",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-[#429AFF]" />,
      title: "Seamless Chat",
      description: "Start conversations easily with smooth, secure messaging.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#429AFF]" />,
      title: "Safety First",
      description:
        "Control your experience with built-in privacy and safety tools.",
    },
    {
      icon: <Newspaper className="w-8 h-8 text-[#429AFF]" />,
      title: "Community Feed",
      description:
        "Share thoughts and updates. See what others are up to in real time.",
    },
    {
      icon: <UserCircle className="w-8 h-8 text-[#429AFF]" />,
      title: "Smart Profiles",
      description:
        "Express yourself and find others through personalized, rich profiles.",
    },
  ];

  return (
    <div className="py-16 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
        {features.map((feature, index) => (
          <div key={index} className=" p-6  text-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4 mx-auto shadow-md">
              <div>{feature.icon}</div>
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
