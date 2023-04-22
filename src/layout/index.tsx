import { type ReactNode, useState, useEffect } from "react";

import { useColors } from "@package/ui";

import { Header } from "./header";
import { Footer } from "./footer";

export const Layout = ({ children }: { children: ReactNode }) => {
  const colors = useColors();
  const [isShrink, setShrink] = useState(false);

  useEffect(() => {
    const handler = () => {
      setShrink((isShrink) => {
        if (
          !isShrink &&
          (document.body.scrollTop > 25 ||
            document.documentElement.scrollTop > 25)
        ) {
          return true;
        }

        if (
          isShrink &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false;
        }

        return isShrink;
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      css={{
        margin: "0",
        padding: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: colors.layout,
        fontFamily: "sans-serif",
      }}
    >
      <Header type={isShrink ? "float" : "transparent"} />
      <main
        css={{
          maxWidth: "1920px",
          marigin: "0 auto",
          padding: "0",
          boxSizing: "border-box",
          width: "100%",
          flexGrow: 1,
        }}
      >
        <section>{children}</section>
      </main>
      <Footer />
    </div>
  );
};
