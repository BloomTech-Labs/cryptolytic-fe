import React from "react";
import TableHeader from "./TableHeader";

const TableHeaderRow = ({ headerData }) => {
  headerData = headerData.map(header => {
    return header.charAt(0).toUpperCase() + header.substr(1);
  });

  return (
    <tr>
      {headerData.map(header => (
        <TableHeader header={header} />
      ))}
    </tr>
  );
};

export default TableHeaderRow;
