import { StyleSheet } from 'aphrodite'
import stylesFromRaw from '../../util/stylesFromRaw'
import { metrics, text, colors } from '../../constants'

const raw = StyleSheet.create({
  metricsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGray,
    border: `1px solid ${colors.mediumGray}`,
    borderRadius: `3px 3px 0 0`
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
  },
  topPanelContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingTop: metrics.smallSection,
    paddingBottom: metrics.smallSection,
    borderBottom: `1px solid ${colors.darkGray}`
  },
  lowerPanelContainer: {
    height: '70px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: metrics.smallSection,
    paddingBottom: metrics.smallSection
  },
  dateRangeConatiner: {
    height: '100%',
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: metrics.smallSection,
    alignItems: 'center',
    backgroundColor: colors.blue
  },
  debtRangeContainer: {
    height: '100%',
    width: '20%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: '35px',
    alignItems: 'center',
    backgroundColor: colors.blue
  },
  datePickerText: {
    fontSize: '14px',
    textAlign: 'right',
    marginRight: metrics.basePadding
  }
})

export default {
  ...stylesFromRaw(raw)
}
