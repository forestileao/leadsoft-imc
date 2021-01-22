import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 20px;
  h1 {
    text-align: center;
    color: #666360;
    margin-bottom: 20px;
  }

  img {
    width: 100px;
    display: flex;
    margin: auto;
    align-self: center;
    //height: 100px;
  }
`;
