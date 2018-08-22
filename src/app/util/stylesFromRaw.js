import { css } from 'aphrodite'
/* Helper function to turn raw stylesheet into css classes */
export default (stylesheet) => {
  const obj = {}
  Object.keys(stylesheet).forEach(key => {
    obj[key] = css(stylesheet[key])
  })
  return obj
}
