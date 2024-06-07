
import React, { useState } from 'react';
import { GlobalStyle } from './theme/globalstyle';
import { Sidebar } from './components/App/Sidebar/Sidebar/Sidebar';
import { Topo } from './components/App/Topo/Topo';
import {SidebarIcon} from './components/App/Sidebar/SidebarIcon/SidebarIcon';
import Home from './components/pages/Home/IndexHome/Home';
// import { Backdrop } from './components/NewSidebar/styles';

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
      <SidebarIcon isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Home isOpen={isSidebarOpen} />
      
    </>
  );
};

export default App;
