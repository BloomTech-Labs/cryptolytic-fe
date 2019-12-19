import React from "react";
import TableData from "./TableData";

const TableDataRow = ({ dataRow }) => {
  const data = Object.values(dataRow);

  return (
    <tr>
      {data.map(item => (
        <TableData item={item} />
      ))}
    </tr>
  );
};

export default TableDataRow;
