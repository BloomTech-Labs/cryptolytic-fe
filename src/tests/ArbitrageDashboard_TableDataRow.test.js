import React from "react";
///
import TableDataRow from "../Components/ArbitrageDashboardTable/TableDataRow";
///
import { render } from "@testing-library/react";

test("Arbitrage TableDataRows can render without crashing", () => {
  render(
    <TableDataRow
      dataRow={
        ({ buy_exchange: "test", sell_exchange: "test", trading_pair: "test" },
        { buy_exchange: "test", sell_exchange: "test", trading_pair: "test" })
      }
    />
  );
});
