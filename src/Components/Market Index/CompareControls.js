import 'date-fns';
import React from "react";
import Container from '@material-ui/core/Container';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
} from '@material-ui/pickers';

export default function CompareControl() {
	const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
	const handleDateChange = date => {
		setSelectedDate(date);
	};
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Container style={{ width: '16vw', backgroundColor: 'rgba(35, 32, 44, 0.8)', height: '45%' }}>
				<KeyboardDatePicker
					margin="normal"
					id="date-picker-dialog"
					label="Date picker dialog"
					format="MM/dd/yyyy"
					value={selectedDate}
					onChange={handleDateChange}
					KeyboardButtonProps={{
						'aria-label': 'change date',
					}}
				/>
			</Container>
		</MuiPickersUtilsProvider>
	)
}