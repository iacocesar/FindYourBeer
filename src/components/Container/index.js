import styled from 'styled-components'
import colors from 'app/theme/colors'

export default styled.View`
  flex: 1;
  background-color: ${props => {
    if (props.violet) return colors.Violet
    if (props.violetDark) return colors.VioletDark
    if (props.blue) return colors.Blue
    return 'white'
  }};
`
