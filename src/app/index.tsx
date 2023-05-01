import { ConfigProvider, theme as baseTheme } from "antd";

import { useTranslation } from "@package/i18n";
import { Routes, Route, routes } from "@package/routes";
import { useColors, useTheme } from "@package/ui";
import { Layout } from "@package/layout";

function App() {
  const { t, i18n } = useTranslation(["common", "hello"]);
  const { theme } = useTheme();
  const colors = useColors();
  const { defaultAlgorithm, darkAlgorithm } = baseTheme;

  return (
    <ConfigProvider
      theme={{
        algorithm: theme === "dark" ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <Layout>
        <Routes>
          <Route
            path={routes.home}
            element={
              <>
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
              </>
            }
          />
          <Route path={routes.blogs} element={<>blogs</>} />
          <Route path={routes.places} element={<>places</>} />
          <Route path={routes.myJourney} element={<>my journey</>} />
          <Route path={routes.profile} element={<>profile</>} />
        </Routes>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
