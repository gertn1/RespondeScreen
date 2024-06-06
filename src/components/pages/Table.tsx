// import React from 'react';
// import styled from 'styled-components';

// const StyledTable = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   margin: 10px 0 ;

//   th, td {
//     padding: 10px;
//     border: 1px solid #ddd;
//     text-align: left;
//   }

//   th {
//     background-color: #f4f4f4;
     
//   }
// `;

// interface TableProps {
//   data: Array<{ [key: string]: string | number }>;
// }

// const Table: React.FC<TableProps> = ({ data }) => {
//   return (
//     <StyledTable>
//       <thead>
//         <tr>
//           {Object.keys(data[0]).map((key) => (
//             <th key={key}>{key}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((row, index) => (
//           <tr key={index}>
//             {Object.values(row).map((value, i) => (
//               <td key={i}>{value}</td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </StyledTable>
//   );
// };

// export default Table;


// import React from 'react';
// import styled from 'styled-components';

// const StyledTable = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   margin: 10px 0;

//   th, td {
//     padding: 10px;
//     border: 1px solid #ddd;
//     text-align: left;
//   }

//   th {
//     background-color: #f4f4f4;
//   }

//   @media (max-width: 768px) { /* Tablet */
//     th, td {
//       padding: 8px;
//       font-size: 14px;
//     }
//   }

//   @media (max-width: 480px) { /* Phone */
//     th, td {
//       padding: 6px;
//       font-size: 12px;
//     }
//     th, td {
//       display: block;
//       width: 100%;
//     }
//     th {
//       position: absolute;
//       top: -9999px;
//       left: -9999px;
//     }
//     tr {
//       margin-bottom: 10px;
//       display: block;
//       border: 1px solid #ccc;
//     }
//     td {
//       border: none;
//       position: relative;
//       padding-left: 50%;
//       text-align: right;
//     }
//     td:before {
//       position: absolute;
//       top: 6px;
//       left: 6px;
//       width: 45%;
//       white-space: nowrap;
//       content: attr(data-label);
//       text-align: left;
//       font-weight: bold;
//     }
//   }
// `;

// interface TableProps {
//   data: Array<{ [key: string]: string | number }>;
// }

// const Table: React.FC<TableProps> = ({ data }) => {
//   return (
//     <StyledTable>
//       <thead>
//         <tr>
//           {Object.keys(data[0]).map((key) => (
//             <th key={key}>{key}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((row, index) => (
//           <tr key={index}>
//             {Object.entries(row).map(([key, value], i) => (
//               <td key={i} data-label={key}>{value}</td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </StyledTable>
//   );
// };

// export default Table;


import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 10px 0;

  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #f4f4f4;
  }

  @media (max-width: 768px) { /* Tablet */
    th, td {
      padding: 8px;
      font-size: 14px;
    }
  }

  @media (max-width: 480px) { /* Phone */
    th, td {
      padding: 6px;
      font-size: 12px;
    }

    thead {
      display: none;
    }

    tr {
      display: block;
      margin-bottom: 10px;
      border: 1px solid #ccc;
    }

    td {
      display: block;
      text-align: right;
      padding-left: 50%;
      position: relative;
      border: none;
      padding: 10px 5px;
    }

    td::before {
      content: attr(data-label);
      position: absolute;
      left: 10px;
      width: 50%;
      white-space: nowrap;
      text-align: left;
      font-weight: bold;
    }
  }
`;

interface TableProps {
  data: Array<{ [key: string]: string | number }>;
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {Object.entries(row).map(([key, value], i) => (
              <td key={i} data-label={key}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
