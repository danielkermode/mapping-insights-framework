import { StyleSheet } from 'aphrodite'
import stylesFromRaw from '../../util/stylesFromRaw'
import { metrics, text, colors } from '../../constants'

export const raw = StyleSheet.create({
  contentContainer: {
    minWidth: '210px',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  sideSection: {
    height: '100%',
    width: metrics.col2,
    backgroundColor: colors.orange,
    border: `1px solid ${colors.lighterBlack}`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    fontSize: '18px',
    color: colors.dimmedOrange
  },
  mainSection: {
    height: '100%',
    width: metrics.col10,
    borderTop: `1px solid ${colors.darkGray}`,
    borderRight: `1px solid ${colors.darkGray}`,
    borderBottom: `1px solid ${colors.darkGray}`,
    borderRadius: `0 ${metrics.baseRadius} ${metrics.baseRadius} 0`
  },
  titleContainer: {
    height: '30%',
    width: metrics.col12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.offWhite,
    borderRadius: `0 ${metrics.baseRadius} 0 0`
  },
  title: {
    // ...text.style.bodycopySmall,,
    fontSize: '13px',
    color: colors.black
  },
  metricContainer: {
    height: '70%',
    width: metrics.col12,
    backgroundColor: colors.white,
    borderRadius: `0 0 ${metrics.baseRadius} 0`,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  metric: {
    // ...text.style.headingThin,
    fontSize: '28px',
    color: colors.tinted
  },
  performanceTag: {
    marginLeft: metrics.smallPadding,
    paddingTop: '3px',
    paddingBottom: '3px',
    paddingLeft: metrics.smallPadding,
    paddingRight: metrics.smallPadding,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: `1px solid ${colors.darkGray}`,
    borderRadius: `${metrics.baseRadius} ${metrics.baseRadius} ${metrics.baseRadius} 0`
  },
  percentage: {
    fontSize: text.size.bodycopySmall
  },
  trendingIcon: {
    fontSize: '15px'
  }
})

export default {
  ...stylesFromRaw(raw)
}
