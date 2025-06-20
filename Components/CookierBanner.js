"use client";

import { useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50 shadow-lg">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between px-1 items-center">
        <p className="text-sm mb-2 md:mb-0">
          🍪 This is a dummy cookie banner. We use cookies to make this site
          work properly. No real cookies are being used. This is just for
          testing!
        </p>
        <button
          onClick={() => setVisible(false)}
          className="mt-2 md:mt-0 bg-orange-500 hover:bg-orange-600 text-white  rounded h-8 flex justify-center items-center w-13 px-1"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
