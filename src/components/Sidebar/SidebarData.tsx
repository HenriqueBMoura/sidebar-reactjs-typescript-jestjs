import React from "react";
import { FaChartBar, FaEnvelope, FaUser, FaCalendar, FaSearch, FaFolder, FaCog } from "react-icons/fa";

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

export default menuList;