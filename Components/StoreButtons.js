import Image from "next/image";
import React from "react";

const StoreButtons = () => {
  return (
    <div className="flex items-center gap-4 bg-[#429AFF] rounded-full px-4 py-2 w-fit shadow-md">
      <a
        href="https://apps.apple.com/pk/app/my-pocket-muslim/id6740291256"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center p-2"
      >
        <Image
          src="/icons/applelogo.png"
          alt="Google Play"
          className="w-8 h-8"
          width={10}
          height={10}
        />
      </a>
      <div className="h-6 w-px bg-purple-400" />
      <a
        href="https://play.google.com/store/apps/details?id=com.finder.app"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center p-2"
      >
        <Image
          src="/icons/googleypng.png"
          alt="Apple Store"
          className="w-8 h-8"
          width={10}
          height={10}
        />
      </a>
    </div>
  );
};

export default StoreButtons;
