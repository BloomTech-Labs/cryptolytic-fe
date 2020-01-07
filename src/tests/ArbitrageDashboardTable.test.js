import React from "react";
///
import TableHeaderRow from "../Components/ArbitrageDashboardTable/TableHeaderRow";
import TableDataRow from "../Components/ArbitrageDashboardTable/TableDataRow";
///
import { render } from "@testing-library/react";

test("ArbitrageDashboardTable components initialized without crashing", () => {
  render(<TableHeaderRow headerData={["test", "test"]} />);
  render(
    <TableDataRow
      dataRow={
        ({ buy_exchange: "test", sell_exchange: "test", trading_pair: "test" },
        { buy_exchange: "test", sell_exchange: "test", trading_pair: "test" })
      }
    />
  );
});
