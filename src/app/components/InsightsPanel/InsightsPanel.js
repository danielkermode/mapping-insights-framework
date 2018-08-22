import React, { Component } from 'react'
import BasicMetric from '../BasicMetric'
import styles from './InsightsPanel.styles'

class InsightsPanel extends Component {
  render () {
    return (
      <div className={styles.metricsContainer}>
        <div className={styles.leftMetricsContainer}>
          <div className={styles.metricContainer}>
            <BasicMetric
              icon='store'
              title={'Total Debtors'}
              contentContainerStyling={styles.debtorsMetricContainer}
              metricContainerStyling={styles.metricContainerStyling}
              performanceTagStyling={styles.performanceTagStyling}
              fetching={false}
              metric={this.props.numberOfClients}
            />
          </div>
          <div className={styles.metricContainer}>
            <BasicMetric
              icon='store'
              title={'Paying Debtors'}
              contentContainerStyling={styles.debtorsMetricContainer}
              metricContainerStyling={styles.metricContainerStyling}
              performanceTagStyling={styles.performanceTagStyling}
              fetching={false}
              metric={this.props.numberOfPayingClients}
            />
          </div>
          <div className={styles.metricContainer}>
            <BasicMetric
              icon='store'
              title={'Total Debt Loaded'}
              contentContainerStyling={styles.debtorsMetricContainer}
              metricContainerStyling={styles.metricContainerStyling}
              performanceTagStyling={styles.performanceTagStyling}
              fetching={false}
              metric={`$${this.props.totalDebt}`}
            />
          </div>
          <div className={styles.metricContainer}>
            <BasicMetric
              icon='store'
              title={'Total Debt Collected'}
              contentContainerStyling={styles.debtorsMetricContainer}
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
