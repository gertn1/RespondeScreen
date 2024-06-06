
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { BrowserRouter as Router } from 'react-router-dom';
// // // // // import { GlobalStyle } from './theme/globalstyle';
// // // // // import { NewSidebar } from './components/NewSidebar/NewSidebar';
// // // // // import { Topo } from './components/App/Topo/Topo';
// // // // // import { FloatingIcon } from './components/Icon/SidebarIcon';

// // // // // const App: React.FC = () => {
// // // // //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// // // // //   const toggleSidebar = () => {
// // // // //     setIsSidebarOpen(!isSidebarOpen);
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     const handleResize = () => {
// // // // //       if (window.innerWidth > 768) { // Considera tablets e desktops
// // // // //         setIsSidebarOpen(false);
// // // // //       }
// // // // //     };

// // // // //     handleResize();
// // // // //     window.addEventListener('resize', handleResize);

// // // // //     return () => {
// // // // //       window.removeEventListener('resize', handleResize);
// // // // //     };
// // // // //   }, []);

// // // // //   return (
// // // // //     <>
// // // // //       <GlobalStyle />
// // // // //       <Router>
// // // // //         <Topo />
// // // // //         <NewSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
// // // // //         <FloatingIcon isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
// // // // //         <div style={{ transition: 'margin-left 0.3s ease-in-out', marginLeft: isSidebarOpen && window.innerWidth > 768 ? '250px' : '0' }}>
// // // // //           <h1>Welcome to Our Site!</h1>
// // // // //         </div>
// // // // //       </Router>
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default App;


// // // // import React, { useState, useEffect } from 'react';
// // // // import { BrowserRouter as Router } from 'react-router-dom';
// // // // import { GlobalStyle } from './theme/globalstyle';
// // // // import { NewSidebar } from './components/NewSidebar/NewSidebar';
// // // // import { Topo } from './components/App/Topo/Topo';
// // // // import {FloatingIcon} from './components/Icon/SidebarIcon';
// // // // import ContentContainer from './components/App/Container/ContentContainer';

// // // // const App: React.FC = () => {
// // // //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// // // //   const toggleSidebar = () => {
// // // //     setIsSidebarOpen(!isSidebarOpen);
// // // //   };

// // // //   useEffect(() => {
// // // //     const handleResize = () => {
// // // //       if (window.innerWidth > 768) { // Considera tablets e desktops
// // // //         setIsSidebarOpen(false);
// // // //       }
// // // //     };

// // // //     handleResize();
// // // //     window.addEventListener('resize', handleResize);

// // // //     return () => {
// // // //       window.removeEventListener('resize', handleResize);
// // // //     };
// // // //   }, []);

// // // //   return (
// // // //     <>
// // // //       <GlobalStyle />
// // // //       <Router>
// // // //         <Topo />
// // // //         <NewSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
// // // //         <FloatingIcon isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
// // // //         <ContentContainer isOpen={isSidebarOpen} />
// // // //       </Router>
// // // //     </>
// // // //   );
// // // // };

// // // // export default App;


// // // import React, { useState, useEffect } from 'react';
// // // import { BrowserRouter as Router } from 'react-router-dom';
// // // import { GlobalStyle } from './theme/globalstyle';
// // // import { NewSidebar } from './components/NewSidebar/NewSidebar';
// // // import { Topo } from './components/App/Topo/Topo';
// // // import {FloatingIcon} from './components/Icon/SidebarIcon';
// // // import ContentContainer from './components/App/Container/ContentContainer';

// // // const App: React.FC = () => {
// // //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// // //   const toggleSidebar = () => {
// // //     setIsSidebarOpen(!isSidebarOpen);
// // //   };

// // //   useEffect(() => {
// // //     const handleResize = () => {
// // //       if (window.innerWidth > 768) { // Considera tablets e desktops
// // //         setIsSidebarOpen(false);
// // //       }
// // //     };

// // //     handleResize();
// // //     window.addEventListener('resize', handleResize);

// // //     return () => {
// // //       window.removeEventListener('resize', handleResize);
// // //     };
// // //   }, []);

// // //   return (
// // //     <>
// // //       <GlobalStyle />
// // //       <Router>
// // //         <Topo />
// // //         <NewSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
// // //         <FloatingIcon isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
// // //         <ContentContainer isOpen={isSidebarOpen} />
// // //       </Router>
// // //     </>
// // //   );
// // // };

// // // export default App;


// // import React, { useState, useEffect } from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import { GlobalStyle } from './theme/globalstyle';
// // import { NewSidebar } from './components/NewSidebar/NewSidebar';
// // import { Topo } from './components/App/Topo/Topo';
// // import {FloatingIcon} from './components/Icon/SidebarIcon';
// // import Home from './components/pages/home';

// // const App: React.FC = () => {
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// //   const toggleSidebar = () => {
// //     setIsSidebarOpen(!isSidebarOpen);
// //   };

// //   useEffect(() => {
// //     const handleResize = () => {
// //       if (window.innerWidth > 768) { // Considera tablets e desktops
// //         setIsSidebarOpen(false);
// //       }
// //     };

// //     handleResize();
// //     window.addEventListener('resize', handleResize);

// //     return () => {
// //       window.removeEventListener('resize', handleResize);
// //     };
// //   }, []);

// //   return (
// //     <>
// //       <GlobalStyle />
// //       <Router>
// //         <Topo />
// //         <NewSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
// //         <FloatingIcon isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
// //         <Routes>
// //           <Route path="/">
// //             <Home />
// //           </Route>
// //         </Routes>
// //       </Router>
// //     </>
// //   );
// // };

// // export default App;


// import React, { useState, useEffect } from 'react';
// import { GlobalStyle } from './theme/globalstyle';
// import { NewSidebar } from './components/NewSidebar/NewSidebar';
// import { Topo } from './components/App/Topo/Topo';
// import {FloatingIcon} from './components/Icon/SidebarIcon';
// import Home from './components/pages/home';

// const App: React.FC = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth > 768) { // Considera tablets e desktops
//         setIsSidebarOpen(false);
//       }
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <>
//       <GlobalStyle />
//       <Topo />
//       <NewSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//       <FloatingIcon isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//       <div style={{ transition: 'margin-left 0.3s ease-in-out', marginLeft: isSidebarOpen && window.innerWidth > 768 ? '250px' : '0' }}>
//         <Home />
//       </div>
//     </>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './theme/globalstyle';
import { NewSidebar } from './components/NewSidebar/NewSidebar';
import { Topo } from './components/App/Topo/Topo';
import {FloatingIcon} from './components/Icon/SidebarIcon';
import Home from './components/pages/home';

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
    </>
  );
};

export default App;
