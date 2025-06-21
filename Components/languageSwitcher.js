"use client";

import { useLanguage } from "@/app/context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="text-sm border border-gray-300 rounded px-2 py-1 bg-white text-[#429AFF] font-medium"
    >
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="it">Italiano</option>
      <option value="de">Deutsch</option>
    </select>
  );
};

export default LanguageSwitcher;
