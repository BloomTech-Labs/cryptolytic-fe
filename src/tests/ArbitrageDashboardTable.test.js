import React from "react";
import { MemoryRouter } from "react-router";
///
import ArbitrageDashboardTable from "../Components/ArbitrageDashboardTable/ArbitrageDashboardTable";
import TableHeaderRow from "../Components/ArbitrageDashboardTable/TableHeaderRow";
import TableDataRow from "../Components/ArbitrageDashboardTable/TableDataRow";
///
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

test("ArbitrageDashboardTable components initialized without crashing", () => {
  render(<TableHeaderRow headerData={["Header", "Test"]} />);
  render(
    <TableDataRow
      dataRow={
        ({
          buy_exchange: "bitfinex",
          sell_exchange: "binance",
          trading_pair: "BTC_USD"
        },
        {
          buy_exchange: "binance",
          sell_exchange: "bitfinex",
          trading_pair: "ETH_BTC"
        })
      }
    />
  );
});

describe("<ArbitrageDashboardTable /> matches verified SnapShot", () => {
  it("should match snapshot", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <ArbitrageDashboardTable />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
