import 'date-fns';
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import NativeSelect from '@material-ui/core/NativeSelect';
import Container from '@material-ui/core/Container';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		width: '44%',
		height: '2.2em'
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	input: {
		color: 'white',
		fill: 'white',
	}
}));

export default function CompareControl(props) {
	const classes = useStyles();
	const inputLabel = React.useRef(null);
	const [labelWidth, setLabelWidth] = React.useState(0);
	React.useEffect(() => {
		setLabelWidth(inputLabel.current.offsetWidth);
	}, []);

	const handleDateChange = id => date => {
		props.setCompareControl({
			...props.compareControl,
			[id]: date
		})
		const useStyles = makeStyles(theme => ({
			formControl: {
				margin: theme.spacing(1),

			},
			selectEmpty: {
				marginTop: theme.spacing(2),
			},
		}));
	};
	const handleChange = event => {
		props.setCompareControl({
			...props.compareControl,
			[event.target.name]: event.target.value,
		})
	};

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Container style={{ width: '21vw', backgroundColor: 'rgba(35, 32, 44, 0.8)', height: '50%', borderRadius: '6px', paddingBottom: '2em' }}>
				<div style={{ marginBottom: '1em', width: '100%' }}>
					{/* <button onClick={() => console.log(props.compareControl)}>Check State</button> */}
					<FormControl className={classes.formControl}>
						<InputLabel id="demo-simple-select-label" ref={inputLabel} style={{ color: 'white', width: '50%' }}>Coin</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="coin1"
							value={props.compareControl.coin1}
							onChange={handleChange}
							name="coin1"
						>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</FormControl>
					<FormControl className={classes.formControl}>
						<InputLabel id="demo-simple-select-label" ref={inputLabel} style={{ color: 'white' }}>Coin</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={props.compareControl.coin2}
							onChange={handleChange}
							name="coin2"
						>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</FormControl>
				</div>
				<div>
					<KeyboardDatePicker
						margin="normal"
						id="date-picker-dialog"
						format="MM/dd/yyyy"
						value={props.compareControl.startDate}
						onChange={handleDateChange('startDate')}
						KeyboardButtonProps={{
							'aria-label': 'change date',
							className: classes.input
						}}
						style={{ width: '50%' }}
						InputProps={{ className: classes.input }}
						name="startDate"
					/>
					<KeyboardDatePicker
						margin="normal"
						id="date-picker-dialog"
						format="MM/dd/yyyy"
						value={props.compareControl.endDate}
						onChange={handleDateChange('endDate')}
						KeyboardButtonProps={{
							'aria-label': 'change date',
							className: classes.input
						}}
						style={{ width: '50%' }}
						InputProps={{ className: classes.input }}
						name="endDate"
					/>
				</div>
				<div>
					<FormControl className={classes.formControl}>
						<InputLabel id="demo-simple-select-label" style={{ color: 'white' }}>Interval</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={props.compareControl.interval}
							onChange={handleChange}
							name="interval"
						>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</FormControl>
					<FormControl className={classes.formControl}>
						<InputLabel id="demo-simple-select-label" style={{ color: 'white' }}>Data</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={props.compareControl.data}
							onChange={handleChange}
							name="data"
						>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</FormControl>
				</div>
			</Container>
		</MuiPickersUtilsProvider>
	)
}