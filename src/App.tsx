import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styled from "styled-components";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from './pages/Dashboard/Dashboard';
import Messages from './pages/Messages/Messages';

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px 50px;
`;

const App: React.FC = () => {
  return (
    <Router>
      <Container>
        <Sidebar />
        <Content>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/messages" element={<Messages />} />
              {/* ... other routes */}
            </Routes>
        </Content>
      </Container>
    </Router>
  );
};

export default App;
