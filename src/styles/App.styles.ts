import styled from 'styled-components';

export const StyledApp = styled.div`
  position: relative;
  color: white;
  width: 95vw;
  height: 99vh;
  padding: 0;
  margin: auto;

  .popular-games {
    font-weight: bold;
    color: #18bdff;
  }

  .card-container {
    position: relative;
    padding: 5px;
    box-sizing: border-box;
    height: 300px;
    width: 100%;
    overflow-x: auto;
  }
`;
