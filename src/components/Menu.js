import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

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
          <MenuItem style={{ color: "#262626" }}>My Passport</MenuItem>
          <MenuItem style={{ color: "#262626" }}>Collect</MenuItem>
          <MenuItem style={{ color: "#262626" }}>Buy</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default HamMenu;
