import { ConfigProvider, theme as baseTheme } from "antd";
import { useState, lazy, Suspense, useEffect } from "react";

import { useTranslation } from "@package/i18n";
import { Routes, Route, routes, useNavigate } from "@package/routes";
import { useColors, useTheme } from "@package/ui";
import { Layout } from "@package/layout";
import { getUserByToken, UserContextProvider, type User } from "@package/auth";

const Profile = lazy(() => import("@package/profile"));
const Auth = lazy(() => import("@package/auth"));

function App() {
  const { t, i18n } = useTranslation(["common", "hello"]);
  const { theme } = useTheme();
  const colors = useColors();
  const { defaultAlgorithm, darkAlgorithm } = baseTheme;
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState<User>();

  const onAuthorizate = () => {
    const { data } = getUserByToken();
    if (!data) {
      // navigate(routes.home);
    } else {
      setCurrentUser(data);
    }
  };

  const onLogOut = () => {
    localStorage.removeItem("token");
    setCurrentUser(undefined);
    navigate(routes.home);
  };

  useEffect(() => {
    onAuthorizate();
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm: theme === "dark" ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <UserContextProvider value={currentUser}>
        <Layout onLogOut={onLogOut}>
          <Suspense fallback={null}>
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
                      {t(`hello:welcome`, {
                        name: currentUser ? currentUser.login : "friend",
                      })}
                    </h1>
                    <button>{t("button_ok")}</button>
                    <button>{t("button_cancel")}</button>
                  </>
                }
              />
              <Route path={`${routes.blogs}/*`} element={<>blogs</>} />
              <Route path={`${routes.places}/*`} element={<>places</>} />
              <Route path={`${routes.myJourney}/*`} element={<>my journey</>} />
              <Route path={`${routes.profile}/*`} element={<Profile />} />
              <Route
                path={`${routes.login}/*`}
                element={<Auth type="login" onLogin={onAuthorizate} />}
              />
              <Route
                path={`${routes.signup}/*`}
                element={<Auth type="signup" />}
              />
              <Route path="*" element={<>page not found</>} />
            </Routes>
          </Suspense>
        </Layout>
      </UserContextProvider>
    </ConfigProvider>
  );
}

export default App;
