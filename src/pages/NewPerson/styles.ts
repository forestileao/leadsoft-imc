import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
  //height: 100vh;
  margin: 0 auto;
  margin-top: 40px;
  max-width: 400px;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: #000;
  }

  form {
    margin-top: 20px;

    div {
      display: flex;
    }
  }
`;

/*export const FlexContainer = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  justify-content: ${props => (
    props.style?.justifyContent ?? 'center'
  )};
  align-items: ${props => (
    props.style?.alignItems ?? ''
  )};
  flex-direction: ${};
`;
*/
