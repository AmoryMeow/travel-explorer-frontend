import { useTranslation, LanguageSwitcher } from "@package/i18n";
import { useColors, ThemeSwitcher } from "@package/ui";

function App() {
  const { t, i18n } = useTranslation(["common", "hello"]);

  const colors = useColors();
  return (
    <>
      <h1
        css={{
          color: i18n.language === "ru" ? "green" : "blue",
          backgroundColor: colors.background,
        }}
      >
        {t(`hello:welcome`, { name: "<username>" })}
      </h1>
      <button>{t("button_ok")}</button>
      <button>{t("button_cancel")}</button>
      <LanguageSwitcher />
      <ThemeSwitcher />
    </>
  );
}

export default App;
