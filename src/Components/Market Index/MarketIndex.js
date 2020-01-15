import React from "react";

import MarketIndexChart from "./MarketIndexChart"
import DashboardTable from "../DashboardTable"

export default function MarketIndex() {

	let deletedColumns = ['image', 'market_cap_rank', 'price_change_24h', 'market_cap_change_percentage_24h', 'circulating_supply', 'total_supply', 'ath', 'ath_change_percentage', 'roi', 'id', 'ath_date', 'last_updated', 'market_cap_change_24h', 'price_change_percentage_24h']
	let orderedColumns = ['symbol', 'name', 'current_price'].reverse()
	let tradingPairArray = []
	let exchangeArray = []
	let percentageArray = []
	let fiatArray = [2]
	let cryptoArray = []
	let endpointUrl = ['https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Cripple%2Ctether%2Cbitcoin-cash%2Cmonero%2Ceos&order=market_cap_desc&per_page=100&page=1&sparkline=false']
	let tradeProps = { deletedColumns, orderedColumns, tradingPairArray, exchangeArray, percentageArray, fiatArray, cryptoArray, endpointUrl }

	return (
		<div>
			<MarketIndexChart />
			<DashboardTable {...tradeProps} />
		</div>
	)
}