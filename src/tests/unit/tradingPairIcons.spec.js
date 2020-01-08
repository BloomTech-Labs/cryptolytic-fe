import { getIcons } from "../../Utilities/tradingPairIcons";
import USD from "../../../node_modules/cryptocurrency-icons/svg/color/usd.svg";
import BTC from "../../../node_modules/cryptocurrency-icons/svg/color/btc.svg";
import LTC from "../../../node_modules/cryptocurrency-icons/svg/color/ltc.svg";

describe("Correct trading pair icons returned", () => {
  it("trading pair icons", () => {
    const tradingPair = "BTC/USD";
    const result = getIcons(tradingPair);
    const expected = {
      icon1: BTC,
      icon2: USD
    };
    expect(result).toStrictEqual(expected);
  });
  it("wrong trading pair icons displayed", () => {
    const tradingPair = "LTC/USD";
    const result = getIcons(tradingPair);
    const expected = {
      icon1: BTC,
      icon2: USD
    };
    expect(result).not.toBe(expected);
  });
});
