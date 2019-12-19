import React from "react";

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

  return <th style={{ padding: "0.5rem 0" }}>{header}</th>;
};

export default TableHeader;
