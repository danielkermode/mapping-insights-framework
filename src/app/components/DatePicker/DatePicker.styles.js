import { StyleSheet } from 'aphrodite'
import stylesFromRaw from '../../util/stylesFromRaw'
import { colors, text, metrics } from '../../constants'

export const raw = StyleSheet.create({
  container: {
    ...text.style.bodycopy,
    color: colors.tinted,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    transition: metrics.transition
  },
  datePickerText: {
    border: `1px solid ${colors.mediumGray}`,
    borderRadius: `50px 0 0 50px`,
    borderWidth: '1px 0 1px 1px',
    padding: '12px 15px 12px 15px'
  },
  datePickerButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    border: `1px solid ${colors.mediumGray}`,
    borderRadius: `0 ${metrics.baseRadius} ${metrics.baseRadius} 0`,
    ':hover': {
      color: colors.darkOrange,
      cursor: 'pointer',
      textDecoration: 'none',
      border: `1px solid ${colors.darkGray}`
    }
  },
  icon: {
    ...text.style.iconBase,
    color: colors.orange,
    marginRight: '10px',
    marginLeft: '10px'
  }
})

export default {
  ...stylesFromRaw(raw)
}
