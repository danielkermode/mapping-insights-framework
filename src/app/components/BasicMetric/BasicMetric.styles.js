import { StyleSheet } from 'aphrodite'
import stylesFromRaw from '../../util/stylesFromRaw'
import { metrics, text, colors } from '../../constants'

export const raw = StyleSheet.create({
  contentContainer: {
    minWidth: '210px',
    width: '100%',
    height: '90%',
    display: 'flex',
    marginLeft: '6px',
    marginRight: '6px',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: metrics.baseRadius,
    overflow: 'hidden',
    '@media only screen and (max-width: 600px)': {
      height: '100px',
      minWidth: '220px',
      marginTop: '6px',
      marginBottom: '6px'
    }
  },
  sideSection: {
    height: '100%',
    width: metrics.col2,
    backgroundColor: 'orange',
    padding: metrics.smallPadding,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  icon: {
    fontSize: '16px',
    color: colors.darkBlack
  },
  mainSection: {
    height: '100%',
    width: metrics.col10
  },
  titleContainer: {
    height: '30%',
    width: metrics.col12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.offWhite,
    borderRadius: `0 ${metrics.baseRadius} 0 0`,
    borderTop: `1px solid ${colors.darkGray}`,
    borderRight: `1px solid ${colors.darkGray}`,
    borderBottom: `1px solid ${colors.darkGray}`
  },
  title: {
    ...text.style.bodycopySmall,
    color: colors.black
  },
  metricContainer: {
    height: '70%',
    width: metrics.col12,
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: `0 0 ${metrics.baseRadius} 0`,
    borderRight: `1px solid ${colors.darkGray}`,
    borderBottom: `1px solid ${colors.darkGray}`
  },
  metric: {
    ...text.style.headingThin,
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
    fontFamily: text.type.bold,
    fontSize: text.size.bodycopySmall
  },
  trendingIcon: {
    fontSize: '15px'
  }
})

export default {
  ...stylesFromRaw(raw)
}
