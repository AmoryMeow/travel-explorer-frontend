import { useState } from "react";
import { useTranslation } from "@package/i18n";
import langs from "./langs.json";

import { Dropdown } from "@package/ui";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = (language: string) => () => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
  };

  const languageOptions = Object.entries(langs).map((item) => {
    return {
      id: item[0],
      label: item[1],
      onClick: changeLanguage(item[0]),
    };
  });

  return <Dropdown options={languageOptions} selected={currentLanguage} />;
};
