import { useTranslation, LanguageSwitcher } from "@package/i18n";
import "./i18n/config";

function App() {
  const { t, i18n } = useTranslation(["common", "hello"]);

  return (
    <>
      <h1
        css={{
          color: i18n.language === "ru" ? "green" : "blue",
        }}
      >
        {t(`hello:welcome`, { name: "<username>" })}
      </h1>
      <button>{t("button_ok")}</button>
      <button>{t("button_cancel")}</button>
      <LanguageSwitcher />
    </>
  );
}

export default App;
