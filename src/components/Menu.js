import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HamMenu = () => {
  return (
    <div className="absolute top-[14px] left-[349px] w-5 h-5">
      <Menu>
        <MenuButton
          style={{ padding: 0, backgroundColor: "transparent" }}
          as={Button}
        >
          <img className="" alt="" src="../menu.svg" />
        </MenuButton>
        <MenuList style={{ marginRight: "21px" }}>
          <MenuItem style={{ color: "#262626" }}>
            <Link to="/passport">My Passport</Link>
          </MenuItem>
          <MenuItem style={{ color: "#262626" }}>
            <Link to="/hunts">Collect</Link>
          </MenuItem>
          <MenuItem style={{ color: "#262626" }}>
            <Link to="/sell">Buy</Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default HamMenu;
