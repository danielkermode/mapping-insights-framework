import React, { Component } from 'react'
import BasicMetric from '../BasicMetric'
import styles from './InsightsPanel.styles'
import DatePicker from '../DatePicker'
import moment from 'moment'

class InsightsPanel extends Component {
  render () {
    return (
      <div>
        <div>
          <DatePicker
            initialDate={moment().startOf('day').subtract(349, 'day')}
            title='Range'
            onChangeHandler={this.props.updateStartDate}
            containerStyling={styles.datePickerContainerStyling}
            titleStyling={styles.datePickerTitleStyling}
            buttonStyling={styles.datePickerFromButtonStyling}
          />
          <DatePicker
            onChangeHandler={this.props.updateEndDate}
            icon={'keyboard_arrow_right'}
            containerStyling={styles.datePickerContainerStyling}
            titleStyling={styles.datePickerTitleStyling}
            buttonStyling={styles.datePickerToButtonStyling}
          />
        </div>
        <div className={styles.metricsContainer}>

          <div className={styles.metricContainer}>
            <BasicMetric
              icon='group'
              title={'Total Debtors'}
              metricContainerStyling={styles.metricContainerStyling}
              performanceTagStyling={styles.performanceTagStyling}
              fetching={false}
              metric={this.props.numberOfClients}
            />
          </div>
          <div className={styles.metricContainer}>
            <BasicMetric
              icon='how_to_reg'
              title={'Paying Debtors'}
              metricContainerStyling={styles.metricContainerStyling}
              performanceTagStyling={styles.performanceTagStyling}
              fetching={false}
              metric={this.props.numberOfPayingClients}
            />
          </div>
          <div className={styles.metricContainer}>
            <BasicMetric
              icon='attach_money'
              title={'Total Debt Loaded'}
              metricContainerStyling={styles.metricContainerStyling}
              performanceTagStyling={styles.performanceTagStyling}
              fetching={false}
              metric={`$${this.props.totalDebt}`}
            />
          </div>
          <div className={styles.metricContainer}>
            <BasicMetric
              icon='monetization_on'
              title={'Total Debt Collected'}
              metricContainerStyling={styles.metricContainerStyling}
              performanceTagStyling={styles.performanceTagStyling}
              fetching={false}
              metric={`$${this.props.totalCollected}`}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default InsightsPanel
