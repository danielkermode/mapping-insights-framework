import { StyleSheet } from 'aphrodite'
import stylesFromRaw from '../../util/stylesFromRaw'
import { colors, text, metrics } from '../../constants'

export const raw = StyleSheet.create({
  container: {
    ...text.style.bodycopy,
    color: colors.tinted,
    marginRight: metrics.section,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    transition: metrics.transition
  },
  datePickerText: {
    width: '95px',
    border: `1px solid ${colors.mediumGray}`,
    borderRadius: `${metrics.baseRadius} 0 0 ${metrics.baseRadius}`,
    borderWidth: '1px 0 1px 1px',
    padding: '12px 11px 12px 11px',
    paddingLeft: '15px'
  },
  datePickerButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    border: `1px solid ${colors.mediumGray}`,
    borderRadius: `0 ${metrics.baseRadius} ${metrics.baseRadius} 0`,
    ':hover': {
      color: colors.darkBlue,
      cursor: 'pointer',
      textDecoration: 'none',
      backgroundColor: colors.lightGray,
      border: `1px solid ${colors.darkGray}`
    }
  },
  icon: {
    ...text.style.iconBase,
    color: colors.darkBlue,
    marginRight: '10px',
    marginLeft: '10px'
  }
})

export default {
  ...stylesFromRaw(raw)
}
