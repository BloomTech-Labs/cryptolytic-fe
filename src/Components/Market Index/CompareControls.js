import 'date-fns';
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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
		width: theme.spacing(10),
		height: '1.4em'
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

export default function CompareControl() {
	const classes = useStyles();
	const [state, setState] = React.useState({
		age: '',
		name: 'hai',
	});

	const inputLabel = React.useRef(null);
	const [labelWidth, setLabelWidth] = React.useState(0);
	React.useEffect(() => {
		setLabelWidth(inputLabel.current.offsetWidth);
	}, []);

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
	const handleChange = name => event => {
		setState({
			...state,
			[name]: event.target.value,
		});
	};
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Container style={{ width: '16vw', backgroundColor: 'rgba(35, 32, 44, 0.8)', height: '45%' }}>
				<div>
					<FormControl variant="outlined" className={classes.formControl}>
						<InputLabel ref={inputLabel} id="demo-simple-select-outlined-label" style={{ color: 'white' }}>
							Coin
						</InputLabel>
						<Select
							labelId="demo-simple-select-outlined-label"
							id="demo-simple-select-outlined"
							value={state.age}
							onChange={handleChange}
							labelWidth={labelWidth}
						>
							<option value={10}>Ten</option>
							<option value={20}>Twenty</option>
							<option value={30}>Thirty</option>
						</Select>
					</FormControl>
					<FormControl variant="outlined" className={classes.formControl}>
						<InputLabel ref={inputLabel} id="demo-simple-select-outlined-label" style={{ color: 'white' }}>
							Coin
						</InputLabel>
						<Select
							labelId="demo-simple-select-outlined-label"
							id="demo-simple-select-outlined"
							value={state.age}
							onChange={handleChange}
							labelWidth={labelWidth}
						>
							<option value={10}>Ten</option>
							<option value={20}>Twenty</option>
							<option value={30}>Thirty</option>
						</Select>
					</FormControl>
				</div>
				<KeyboardDatePicker
					margin="normal"
					id="date-picker-dialog"
					label="Start"
					format="MM/dd/yyyy"
					value={selectedDate}
					onChange={handleDateChange}
					KeyboardButtonProps={{
						'aria-label': 'change date',
					}}
					style={{ width: '50%' }}
				/>
				<KeyboardDatePicker
					margin="normal"
					id="date-picker-dialog"
					label="End"
					format="MM/dd/yyyy"
					value={selectedDate}
					onChange={handleDateChange}
					KeyboardButtonProps={{
						'aria-label': 'change date',
					}}
					style={{ width: '50%' }}
				/>

			</Container>
		</MuiPickersUtilsProvider>
	)
}