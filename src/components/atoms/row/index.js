import styled from 'styled-components';

const Row = styled.div`
  padding: 30px 0;
  ::after {
    content: "";
    clear: both;
    display: table;
  }
`;

export default Row;