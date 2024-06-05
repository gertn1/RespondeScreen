// // App.tsx
// import React, { useState } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { Sidebar } from './components/SideBar/Sidebar';
// import { Topo } from './components/Topo/Topo';

// const App: React.FC = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <Router>
//       <Topo toggleSidebar={toggleSidebar} />
//       <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//       <div style={{ marginLeft: isSidebarOpen ? '250px' : '0', transition: 'margin-left 0.3s ease-in-out' }}>
//         {/* Here goes the main content of the application */}
//         <h1>Welcome to Our Site!</h1>
//         {/* Your routes and other components */}
//       </div>
//     </Router>
//   );
// };

// export default App;


// App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Sidebar } from './components/SideBar/Sidebar';
import { Topo } from './components/Topo/Topo';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
    <Topo toggleSidebar={toggleSidebar} />
    <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    <div style={{ marginLeft: isSidebarOpen ? '250px' : '0', transition: 'margin-left 0.3s ease-in-out' }}>
      {/* Here goes the main content of the application */}
      <h1>Welcome to Our Site!</h1>
      {/* Your routes and other components */}
    </div>
  </Router>
  );
  };

export default App;