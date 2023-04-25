import { colorWithOpacity, useColors } from "@package/ui";
import { Actions, Menu } from "@package/menu";
import { NavLink, routes } from "@package/routes";

import { Logo } from "./logo";

type HeaderType = "float" | "transparent";

export const Header = ({ type }: { type: HeaderType }) => {
  const colors = useColors();
  return (
    <nav
      css={{
        margin: "8px auto",
        position: "sticky",
        display: "flex",
        justifyContent: "space-between",
        top: "8px",
        maxWidth: "1920px",
        width: "100%",
        height: "100px",
        padding: "10px 100px",
        boxSizing: "border-box",
        transition: ".2s",
        borderRadius: "16px",
        ...(type === "float" && {
          height: "80px",
          padding: "10px 50px",
          backgroundColor: colorWithOpacity(colors.background, 0.5),
          boxShadow: "10px 10px 16px -16px rgba(0,0,0,0.5)",
          backdropFilter: "saturate(200%) blur(10px)",
        }),
        zIndex: 10,
      }}
    >
      <NavLink
        to={routes.home}
        css={{
          display: "flex",
          alignItems: "center",
          height: "80px",
          transition: ".2s",
          fontFamily: "Roboto, sans-serif",
          color: colors.color,
          textTransform: "uppercase",
          textDecoration: "none",
          ...(type === "float" && {
            height: "60px",
          }),
        }}
      >
        <Logo />
        <span>Travel explorer</span>
      </NavLink>
      <div css={{ display: "flex" }}>
        <Menu />
        <Actions />
      </div>
    </nav>
  );
};
