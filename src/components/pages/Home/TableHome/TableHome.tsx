
import React from 'react';
import { StyledTable } from './styles';
import { TableProps } from '../../../../@types/HomeProps/TableProps';


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
