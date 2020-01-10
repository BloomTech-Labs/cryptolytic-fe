import React from "react";
import { MemoryRouter } from "react-router";
///
import TradingDashboardTable from "../Components/TradingDashboardTable/TradingDashboardTable";
import TableHeaderRow from "../Components/TradingDashboardTable/TableHeaderRow";
import TableDataRow from "../Components/TradingDashboardTable/TableDataRow";
///
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

test("Trading DashboardTable components initialized without crashing", () => {
    render(<TableHeaderRow headerData={["Header", "Test"]} />);
    render(
      <TableDataRow
        dataRow={{
          buy_exchange: "binance",
          sell_exchange: "bitfinex",
          trading_pair: "usd_btc",
          exchange: "binance"
        }}
      />
    );
});

describe("<TradingDashboardTable /> matches verified SnapShot", () => {
  it("should match snapshot", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
            <TradingDashboardTable />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
