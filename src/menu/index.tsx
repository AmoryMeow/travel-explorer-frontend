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
      <Item text="Blogs" active />
      <Item text="Places" />
      <Item text="My journeys" />
      <Item text="Sign up" active />
    </ul>
  );
};

const Item = ({ text, active }: { text: string; active?: boolean }) => {
  const colors = useColors();

  return (
    <li
      css={{
        display: "flex",
        alignItems: "center",
        listStyle: "none",
      }}
    >
      <a
        href="#"
        css={{
          color: colors.color,
          padding: "5px 20px",
          textDecoration: "none",
          textTransform: "uppercase",
          transition: ".2s",
          fontFamily: "Roboto, sans-serif",
          ...(active && {
            backgroundColor: colors.control,
            color: palette.white,
          }),
          "&:hover": [
            {
              opacity: "0.8",
            },
          ],
        }}
      >
        {text}
      </a>
    </li>
  );
};
