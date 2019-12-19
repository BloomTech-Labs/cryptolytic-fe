import React from "react";

const TableHeader = ({ header }) => {
  return (
    <th
      style={{
        padding: "0.5rem 0",
        position: "sticky",
        top: 0,
        background: "rgb(35, 32, 44)"
      }}
    >
      {header}
    </th>
  );
};

export default TableHeader;
