import styled from 'styled-components';

export const StyledApp = styled.div`
  position: relative;
  color: white;
  width: 95vw;
  height: 99vh;
  padding: 0;
  margin: auto;

  .title {
    font-weight: bold;
    color: #18bdff;
  }

  .card-container,
  .game-title {
    float: right;
    position: relative;
    width: 70%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
  }

  .now-playing-container,
  .now-playing-title {
    float: left;
    width: 25%;
  }

  .now-playing-container,
  .content-container,
  .card-container {
    height: 275px;
  }

  .content-container,
  .title-container {
    position: relative;
    width: 100%;
    overflow-y: hidden;
  }

  .now-playing-container,
  .card-container {
    padding: 5px;
    box-sizing: border-box;
  }

  .now-playing-container {
    justify-content: center;
    align-items: center;
  }

  input {
    color: white;
  }
`;
