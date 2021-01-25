import styled from 'styled-components';
import {shade} from 'polished';

export const Container = styled.header`
  height: 50px;
  background-color: #fafafa;

  div {
    display: flex;
    margin: auto;
    padding-top: 15px;
    max-width: 860px;
    justify-content: space-between;
    align-items: center;
    color: #fff;

    img {
      width: 100px;
      margin-top: -56px;
      margin-bottom: -56px;
    }

    h3 {
      color: #474747;
    }
    button {
      border: 0;
      background: transparent;
      color: #474747;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.6, '#474747')};
      }
    }
  }
`;
