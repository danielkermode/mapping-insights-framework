import React, { Component } from 'react'
import BasicMetric from '../BasicMetric'

const styles = {}

class InsightsPanel extends Component {
  render () {
    return (
      <div>
        <div className={styles.metricContainer}>
          <BasicMetric
            icon='store'
            title={'Total Debtors'}
            contentContainerStyling={styles.stockistsMetricContainer}
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
            contentContainerStyling={styles.stockistsMetricContainer}
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
            contentContainerStyling={styles.stockistsMetricContainer}
            metricContainerStyling={styles.metricContainerStyling}
            performanceTagStyling={styles.performanceTagStyling}
            fetching={false}
            metric={this.props.totalDebt}
          />
        </div>
        <div className={styles.metricContainer}>
          <BasicMetric
            icon='store'
            title={'Total Debt Collected'}
            contentContainerStyling={styles.stockistsMetricContainer}
            metricContainerStyling={styles.metricContainerStyling}
            performanceTagStyling={styles.performanceTagStyling}
            fetching={false}
          />
        </div>
      </div>
    )
  }
}

export default InsightsPanel
