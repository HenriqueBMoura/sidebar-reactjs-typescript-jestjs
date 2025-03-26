import { render, screen } from '@testing-library/react';
import Sidebar from './Sidebar';
import '@testing-library/jest-dom';
import React from 'react';

describe('Sidebar', () => {
  test('renders the sidebar menu items', () => {
    render(<Sidebar />);
    expect(screen.getByText(/SideBar Jest Test/i)).toBeInTheDocument();
  });
});