import { useState } from "react";
import { useTranslation } from "@package/i18n";
import langs from "./langs.json";

import { Select } from "@package/ui";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
  };

  const languageOptions = Object.entries(langs).map((item) => {
    return {
      value: item[0],
      label: item[1],
    };
  });

  return (
    <>
      <Select
        selected={currentLanguage}
        options={languageOptions}
        onChange={changeLanguage}
      />
    </>
  );
};
