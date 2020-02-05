import 'date-fns';
import React, { useState, withStyles } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { GithubPicker } from 'react-color'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import DateFnsUtils from '@date-io/date-fns';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Fab from '@material-ui/core/Fab';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';

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
		borderRadius: '6px',
		marginBottom: '5vh'
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
	const [ chartPresetDraft, setChartPresetDraft ] = useState({})
	const [ anchorEl, setAnchorEl ] = React.useState(null);
	const [ anchorElColor, setAnchorElColor ] = React.useState(null);
	const [ selectedColor, setSelectedColor ] = useState(0)
	const [ toggleEdit, setToggleEdit ] = useState(false)
	const [ presetName, setPresetName ] = useState("Untitled")
	const [ pendingPresetName, setPendingPresetName ] = useState("Untitled")
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
		setChartPresetDraft({
			...chartPresetDraft,
			[name]: event.target.value
		})
		console.log(chartPresetDraft)
	};

	  const handleChangeCompare = event => {
		props.setCompare({
			...props.compare,
			render: true,
			compare: event.target.value
		});
		setChartPresetDraft({
			...chartPresetDraft,
			coins: event.target.value
		})
		console.log(chartPresetDraft)
	  };
	  const handlePickerClick = index => event => {
		setAnchorElColor(event.currentTarget);
		console.log(index)
		setSelectedColor(index)
	  };
	  const handleColorClick = event => {setAnchorEl(event.currentTarget);};
	  const handleColorClose = () => {setAnchorEl(null);};
	  const handlePickerClose = () => {setAnchorElColor(null);};
	  const handleToggleOpen = () => {setToggleEdit(true)};
	  const handleToggleClose = () => {setToggleEdit(false)};
	  const handlePresetNameSave = () => {setPresetName(pendingPresetName);setToggleEdit(false);};

	  const handleColorComplete = name => color => {
		let newName = props.names
		newName.map((e, i) => {
			if(i === selectedColor)
			e.chartColor = color.hex
			console.log(newName)
		})
		props.setNames(newName)
		props.setCompare({
			...props.compare,
			render: true
		})
		props.setCompare(props.compare)
		setAnchorElColor(null);
	  }
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Container className={classes.controlsContainer}>
				<div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '1em', flexDirection: 'column' }}>
						<div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
							<Fab color="primary" aria-label="color" size="small" style={{ width: '20%'}} onClick={handleColorClick}>
								<ColorLensIcon  fontSize="small" onClick={handleColorClick} />
							</Fab>
						</div>
					<Menu
						id="customized-menu"
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={handleColorClose}
					>
						{props.names.map((e, index) => 
							<div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
								<div style={{ paddingRight: '2em', textAlign: 'left' }}>{e.name}</div>
								<div style={{ width: 25, height: 25, backgroundColor: e.chartColor, border: '1px solid black' }} onClick={handlePickerClick(index)}></div>
								<Menu open={Boolean(anchorElColor)} anchorEl={anchorElColor} onClose={handlePickerClose}>
									<GithubPicker onChangeComplete={ handleColorComplete(e) } />
								</Menu>
							</div>
							)}
					</Menu>
				</div>
				<FormControl className={classes.formControl}>
					<InputLabel id="crypto-coin" className={classes.cryptoInput}>Crypto Coin</InputLabel>
					<Select
					labelId="crypto-coin"
					id="crypto-coin"
					multiple
					value={props.compare.compare}
					onChange={handleChangeCompare}
					input={<Input id="crypto-coin-input" />}
					renderValue={selected => 
						<div className={classes.chips}>
						{selected.map((value, index) => {
						let colorIndex = 0
						props.names.map((e, i) =>{
							if(e.name === value)
							colorIndex = i
						})
						return <Chip key={value} label={value} className={classes.chip} style={{ backgroundColor: props.names[colorIndex].chartColor }} />
						})}
						</div>
					}
					MenuProps={MenuProps}
					>
					{props.names ?
					props.names.map((name, i) => 
						!props.compare.chartLoaded ?
							<MenuItem key={name.name} value={name.name} style={{ color: name.chartColor }}>
								{name.name}
							</MenuItem>
						:
							<MenuItem key={name.name} value={name.name} style={{ color: name.chartColor }} disabled="true">
								{name.name}
							</MenuItem>
					)
					:
					<></>
					}
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
				<div style={{ display: 'flex', justifyContent: 'space-around' }}>
					<Button variant="outlined" color="secondary" className={classes.clearButton}>
						Save
					</Button>
					<Button variant="outlined" color="primary" className={classes.clearButton} onClick={() => props.setCompare({		
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


