import React from "react";
import zIndex from "@material-ui/core/styles/zIndex";

const TableHeader = ({ header }) => {
  return (
    <th
      style={{
        padding: "0",
        position: "sticky",
        top: 0,
        background: "black"
      }}
    >
      {header}
    </th>
  );
};

export default TableHeader;
