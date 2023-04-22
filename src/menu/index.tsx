import { NavLink, routes } from "@package/routes";
import { useColors, palette } from "@package/ui";

export const Menu = () => {
  return (
    <ul
      css={{
        margin: 0,
        padding: 0,
        display: "flex",
      }}
    >
      <Item to={routes.blogs} text="Blogs" />
      <Item to={routes.places} text="Places" />
      <Item to={routes.myJourney} text="My journeys" />
    </ul>
  );
};

const Item = ({ to, text }: { to: string; text: string }) => {
  const colors = useColors();

  return (
    <li
      css={{
        display: "flex",
        alignItems: "center",
        listStyle: "none",
      }}
    >
      <NavLink
        to={to}
        css={{
          color: colors.color,
          padding: "5px 20px",
          textDecoration: "none",
          textTransform: "uppercase",
          transition: ".2s",
          fontFamily: "Roboto, sans-serif",
          "&:hover": [
            {
              opacity: "0.8",
            },
          ],
          "&.active": {
            backgroundColor: colors.control,
            color: palette.white,
          },
        }}
      >
        {text}
      </NavLink>
    </li>
  );
};
