import styled, {css} from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 10px;
  border: 2px solid #e8e8e8;
  padding: 16px;
  width: 100%;
  color: #0d86f7;
  display: flex;
  align-items: center;
  color: #666360;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
      padding-right: -4px;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #0d86f7;
      border-color: #0d86f7;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #0d86f7;
    `}


  input {
    color: #666360;
    flex: 1;
    border: 0;
    background: transparent;

    &::placeholder {
      color: #dbd9d6;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
