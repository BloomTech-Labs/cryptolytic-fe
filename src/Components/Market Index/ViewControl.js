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
	DatePicker
} from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		// width: theme.spacing(16),
		width: '44%',
		height: '2.2em'
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	input: {
		color: 'white',
		fill: 'white'
	}
}));


export default function ViewControl() {
	const classes = useStyles();
	const [state, setState] = React.useState({
		age: '',
		name: 'hai',
	});
	const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
	const handleDateChange = date => {
		setSelectedDate(date);
		const useStyles = makeStyles(theme => ({
			formControl: {
				margin: theme.spacing(1),
			},
			selectEmpty: {
				marginTop: theme.spacing(2),
			},
		}));
	};
	const [age, setAge] = React.useState('');
	const handleChangeOptions = event => {
		setAge(event.target.value);
	};

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Container style={{ width: '21vw', backgroundColor: 'rgba(35, 32, 44, 0.8)', height: '35%', borderRadius: '6px', paddingBottom: '1.4em' }}>
				<FormControl className={classes.formControl}>
					<InputLabel id="demo-simple-select-label" style={{ color: 'white' }}>Coin</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={age}
						onChange={handleChangeOptions}
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
						value={age}
						onChange={handleChangeOptions}
					>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</FormControl>
				<KeyboardDatePicker
					margin="normal"
					id="date-picker-dialog"
					format="MM/dd/yyyy"
					value={selectedDate}
					onChange={handleDateChange}
					KeyboardButtonProps={{
						'aria-label': 'change date',
						className: classes.input
					}}
					style={{ width: '50%' }}
					InputProps={{ className: classes.input }}
				/>
				<KeyboardDatePicker
					margin="normal"
					id="date-picker-dialog"
					format="MM/dd/yyyy"
					value={selectedDate}
					onChange={handleDateChange}
					KeyboardButtonProps={{
						'aria-label': 'change date',
						className: classes.input
					}}
					style={{ width: '50%' }}
					InputProps={{ className: classes.input }}

				/>
			</Container>
		</MuiPickersUtilsProvider>
	)
}