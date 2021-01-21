import styled from 'styled-components';

export const Container = styled.div`
  background: #f3f3f3;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 30px;
  h1 {
    text-align: center;
    color: #666360;
    margin-bottom: 20px;
  }

  img {
    //width: 500px;
    display: flex;
    margin: auto;
    align-self: center;
    height: 100px;
  }
`;
