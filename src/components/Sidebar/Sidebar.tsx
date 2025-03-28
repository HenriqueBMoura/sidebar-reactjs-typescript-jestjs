import React, { useState } from "react";
import {
  SidebarContainer,
  SidebarText,
  ToggleButton,
  MenuList,
  MenuItemContainer,
} from "./SidebarComponents";

import menuList from "./SidebarData";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <SidebarContainer data-testid="sidebar-container" $isOpen={isOpen}>
      <ToggleButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "<" : ">"}
      </ToggleButton>
      <MenuList>
        <h2>React Test</h2>

        {menuList.map((item) => (
          <MenuItemContainer key={item.title} role="img">
            {item.icon}
            <SidebarText $isOpen={isOpen}>{item.title}</SidebarText>
          </MenuItemContainer>
        ))}
      </MenuList>
    </SidebarContainer>
  );
};

export default Sidebar;
