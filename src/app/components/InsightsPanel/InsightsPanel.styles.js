import { StyleSheet } from 'aphrodite'
import stylesFromRaw from '../../util/stylesFromRaw'
import { metrics, colors } from '../../constants'

const raw = StyleSheet.create({
  metricsContainer: {
    width: '100%',
    display: 'flex'
  },
  leftMetricsContainer: {
    width: '60%',
    minWidth: '750px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.lightGray,
    borderRight: `1px solid ${colors.mediumGray}`,
    padding: metrics.smallPadding
  },
  basicMetricContainer: {
    width: '218px',
    minWidth: '200px',
    height: '65px'
  },
  debtorsMetricContainer: {
    width: '170px',
    minWidth: '140px',
    height: '65px'
  },
  metricContainerStyling: {
    padding: '0 20px'
  },
  performanceTagStyling: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    border: `1px solid ${colors.darkGray}`
  }
})

export default {
  ...stylesFromRaw(raw)
}
