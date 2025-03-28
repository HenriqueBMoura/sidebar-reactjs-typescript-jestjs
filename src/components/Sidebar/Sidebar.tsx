import React, { useState } from "react";
import {
  SidebarContainer,
  SidebarText,
  ToggleButton,
  MenuList,
  MenuItemContainer,
} from "./SidebarComponents";
import {
  FaChartBar,
  FaEnvelope,
  FaUser,
  FaCalendar,
  FaSearch,
  FaFolder,
  FaCog,
} from "react-icons/fa";
interface MenuItem {
  title: string;
  icon: React.ReactNode;
  path: string;
}

const menuList: MenuItem[] = [
  {
    icon: <FaChartBar />,
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <FaEnvelope />,
    title: "Mensagens",
    path: "/messages",
  },
  {
    icon: <FaUser />,
    title: "Usuários",
    path: "/profile",
  },
  {
    icon: <FaCalendar />,
    title: "Calendário",
    path: "/calendar",
  },
  {
    icon: <FaSearch />,
    title: "Pesquisar",
    path: "/search",
  },
  {
    icon: <FaFolder />,
    title: "Arquivos",
    path: "/files",
  },
  {
    icon: <FaCog />,
    title: "Configurações",
    path: "/settings",
  },
];

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
