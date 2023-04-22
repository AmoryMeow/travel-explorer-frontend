import { useTranslation, LanguageSwitcher } from "@package/i18n";
import { useColors, ThemeSwitcher } from "@package/ui";
import { Layout } from "@package/layout";

function App() {
  const { t, i18n } = useTranslation(["common", "hello"]);

  const colors = useColors();
  return (
    <Layout>
      <h1
        css={{
          color: i18n.language === "ru" ? "green" : "blue",
          backgroundColor: colors.background,
          margin: 0,
        }}
      >
        {t(`hello:welcome`, { name: "<username>" })}
      </h1>
      <button>{t("button_ok")}</button>
      <button>{t("button_cancel")}</button>
      <LanguageSwitcher />
      <ThemeSwitcher />
    </Layout>
  );
}

export default App;
