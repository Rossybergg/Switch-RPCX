import styled from 'styled-components';

export const StyledHeader = styled.div`
  position: relative;
  height: 75px;
  overflow: hidden;
  margin-bottom: 20px;

  .logo-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50px;
  }

  .logo-avatar {
    position: relative;
    border: 2px solid #4e4e4e;
    background-color: dimgrey;
  }

  .header-text {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: fit-content;
    max-width: 500px;
    right: 40px;
    top: 0;
    padding: 10px;
    font-weight: bold;
  }

  .connection-container {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 100%;
    right: 0;
    top: 0;
  }
`;
