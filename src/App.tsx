
import React, { useState } from 'react';
import { GlobalStyle } from './theme/globalstyle';
import { Sidebar } from './components/NewSidebar/Sidebar';
import { Topo } from './components/App/Topo/Topo';
import {FloatingIcon} from './components/NewSidebar/SidebarIcon/SidebarIcon';
import Home from './components/pages/Home/IndexHome';
import { Backdrop } from './components/NewSidebar/styles';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  
  return (
    <>
      <GlobalStyle />
      <Topo/>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <FloatingIcon isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Home isOpen={isSidebarOpen} />
      <Backdrop isOpen={isSidebarOpen} onClick={toggleSidebar} />
    </>
  );
};

export default App;
