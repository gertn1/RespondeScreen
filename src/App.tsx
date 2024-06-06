

import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './theme/globalstyle';
import { NewSidebar } from './components/NewSidebar/Sidebar';
import { Topo } from './components/App/Topo/Topo';
import {FloatingIcon} from './components/Icon/SidebarIcon';
import Home from './components/pages/Home/IndexHome';
import { Backdrop } from './components/NewSidebar/styles';



const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) { // Considera tablets e desktops
        setIsSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Topo />
      <NewSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <FloatingIcon isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Home isOpen={isSidebarOpen} />
      <Backdrop isOpen={isSidebarOpen} onClick={toggleSidebar} />
    </>
  );
};

export default App;
