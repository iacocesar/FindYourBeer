import styled from 'styled-components'

export default styled.View`
  padding-horizontal: 20;
  flex: 1;

  ${props =>
    props.width &&
    `
      width: ${props.width};
  `};

  ${props =>
    props.height &&
    `
      height: ${props.height};
  `};

  ${props =>
    props.loading &&
    `
      justify-content: center;
      align-items: center;
  `};
  ${props =>
    props.directionLine &&
    `
      flex-direction: row;
  `};
  ${props =>
    props.directionColumn &&
    `
      flex-direction: column;
  `};
`
