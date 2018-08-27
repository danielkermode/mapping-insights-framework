import React, { Component } from 'react'
import BasicMetric from '../BasicMetric'
import styles from './InsightsPanel.styles'

class InsightsPanel extends Component {
  render () {
    return (
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
    )
  }
}

export default InsightsPanel
