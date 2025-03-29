import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./Sidebar";
import "@testing-library/jest-dom";

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("Sidebar", () => {
  test("renders the sidebar menu items", () => {
    renderWithRouter(<Sidebar />);

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
    renderWithRouter(<Sidebar />);

    const toggleButton = screen.getByRole("button");
    const sidebar = screen.getByTestId("sidebar-container");

    expect(sidebar).toHaveStyle("width: 250px");

    fireEvent.click(toggleButton);
    expect(sidebar).toHaveStyle("width: 75px");

    fireEvent.click(toggleButton);
    expect(sidebar).toHaveStyle("width: 250px");
  });

  test("display icons and titles when the sidebar is opened", () => {
    renderWithRouter(<Sidebar />);

    const sidebarText = screen.getByText(/Dashboard/i);
    expect(sidebarText).toBeInTheDocument();

    const sidebarIcons = screen.getAllByRole("img");
    expect(sidebarIcons.length).toBe(7);
    // expect(sidebarIcons).toHaveLength(7);
  });

  test("display only icons when the sidebar is closed by clicking the toggle button", () => {
    renderWithRouter(<Sidebar />);

    const toggleButton = screen.getByRole("button");
    fireEvent.click(toggleButton);

    const sidebarText = screen.getByText(/Dashboard/i);
    expect(sidebarText).toHaveStyle("display: none");
  });
});