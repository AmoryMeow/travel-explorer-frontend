import { useState, MouseEvent } from "react";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Check from "@mui/icons-material/Check";

type Options = { id: string; label: string; onClick: () => void }[];

type DropdownProps = {
  selected: string;
  options: Options;
};

export function Dropdown({ options, selected }: DropdownProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const onClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="dropdown-button"
        aria-controls={open ? "dropdown-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={onClick}
      >
        {selected}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        MenuListProps={{
          "aria-labelledby": "dropdown-button",
        }}
      >
        {options.map((item) => (
          <Item
            key={item.id}
            label={item.label}
            onClick={() => {
              item.onClick();
              onClose();
            }}
            active={selected === item.id}
          />
        ))}
      </Menu>
    </div>
  );
}

const Item = ({
  label,
  onClick,
  active = false,
}: {
  label: string;
  onClick: () => void;
  active?: boolean;
}) => {
  return (
    <MenuItem onClick={onClick}>
      <ListItemIcon>{active && <Check />}</ListItemIcon>
      {label}
    </MenuItem>
  );
};
