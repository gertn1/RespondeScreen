import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./theme/globalstyle";
import { Sidebar } from "./components/App/Sidebar/Sidebar/Sidebar";
import { Topo } from "./components/App/Topo/Topo";
import Home from "./components/pages/Home/IndexHome/Home";
import About from "./components/pages/About/About";

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <GlobalStyle />
      <Topo />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Routes>
        <Route path="/home" element={<Home isOpen={isSidebarOpen} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
