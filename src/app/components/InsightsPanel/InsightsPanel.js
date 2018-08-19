<div className={styles.metricContainer}>
  <BasicMetric
    icon='store'
    title={this.props.future ? 'Stockists Opportunity' : 'Current Stockists'}
    contentContainerStyling={styles.stockistsMetricContainer}
    metricContainerStyling={styles.metricContainerStyling}
    performanceTagStyling={styles.performanceTagStyling}
    fetching={false}
  />
</div>
