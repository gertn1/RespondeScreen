
// // import React, { useState } from 'react';
// // import { BrowserRouter as Router } from 'react-router-dom';
// // import { GlobalStyle } from './theme/globalstyle';
// // import { Sidebar } from './components/App/SideBar/Sidebar';
// // import { Topo } from './components/App/Topo/Topo';

// // const App: React.FC = () => {
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// //   const toggleSidebar = () => {
// //     setIsSidebarOpen(!isSidebarOpen);
// //   };

// //   return (
// //     <>
// //       <GlobalStyle /> 
// //       <Router>
// //         <Topo/> 
// //         <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
// //         <div style={{ marginLeft: isSidebarOpen ? '250px' : '0', transition: 'margin-left 0.3s ease-in-out' }}>
// //           <h1>Welcome to Our Site!</h1>
// //         </div>
// //       </Router>
// //     </>
// //   );
// // };

// // export default App;

// // // App.js
// // import React, { useState } from 'react';
// // import { BrowserRouter as Router } from 'react-router-dom';
// // import { GlobalStyle } from './theme/globalstyle';
// // import { Sidebar } from './components/App/SideBar/Sidebar';
// // import { Topo } from './components/App/Topo/Topo';
// // import { FloatingIcon } from './components/App/SideBar/Icon/SidebarIcon';  // Importando FloatingIcon

// // const App = () => {
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// //   const toggleSidebar = () => {
// //     setIsSidebarOpen(!isSidebarOpen);
// //   };

// //   return (
// //     <>
// //       <GlobalStyle /> 
// //       <Router>
// //         <Topo /> 
// //         <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
// //         <FloatingIcon toggleSidebar={toggleSidebar} />  // Passa toggleSidebar para o FloatingIcon
// //         <div style={{ marginLeft: isSidebarOpen ? '250px' : '0', transition: 'margin-left 0.3s ease-in-out' }}>
// //           <h1>Welcome to Our Site!</h1>
// //         </div>
// //       </Router>
// //     </>
// //   );
// // };

// // export default App;

// // import React, { useState } from 'react';
// // import { BrowserRouter as Router } from 'react-router-dom';
// // import { GlobalStyle } from './theme/globalstyle';  // Certifique-se de que o nome do arquivo está correto
// // import { Sidebar } from './components/App/SideBar/Sidebar';
// // import { Topo } from './components/App/Topo/Topo';
// // import { FloatingIcon } from './components/App/SideBar/Icon/SidebarIcon';  // Verifique se esta é a localização correta do arquivo

// // const App = () => {
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// //   const toggleSidebar = () => {
// //     setIsSidebarOpen(!isSidebarOpen);
// //   };

// //   return (
// //     <>
// //       <GlobalStyle />
// //       <Router>
// //         <Topo />
// //         <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
// //         <FloatingIcon isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
// //         <div style={{ marginLeft: isSidebarOpen ? '250px' : '0', transition: 'margin-left 0.3s ease-in-out' }}>
// //           <h1>Welcome to Our Site!</h1>
// //         </div>
// //       </Router>
// //     </>
// //   );
// // };

// // export default App;


// import React, { useState } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { GlobalStyle } from './theme/globalstyle';
// import { Sidebar } from './components/App/SideBar/Sidebar';
// import { Topo } from './components/App/Topo/Topo';
// import { FloatingIcon } from './components/App/SideBar/Icon/SidebarIcon';  // Verifique se esta é a localização correta do arquivo

// const App = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <>
//       <GlobalStyle />
//       <Router>
//         <Topo />
//         <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//         <FloatingIcon isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//         <div style={{ marginLeft: isSidebarOpen ? '250px' : '0', transition: 'margin-left 0.3s ease-in-out' }}>
//           <h1>Welcome to Our Site!</h1>
//         </div>
//       </Router>
//     </>
//   );
// };

// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './theme/globalstyle';
import { Sidebar } from './components/App/SideBar/Sidebar';
import { Topo } from './components/App/Topo/Topo';
import { FloatingIcon } from './components/App/SideBar/Icon/SidebarIcon';  // Verifique se esta é a localização correta do arquivo

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
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <FloatingIcon isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
        <div style={{ marginLeft: isSidebarOpen ? '250px' : '0', transition: 'margin-left 0.3s ease-in-out' }}>
          <h1>Welcome to Our Site!</h1>
        </div>
      </Router>
    </>
  );
};

export default App;
