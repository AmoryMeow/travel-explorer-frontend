import { useColors } from "@package/ui";

export const Footer = () => {
  const colors = useColors();

  return (
    <footer
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80px",
        padding: "10px 50px",
        color: colors.color,
      }}
    >
      &copy; copyright 2023
    </footer>
  );
};
