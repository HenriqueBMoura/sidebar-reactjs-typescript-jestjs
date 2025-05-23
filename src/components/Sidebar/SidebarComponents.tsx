import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  width: ${(props) => (props.$isOpen ? "250px" : "75px")};
  height: 100vh;
  padding: 20px 10px 20px 20px;
  background-color: #3e065f;
  color: #ffffff;
  transition: width 0.5s ease-in-out;
  position: relative;
`;

export const ToggleButton = styled.button`
  position: absolute;
  top: 20px;
  right: -20px;
  width: 40px;
  height: 40px;
  color: #ffffff;
  background-color: #8E05C2;
  border: 2px solid #ffffff;
  border-radius: 50%;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

export const SidebarTitle = styled.h2<{ $isOpen: boolean }>`
  font-size: 24px;
  margin-bottom: 30px;
  padding: 10px;
  &:before {
    content: "${(props) => (props.$isOpen ? "Testing" : "Test")}";
  }
`;

// export const MenuItemContainer = styled.li`
export const MenuItemContainer = styled(Link)<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  padding: 12px;
  margin-top: 10px;
  color: #ffffff;
  gap: 10px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s;
  background-color: ${props => props.$isActive ? '#8E05C2' : 'transparent'};

  &:hover {
    background-color: #700B97;
    color: #ffffff;
  }

  svg {
    font-size: 20px;
  }
`;

export const SidebarText = styled.span<{ $isOpen?: boolean }>`
  display: ${(props) => (props.$isOpen ? "inline" : "none")};
`;
