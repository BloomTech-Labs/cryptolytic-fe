import USD from "../../node_modules/cryptocurrency-icons/svg/color/usd.svg";
import BTC from "../../node_modules/cryptocurrency-icons/svg/color/btc.svg";
import ETH from "../../node_modules/cryptocurrency-icons/svg/color/eth.svg";
import LTC from "../../node_modules/cryptocurrency-icons/svg/color/ltc.svg";
import BCH from "../../node_modules/cryptocurrency-icons/svg/color/bch.svg";
import EOS from "../../node_modules/cryptocurrency-icons/svg/color/eos.svg";
import XRP from "../../node_modules/cryptocurrency-icons/svg/color/xrp.svg";
import DASH from "../../node_modules/cryptocurrency-icons/svg/color/dash.svg";
import BNB from "../../node_modules/cryptocurrency-icons/svg/color/bnb.svg";
import XMR from "../../node_modules/cryptocurrency-icons/svg/color/xmr.svg";
import VET from "../../node_modules/cryptocurrency-icons/svg/color/vet.svg";
import TRX from "../../node_modules/cryptocurrency-icons/svg/color/trx.svg";
import LINK from "../../node_modules/cryptocurrency-icons/svg/color/link.svg";
import TOMO from "../../node_modules/cryptocurrency-icons/svg/color/tomo.svg";

export const getIcons = tradingPair => {
  const iconPair = tradingPair.split("/").reduce((acc, curr) => {
    let icon;

    switch (curr) {
      case "USD":
        icon = USD;
        acc.push(icon);
        break;
      case "BTC":
        icon = BTC;
        acc.push(icon);
        break;
      case "ETH":
        icon = ETH;
        acc.push(icon);
        break;
      case "LTC":
        icon = LTC;
        acc.push(icon);
        break;
      case "BCH":
        icon = BCH;
        acc.push(icon);
        break;
      case "EOS":
        icon = EOS;
        acc.push(icon);
        break;
      case "XRP":
        icon = XRP;
        acc.push(icon);
        break;
      case "DASH":
        icon = DASH;
        acc.push(icon);
        break;
      case "BNB":
        icon = BNB;
        acc.push(icon);
        break;
      case "XMR":
        icon = XMR;
        acc.push(icon);
        break;
      case "VET":
        icon = VET;
        acc.push(icon);
        break;
      case "TRX":
        icon = TRX;
        acc.push(icon);
        break;
      case "LINK":
        icon = LINK;
        acc.push(icon);
        break;
      case "TOMO":
        icon = TOMO;
        acc.push(icon);
        break;
      default:
        icon = null;
        acc.push(icon);
        break;
    }

    return acc;
  }, []);

  console.log("iconpair>>>>>>", iconPair);
  return {
    icon1: iconPair[0],
    icon2: iconPair[1]
  };
};
