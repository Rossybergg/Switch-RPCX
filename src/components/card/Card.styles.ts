import styled from 'styled-components';

export const StyledCard = styled.img`
  position: relative;
  display: inline-block;
  width: 150px;
  height: 250px;
  margin: 0 5px;
  transition: 0.2s;
  border: 3px solid transparent;
  outline: 5px solid transparent;

  :hover {
    border: 3px solid #2d2d2d;
    outline: 5px solid #18bdff;
    cursor: pointer;
  }
`;
