
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './theme/globalstyle';
import { NewSidebar } from './components/NewSidebar/NewSidebar';
import { Topo } from './components/App/Topo/Topo';
import { FloatingIcon } from './components/Icon/SidebarIcon';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Router>
        <Topo />
        <NewSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <FloatingIcon isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div style={{ marginLeft: isSidebarOpen ? '250px' : '0', transition: 'margin-left 0.3s ease-in-out' }}>
          <h1>Welcome to Our Site!</h1>
        </div>
      </Router>
    </>
  );
};

export default App;
