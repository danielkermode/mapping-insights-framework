import React, { Component } from 'react'
import ReactDatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import styles from './DatePicker.styles'

class DatePicker extends Component {
  constructor (props) {
    super(props)
    const start = props.initialDate || moment((new Date()).setHours(0, 0, 0, 0))
    this.state = {
      startDate: start
    }
  }

  componentDidMount () {
    this.props.onChangeHandler(this.state.startDate)
  }

  handleDateChange = date => {
    this.setState({
      startDate: date
    })
    this.props.onChangeHandler(date)
  }

  render () {
    return (
      <div className={`${this.props.containerStyling || ''} ${styles.container}`}>
        {
          this.props.title && <div className={`${this.props.titleStyling || ''} ${styles.datePickerText}`}>
            { this.props.title }
          </div>
        }
        <div className={`${this.props.buttonStyling || ''} ${styles.datePickerButton}`}>
          <i className={`${styles.icon} material-icons`}>{this.props.icon || 'date_range'}</i>
          <ReactDatePicker
            dateFormat='DD MMM YYYY'
            selected={this.state.startDate}
            onChange={this.handleDateChange}
          />
        </div>
      </div>
    )
  }
}

export default DatePicker
