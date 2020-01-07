import React from "react";

const TableHeader = ({ header }) => {
  header = header
    .split(" ")
    .map(word => {
      return word.charAt(0).toUpperCase() + word.substr(1);
    })
    .join(" ");

  return (
    <th
      style={{
        padding: "0.5rem 0",
        position: "sticky",
        top: 0,
        background: "#191E23"
      }}
    >
      {header}
    </th>
  );
};

export default TableHeader;
