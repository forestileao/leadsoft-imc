import styled from 'styled-components';
import {shade} from 'polished';

export const Header = styled.header`
  height: 50px;
  background-color: #145af5;

  div {
    display: flex;
    margin: auto;
    padding-top: 10px;
    max-width: 860px;
    justify-content: space-between;
    align-items: center;
    color: #fff;

    a {
      color: #fff;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#fff')};
      }
    }
  }
`;

export const Container = styled.div`
  margin: auto;
  max-width: 900px;
`;

export const Content = styled.div`
  margin-left: 20px;
  margin-right: 20px;

  table {
    font-family: Arial, Helvetica, sans-serif;
    display: block;

    tr:first-child {
      border: solid black 2px;
      border-bottom: 0;
      margin-top: 20px;
      background-color: #8bacf4;
      border-radius: 5px 5px 0 0;
    }

    tr {
      display: flex;
      width: 100%;
    }

    td {
      color: #000;
      display: flex;

      height: 50px;
      align-items: center;
      justify-content: center;
      flex: 1;
    }

    th {
      color: #fff;
      display: flex;

      height: 50px;
      align-items: center;
      justify-content: center;
      flex: 1;
    }
  }
`;
