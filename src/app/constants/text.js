import colors from './colors'

export const headerFont = '\'europa-regular\', sans-serif'
export const buttonFont = '\'europa-regular\', sans-serif'
export const bodyFont = '\'europa-regular\', sans-serif'

const type = {
  light: '\'europa-regular\', sans-serif',
  base: '\'europa-regular\', sans-serif',
  bold: '\'europa-regular\', sans-serif'
}

// Consider changing 'height' to 'width' for better accuracy

const size = {
  h1: '20px',
  h2: '20px',
  h3: '20px',
  h4: '20px',
  h5: '20px',
  h6: '20px',
  heading: '22px',
  subheading: '18px',
  bodycopySmall: '13px',
  bodycopy: '14px',
  bodycopyLarge: '16px',
  inputLabel: '10px',
  input: '20px',
  inputSmaller: '16px',
  button: '13px',
  errorText: '12px',
  errorHeading: '16px',
  iconBase: '18px'
}

const spacing = {
  label: '3px',
  button: '.5px'
}

const style = {
  h1: {
    fontFamily: type.bold,
    fontSize: size.h1,
    color: colors.black
  },
  h2: {
    fontFamily: type.base,
    fontSize: size.h2,
    color: colors.black
  },
  h3: {
    fontFamily: type.base,
    fontSize: size.h3,
    color: colors.black
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4,
    color: colors.black
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5,
    color: colors.black
  },
  h6: {
    fontFamily: type.base,
    fontSize: size.h6,
    color: colors.black
  },
  heading: {
    fontFamily: type.bold,
    fontSize: size.heading,
    color: colors.black
  },
  headingThin: {
    fontFamily: type.light,
    fontSize: size.heading,
    color: colors.black
  },
  subheading: {
    fontFamily: type.light,
    fontSize: size.subheading,
    color: colors.black
  },
  bodycopySmall: {
    fontFamily: type.light,
    fontSize: size.bodycopySmall
  },
  bodycopy: {
    fontFamily: type.light,
    fontSize: size.bodycopy,
    color: colors.black
  },
  bodycopyLarge: {
    fontFamily: type.light,
    fontSize: size.bodycopyLarge,
    color: colors.black
  },
  inputLabel: {
    fontFamily: type.light,
    fontSize: size.inputLabel,
    letterSpacing: spacing.label,
    textTransform: 'uppercase',
    color: colors.subtitle
  },
  input: {
    fontFamily: type.light,
    fontSize: size.input
  },
  button: {
    fontFamily: type.light,
    fontSize: size.button,
    letterSpacing: spacing.button
  },
  buttonLowercase: {
    fontFamily: type.light,
    fontSize: size.bodycopy
  },
  errorHeading: {
    fontFamily: type.light,
    fontSize: size.errorHeading
  },
  errorText: {
    fontFamily: type.light,
    fontSize: size.errorText
  },
  iconBase: {
    fontSize: size.iconBase,
    lineHeight: '0'
  }
}

export default {
  type,
  size,
  spacing,
  style
}
