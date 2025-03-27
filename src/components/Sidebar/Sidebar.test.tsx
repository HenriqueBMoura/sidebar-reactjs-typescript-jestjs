import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar from "./Sidebar";
import "@testing-library/jest-dom";
import React from "react";

describe("Sidebar", () => {
  test("renders the sidebar menu items", () => {
    render(<Sidebar />);

    expect(screen.getByText(/SideBar Jest Test/i)).toBeInTheDocument();

    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Mensagens/i)).toBeInTheDocument();
    expect(screen.getByText(/Usuários/i)).toBeInTheDocument();
    expect(screen.getByText(/Calendário/i)).toBeInTheDocument();
    expect(screen.getByText(/Pesquisar/i)).toBeInTheDocument();
    expect(screen.getByText(/Arquivos/i)).toBeInTheDocument();
    expect(screen.getByText(/Configurações/i)).toBeInTheDocument();
  });

  test("toggles the sidebar when the toggle button is clicked", () => {
    render(<Sidebar />);

    const toggleButton = screen.getByRole("button");
    const sidebar = screen.getByTestId("sidebar-container");

    expect(sidebar).toHaveStyle("width: 250px");

    fireEvent.click(toggleButton);
    expect(sidebar).toHaveStyle("width: 75px");

    fireEvent.click(toggleButton);
    expect(sidebar).toHaveStyle("width: 250px");
  });

});