import styled from 'styled-components';

const Column = styled.div`
  width: ${props => props.width * 8.333333333333333 + "%"};
  float: left;
`;

export default Column;