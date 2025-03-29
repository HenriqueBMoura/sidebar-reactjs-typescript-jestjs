# React TypeScript Sidebar Component - Unit Testing Guide

A practical guide to unit testing React components, demonstrated through a customizable sidebar navigation. This project showcases best practices in testing React components using Jest and React Testing Library, along with TypeScript type safety and modern styling solutions.

## 🎯 Learning Objectives

- Understanding Jest testing patterns with React components
- Writing meaningful test assertions and test cases
- Implementing React Testing Library best practices
- Testing styled-components behaviors
- Mocking React Router and context providers
- Handling component state in tests
- Testing user interactions and animations
- Achieving high test coverage with meaningful tests

## 🚀 Features

- Comprehensive test suite with Jest and RTL
- Test coverage reports and analysis
- Integration tests with React Router
- Component state testing
- Event handling tests
- Accessibility testing
- Responsive design testing
- Animation and transition tests
- TypeScript type safety validation

## 🛠️ Technologies & Testing Tools

- Jest 29.7 (Test Runner)
- React Testing Library 16.2
- TypeScript 5.7
- React 19.x
- Styled Components 6.1
- React Router DOM 7.4
- ts-jest (TypeScript preprocessor)
- jest-dom (DOM testing utilities)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/HenriqueBMoura/sidebar-reactjs-typescript-jestjs.git

# Navigate to project directory
cd sidebar-reactjs-typescript-jestjs

# Install dependencies
npm install

# Run test suite
npm test

# Run tests with coverage
npm test -- --coverage
```

## 🔨 Usage

```tsx
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Container>
        <Sidebar />
        <Content>
          <Routes>
            <Route path="/" element={
                <>
                  <h1>Bem-vindo ao Manager</h1>
                  <p>Selecione uma opção no menu lateral.</p>
                </>
              } />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/messages" element={<Messages />} />
            {/* ... other routes */}
            </Routes>
        </Content>
      </Container>
    </Router>
  );
};
```

## 🧪 Testing

The component includes comprehensive test coverage:

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm test -- --coverage
```

## 📁 Project Structure

```
src/
├── components/
│   └── Sidebar/
│       ├── Sidebar.tsx
│       ├── SidebarComponents.tsx
│       ├── SidebarData.tsx
│       └── Sidebar.test.tsx
├── test/
│   └── setup/
│       └── jest.setup.ts
└── App.tsx
```

## 🎨 Customization

The sidebar can be customized through styled-components:

```tsx
// Custom theme example
const CustomSidebar = styled(Sidebar)`
  background-color: #3E065F;
  width: ${props => props.$isOpen ? '250px' : '75px'};
`;
```

## 📄 License

MIT License - feel free to use this component in your projects.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ✨ Acknowledgments

- [Jest](https://jestjs.io/) - Delightful JavaScript Testing Framework
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Testing utilities for React
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [React Icons](https://react-icons.github.io/react-icons/) - Popular icons in your React projects
- [Styled Components](https://styled-components.com/) - Visual primitives for the component age
- [React Router](https://reactrouter.com/) - Declarative routing for React
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [ts-jest](https://kulshekhar.github.io/ts-jest/) - TypeScript preprocessor for Jest

Special thanks to:
- The React community for continuous support and inspiration
- Contributors to all the open-source projects that make this possible
- Documentation teams that make learning these tools accessible