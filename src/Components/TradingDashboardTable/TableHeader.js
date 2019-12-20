import React from "react";
import zIndex from "@material-ui/core/styles/zIndex";

const TableHeader = ({ header }) => {
  if (header.includes("_")) {
    header = header
      .replace(/\_/, " ")
      .split(" ")
      .map(word => {
        return word.charAt(0).toUpperCase() + word.substr(1);
      })
      .join(" ");
  }

  return (
    <th
      style={{
        padding: "0.5rem 0",
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
