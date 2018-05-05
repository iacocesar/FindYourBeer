import styled from 'styled-components/native'

export const Spacer = styled.View`
  flex-grow: 1;
  ${props => props.min && `min-height: ${props.min}`};
  ${props => props.max && `max-height: ${props.max}`};
`
