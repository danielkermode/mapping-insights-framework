import { StyleSheet } from 'aphrodite'
import stylesFromRaw from './util/stylesFromRaw'
import { metrics, colors } from './constants'

const raw = StyleSheet.create({
  mainContainer: {
    width: '96%',
    height: '100%',
    padding: metrics.section
  },
  contentContainer: {
    boxShadow: colors.shadow,
    width: metrics.col12,
    padding: metrics.section,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    overflow: 'hidden',
    height: '100%'
  }
})

export default {
  ...stylesFromRaw(raw)
}
