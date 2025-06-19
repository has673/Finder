import Image from "next/image";

const Features = () => {
  return (
    <div>
      {/* Heading Section */}
      <h1 className="text-[#429AFF] mt-12 text-3xl md:text-5xl lg:text-[54px] font-bold text-center md:text-left md:ml-14 px-4 md:px-0">
        Key Features
      </h1>
      <span className="text-[#000000] font-normal text-lg md:text-2xl block text-center md:text-left md:ml-14 px-4 md:px-0">
        Discover how Finder helps you connect with the world around you.
      </span>

      <div className="flex flex-col">
        {/* Real-Time Matching */}
        <div className="flex flex-col md:flex-row items-center px-4 md:px-[120px] py-6 md:py-10 gap-8 md:gap-16 md:justify-between">
          <div className="flex flex-col max-w-xl text-center md:text-left">
            <h2 className="text-[#429AFF] text-3xl md:text-4xl font-bold mb-2 md:mb-4">
              Real-Time Matching
            </h2>
            <span className="text-[#000000] text-base md:text-xl font-normal">
              Instantly connect with people nearby who share your interests,
              values, or goals. Swipe, chat, and meet — effortlessly.
            </span>
          </div>
          <Image
            src="/feature4.png"
            height={567}
            width={519}
            alt="real-time matching"
            className="object-contain w-full max-w-[350px] md:max-w-[519px] h-125  "
          />
        </div>

        {/* Explore Nearby */}
        <div className="flex flex-col-reverse md:flex-row items-center px-4 md:px-[120px] py-6 md:py-10 gap-8 md:gap-16">
          <Image
            src="/feature2.png"
            height={567}
            width={519}
            alt="explore nearby"
            className="object-contain w-full max-w-[350px] md:max-w-[519px] h-125"
          />
          <div className="flex flex-col max-w-xl text-center md:text-left">
            <h2 className="text-[#429AFF] text-3xl md:text-4xl font-bold mb-2 md:mb-4">
              Community Feed
            </h2>
            <span className="text-[#000000] text-base md:text-xl font-normal">
              Share updates, photos with your network. Discover what others are
              up to through a personalized feed built around your interests.
            </span>
          </div>
        </div>

        {/* Global Connections */}
        <div className="flex flex-col md:flex-row items-center px-4 md:px-[120px] py-6 md:py-10 gap-8 md:gap-16">
          <div className="flex flex-col max-w-xl text-center md:text-left">
            <h2 className="text-[#429AFF] text-3xl md:text-4xl font-bold mb-2 md:mb-4">
              Seamless Chat
            </h2>
            <span className="text-[#000000] text-base md:text-xl font-normal">
              Start conversations instantly with real people.Our smooth and
              secure chat makes connecting easy and natural.
            </span>
          </div>
          <Image
            src="/feature3.png"
            height={567}
            width={519}
            alt="global connections"
            className="object-contain w-full max-w-[350px] md:max-w-[519px] h-125"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
