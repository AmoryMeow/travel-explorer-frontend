import { useTranslation } from "@package/i18n";
import "./i18n/config";

function App() {
  const { t, i18n } = useTranslation(["common", "hello"]);

  const changeLanguage = (language: string) => () => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <h1>{t(`hello:welcome`, { name: "<username>" })}</h1>
      <button>{t("button_ok")}</button>
      <button>{t("button_cancel")}</button>
      <button onClick={changeLanguage("en")}>English</button>
      <button onClick={changeLanguage("ru")}>Russian</button>
    </>
  );
}

export default App;
