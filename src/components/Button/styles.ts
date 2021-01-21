import styled from 'styled-components';
import {shade} from 'polished';

export const Container = styled.button`
  margin-top: 16px;
  height: 56px;
  background: #0d86f7;
  border-radius: 10px;
  border: 0;
  color: #fff;
  padding: 0 16px;
  width: 100%;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#0D86F7')};
  }
`;
