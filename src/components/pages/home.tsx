// // // import React from 'react';
// // // import Button from './Button';
// // // import Table from './Table';
// // // import styled from 'styled-components';

// // // const HomeContainer = styled.div<{ isOpen: boolean }>`
// // //   padding: 30px;
// // //   transition: margin-left 0.3s ease;
// // //   margin-left: ${({ isOpen }) => (isOpen ? '250px' : '60px')};
// // // `;

// // // const data = [
// // //   { Name: 'John Doe', Age: 28, Job: 'Developer' },
// // //   { Name: 'Jane Smith', Age: 34, Job: 'Designer' },
// // //   { Name: 'Sam Johnson', Age: 45, Job: 'Manager' }
// // // ];

// // // interface HomeProps {
// // //   isOpen: boolean;
// // // }

// // // const Home: React.FC<HomeProps> = ({ isOpen }) => {
// // //   const handleClick = () => {
// // //     alert('Button clicked!');
// // //   };

// // //   return (
// // //     <HomeContainer isOpen={isOpen}>
// // //       <h1>Home Page</h1>
// // //       <Button onClick={handleClick} label="Click Me" />
// // //       <Table data={data} />
// // //     </HomeContainer>
// // //   );
// // // };

// // // export default Home;


// // import React from 'react';
// // import Button from './Button';
// // import Table from './Table';
// // import styled from 'styled-components';

// // const HomeContainer = styled.div<{ isOpen: boolean }>`
// //   padding: 30px;
// //   transition: margin-left 0.3s ease;
// //   margin-left: ${({ isOpen }) => (isOpen ? '250px' : '60px')};
// // `;

// // const data = [
// //   { Name: 'John Doe', Age: 28, Job: 'Developer' },
// //   { Name: 'Jane Smith', Age: 34, Job: 'Designer' },
// //   { Name: 'Sam Johnson', Age: 45, Job: 'Manager' }
// // ];

// // interface HomeProps {
// //   isOpen: boolean;
// // }

// // const Home: React.FC<HomeProps> = ({ isOpen }) => {
// //   const handleClick = () => {
// //     alert('Button clicked!');
// //   };

// //   return (
// //     <HomeContainer isOpen={isOpen}>
// //       <h1>Home Page</h1>
// //       <Button onClick={handleClick} label="Click Me" />
// //       <Table data={data} />
// //     </HomeContainer>
// //   );
// // };

// // export default Home;


// import React from 'react';
// import Button from './Button';
// import Table from './Table';
// import styled from 'styled-components';

// const HomeContainer = styled.div<{ isOpen: boolean }>`
//   padding: 30px;
//   transition: margin-left 0.3s ease;
//   margin-left: ${({ isOpen }) => (isOpen ? '250px' : '60px')};

//   @media (max-width: 768px) { /* Tablet */
//     margin-left: ${({ isOpen }) => (isOpen ? '250px' : '0')};
//     padding: 20px;
//   }

//   @media (max-width: 480px) { /* Phone */
//     margin-left: 0;
//     padding: 10px;
//   }
// `;

// const data = [
//   { Name: 'John Doe', Age: 28, Job: 'Developer' },
//   { Name: 'Jane Smith', Age: 34, Job: 'Designer' },
//   { Name: 'Sam Johnson', Age: 45, Job: 'Manager' }
// ];

// interface HomeProps {
//   isOpen: boolean;
// }

// const Home: React.FC<HomeProps> = ({ isOpen }) => {
//   const handleClick = () => {
//     alert('Button clicked!');
//   };

//   return (
//     <HomeContainer isOpen={isOpen}>
//       <h1>Home Page</h1>
//       <Button onClick={handleClick} label="Click Me" />
//       <Table data={data} />
//     </HomeContainer>
//   );
// };

// export default Home;


import React from 'react';
import Button from './Button';
import Table from './Table';
import styled from 'styled-components';

const HomeContainer = styled.div<{ isOpen: boolean }>`
  padding: 30px;
  transition: margin-left 0.3s ease;
  margin-left: ${({ isOpen }) => (isOpen ? '250px' : '60px')};

  @media (max-width: 768px) { /* Tablet */
    margin-left: ${({ isOpen }) => (isOpen ? '250px' : '0')};
    padding: 20px;
  }

  @media (max-width: 480px) { /* Phone */
    margin-left: 0;
    padding: 10px;
  }
`;

const data = [
  { Name: 'John Doe', Age: 28, Job: 'Developer', Location: 'New York', Department: 'Engineering' },
  { Name: 'Jane Smith', Age: 34, Job: 'Designer', Location: 'San Francisco', Department: 'Design' },
  { Name: 'Sam Johnson', Age: 45, Job: 'Manager', Location: 'Chicago', Department: 'Management' },
  { Name: 'Alice Brown', Age: 29, Job: 'Sales', Location: 'Boston', Department: 'Sales' },
  { Name: 'Michael White', Age: 41, Job: 'HR', Location: 'Austin', Department: 'HR' },
];

interface HomeProps {
  isOpen: boolean;
}

const Home: React.FC<HomeProps> = ({ isOpen }) => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <HomeContainer isOpen={isOpen}>
      <h1>Home Page</h1>
      <Button onClick={handleClick} label="Click Me" />
      <Table data={data} />
    </HomeContainer>
  );
};

export default Home;
