import React, { Component } from 'react'
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
//import './css/react_dates_overrides.css';
import 'react-dates/lib/css/_datepicker.css';


class Date extends Component {
    constructor(props){
        super(props);
        this.state={
            startDate: null,
            endDate: null
       }
}

    render(){
        return (
        <div>
            <DateRangePicker
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            startDateId="" // PropTypes.string.isRequired,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            endDateId="" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            startDatePlaceholderText="Check In"
            endDatePlaceholderText="Check Out"
            noBorder= {true}
            hideKeyboardShortcutsPanel={true}
            />
        </div>
    );
 }
}
export default Date
