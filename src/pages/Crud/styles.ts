import styled from 'styled-components';
import {shade} from 'polished';

export const Header = styled.header`
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
    a {
      color: #474747;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.6, '#474747')};
      }
    }
  }
`;

export const Container = styled.div`
  margin: auto;
  margin-top: 20px;
  max-width: 900px;

  button {
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2px;
  }
`;

export const Content = styled.div`
  > a {
    button {
      background-color: #0d84f7;
      color: #fff;
      padding: 3px;
      border-radius: 3px;
      transition: background-color 0.2s;

      &:hover {
        background-color: ${shade(0.5, '#0d84f7')};
      }
    }
  }
  margin-left: 20px;
  margin-right: 20px;

  table {
    font-family: Arial, Helvetica, sans-serif;
    display: block;

    thead {
      display: flex;
      tr {
        display: flex;
        width: 100%;
        //border: solid black 2px;
        border-bottom: 0;
        background-color: #0d84f7;
        border-radius: 5px 5px 0 0;
      }
    }

    tbody {
      display: block;
      tr {
        display: flex;
        width: 100%;
        background-color: #fafafa;
        transition: background-color 0.2s;

        &:hover {
          background-color: ${shade(0.05, '#fafafa')};
        }

        & + tr {
          margin-top: 2px;
        }

        &:last-child {
          border-radius: 0 0 5px 5px;
        }
      }
    }

    td {
      color: #000;
      display: flex;

      height: 50px;
      align-items: center;
      justify-content: center;
      flex: 1;
      button {
        background-color: #e84234;
        color: white;
        padding: 3px;
        border-radius: 3px;
        transition: background-color 0.2s;

        &:first-child {
          background-color: #f9bb08;
          margin-right: 4px;

          &:hover {
            background-color: ${shade(0.2, '#f9bb08')};
          }
        }

        &:hover {
          background-color: ${shade(0.2, '#e84234')};
        }
      }
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
