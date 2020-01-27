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

}));
export default function CompareControl(props) {
	const classes = useStyles();

	  const ITEM_HEIGHT = 48;
	  const ITEM_PADDING_TOP = 8;
	  const MenuProps = {
		PaperProps: {
		  style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
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
	  const handleDelete = event => {
		event.stopPropagation();
		props.setCompare({
			compare: props.compare.filter(e => e.key !== event.key)
		});
		console.log("handledelete")

	  };
	  const handleChangeCompare = event => {
		props.setCompare({
			...props.compare,
			render: true,
			compare: event.target.value
		});
	  };
	  console.log(props.compare)
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Container style={{ width: '17vw', backgroundColor: 'rgba(35, 32, 44, 0.8)', minHeight: '50%', borderRadius: '6px' }}>
				<div style={{ width: '100%' }}>
					<FormControl className={classes.formControl}>
						<InputLabel id="demo-mutiple-chip-label" style={{ color: 'white', width: '90%', textAlign: 'left' }}>Crypto Coin</InputLabel>
						<Select
						labelId="demo-mutiple-chip-label"
						id="demo-mutiple-chip"
						multiple
						value={props.compare.compare}
						onChange={handleChangeCompare}
						input={<Input id="select-multiple-chip" />}
						renderValue={selected => (
							<div className={classes.chips}>
							{selected.map((value, index) => (
								<Chip key={value} label={value} className={classes.chip} onDelete={handleDelete} style={{ backgroundColor: props.names[index].color }} />
							))}
							</div>
						)}
						
						MenuProps={MenuProps}
						>
						{props.names.map(name => (
							<MenuItem key={name.name} value={name.name} style={{ color: name.color }}>
							{name.name}
							</MenuItem>
						))}
						</Select>
					</FormControl>
					
				</div>
				<div>
					<FormControl className={classes.formControl}>
						<InputLabel id="demo-simple-select-label" style={{ color: 'white' }}>Exchange</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="exchange"
							value={props.compare.exchange}
							onChange={handleChangeOptions('exchange')}
							style={{ color: 'white' }}
						>
							{["gemini","itbit","coinbase","kraken","bitstamp","liquid","poloniex","bitflyer","bitfinex"].map(e => 
								<MenuItem value={e}>{e}</MenuItem>)}
						</Select>
					</FormControl>
					<FormControl className={classes.formControl}>
						<InputLabel id="demo-simple-select-label" style={{ color: 'white' }}>Interval</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="interval"
							value={props.compare.interval}
							onChange={handleChangeOptions('interval')}
							style={{ color: 'white' }}
						>
							{["day","hour","minute"].map(e =>
							<MenuItem value={e}>{e}</MenuItem>)}
						</Select>
					</FormControl>
					<Button variant="outlined" color="primary" style={{ width: '30%', margin: '1em 0' }} onClick={() => props.setCompare({		
						compare: [],
						interval: "day",
						exchange: "bitfinex",
						render: true})}>
					Clear
					</Button>
				</div>
			</Container>
		</MuiPickersUtilsProvider>
	)
}


