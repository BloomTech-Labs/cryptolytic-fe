import USD from "../../node_modules/cryptocurrency-icons/svg/color/usd.svg";
import BTC from "../../node_modules/cryptocurrency-icons/svg/color/btc.svg";

export const getIcons = tradingPair => {
  const iconPair = tradingPair.split("/").reduce((acc, curr) => {
    let icon;

    if (curr === "USD") {
      icon = USD;
      acc.push(icon);
    } else if (curr === "BTC") {
      icon = BTC;
      acc.push(icon);
    }

    return acc;
  }, []);

  console.log("iconpair>>>>>>", iconPair);
  return {
    icon1: iconPair[0],
    icon2: iconPair[1]
  };
};
