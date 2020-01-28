import 'date-fns';
import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import DateFnsUtils from '@date-io/date-fns';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';


import {
	MuiPickersUtilsProvider,
} from '@material-ui/pickers';

// Use this to populate list of possible coins
// https://min-api.cryptocompare.com/documentation?key=Other&cat=allExchangesV4Endpoint

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		width: '100%'
	  },
	  chips: {
		display: 'flex',
		flexWrap: 'wrap',
	  },
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	input: {
		color: 'white',
		fill: 'white',
	},
	controlsContainer: {
		width: '17vw', 
		backgroundColor: 'rgba(35, 32, 44, 0.8)', 
		minHeight: '50%', 
		borderRadius: '6px'
	},
	cryptoInput: {
		color: 'white', 
		width: '90%', 
		textAlign: 'left'
	},
	clearButton: {
		width: '30%', 
		margin: '1em 0'
	},
	selectInput: {
		color: 'white'
	}

}));
export default function CompareControl(props) {
	const classes = useStyles();

	  const ITEM_HEIGHT = 48;
	  const ITEM_PADDING_TOP = 8;
	  const MenuProps = {
		PaperProps: {
		  style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 100,
		  },
		},
	  };

	  const handleChangeOptions = name => event => {
		props.setCompare({
			...props.compare,
			render: true,
			[name]: event.target.value,
		});
	};

	  const handleChangeCompare = event => {
		props.setCompare({
			...props.compare,
			render: true,
			compare: event.target.value
		});
	  };
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Container className={classes.controlsContainer}>
					<FormControl className={classes.formControl}>
						<InputLabel id="crypto-coin" className={classes.cryptoInput}>Crypto Coin</InputLabel>
						<Select
						labelId="crypto-coin"
						id="crypto-coin"
						multiple
						value={props.compare.compare}
						onChange={handleChangeCompare}
						input={<Input id="crypto-coin-input" />}
						renderValue={selected => (
							<div className={classes.chips}>
							{selected.map((value, index) => (
								<Chip key={value} label={value} className={classes.chip} style={{ backgroundColor: props.names[index].color }} />
							))}
							</div>
						)}
						
						MenuProps={MenuProps}
						>
						{props.names.map((name, i) => (
							<MenuItem key={name.name} value={name.name} style={{ color: name.color }}>
								{name.name}
							</MenuItem>
						))}
						</Select>
					</FormControl>	
					<FormControl className={classes.formControl}>
						<InputLabel id="exchange" className={classes.selectInput}>Exchange</InputLabel>
						<Select
							labelId="exchange"
							id="exchange"
							value={props.compare.exchange}
							onChange={handleChangeOptions('exchange')}
							className={classes.selectInput}
						>
							{["gemini","itbit","coinbase","kraken","bitstamp","liquid","poloniex","bitflyer","bitfinex"].map(e => 
								<MenuItem value={e}>{e}</MenuItem>)}
						</Select>
					</FormControl>
					<FormControl className={classes.formControl}>
						<InputLabel id="interval" className={classes.selectInput}>Interval</InputLabel>
						<Select
							labelId="interval"
							id="interval"
							value={props.compare.interval}
							onChange={handleChangeOptions('interval')}
							className={classes.selectInput}
						>
							{["day","hour","minute"].map(e =>
							<MenuItem value={e}>{e}</MenuItem>)}
						</Select>
					</FormControl>
					<Button variant="outlined" color="primary" className={classes.clearButton} onClick={() => props.setCompare({		
						compare: [],
						interval: "day",
						exchange: "bitfinex",
						render: true})}>
						Clear
					</Button>
			</Container>
		</MuiPickersUtilsProvider>
	)
}


