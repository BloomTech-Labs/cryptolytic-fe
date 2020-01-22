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
        padding: "0.5em 0",
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
