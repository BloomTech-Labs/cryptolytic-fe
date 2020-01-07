import React from "react";
///
import TableDataRow from "../Components/TradingDashboardTable/TableDataRow";
///
import { render } from "@testing-library/react";

test("Trading TableDataRows can render without crashing", () => {
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
