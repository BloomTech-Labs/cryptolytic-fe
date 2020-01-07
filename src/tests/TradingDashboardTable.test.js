import React from "react";
///
import TableHeaderRow from "../Components/TradingDashboardTable/TableHeaderRow";
import TableDataRow from "../Components/TradingDashboardTable/TableDataRow";
///
import { render } from "@testing-library/react";

test("Trading DashboardTable components initialized without crashing", () => {
  render(<TableHeaderRow headerData={["test", "test"]} />);
  render(
    <TableDataRow
      dataRow={{
        buy_exchange: "test",
        sell_exchange: "test",
        trading_pair: "test",
        exchange: "test test"
      }}
    />
  );
});
