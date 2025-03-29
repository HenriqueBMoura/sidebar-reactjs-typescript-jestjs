import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar from "./Sidebar";
import "@testing-library/jest-dom";
import React from "react";

describe("Sidebar", () => {
  test("renders the sidebar menu items", () => {
    render(<Sidebar />);

    // expect(screen.getByText(/React Test/i)).toBeInTheDocument();
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

  test("display icons and titles when the sidebar is opened", () => {
    render(<Sidebar />);

    const sidebarText = screen.getByText(/Dashboard/i);
    expect(sidebarText).toBeInTheDocument();

    const sidebarIcons = screen.getAllByRole("img");
    expect(sidebarIcons.length).toBe(7);
    // expect(sidebarIcons).toHaveLength(7);
  });

  test("display only icons when the sidebar is closed by clicking the toggle button", () => {
    render(<Sidebar />);

    const toggleButton = screen.getByRole("button");
    fireEvent.click(toggleButton);

    const sidebarText = screen.getByText(/Dashboard/i);
    expect(sidebarText).toHaveStyle("display: none");
  });

});