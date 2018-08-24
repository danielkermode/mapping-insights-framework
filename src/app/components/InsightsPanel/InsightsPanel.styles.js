import { StyleSheet } from 'aphrodite'
import stylesFromRaw from '../../util/stylesFromRaw'
import { metrics, colors } from '../../constants'

const raw = StyleSheet.create({
  metricsContainer: {
    height: '70px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGray,
    border: `1px solid ${colors.mediumGray}`,
    borderRadius: `3px 3px 0 0`,
    padding: metrics.smallSection
  },
  metricContainer: {
    height: '100%',
    margin: '0 20px'
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
