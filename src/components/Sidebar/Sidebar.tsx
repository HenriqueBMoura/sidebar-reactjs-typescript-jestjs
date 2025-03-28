import React, { useState } from "react";
import styled from "styled-components";
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

const SidebarContainer = styled.div<{ $isOpen: boolean }>`
	width: ${(props) => (props.$isOpen ? "250px" : "75px")};
	height: 100vh;
	padding: 20px 10px 20px 20px;
	background-color: #3b0764;
	color: #ffffff;
	transition: width 0.5s ease-in-out;
	position: relative;
`;

const ToggleButton = styled.button`
	position: absolute;
	top: 20px;
	right: -20px;
	width: 40px;
	height: 40px;
	color: #ffffff;
	background-color: #160324;
	border: 2px solid #ffffff;
	border-radius: 50%;
	cursor: pointer;

	display: flex;
	justify-content: center;
	align-items: center;
`;

const MenuList = styled.ul`
	list-style: none;
	padding: 0;
	margin-top: 20px;
`;

const MenuItemContainer = styled.li`
	display: flex;
	align-items: center;
	padding: 12px;
	margin-top: 10px;
	gap: 10px;
	cursor: pointer;
	border-radius: 8px;
	transition: background-color 0.3s;

	&:hover {
		background-color: #ffffff;
		color: #3b0764;
	}
		
	svg {
		font-size: 20px;
	}
`;

const SidebarText = styled.span<{ $isOpen?: boolean }>`
	display: ${(props) => (props.$isOpen ? "inline" : "none")};
`;

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
