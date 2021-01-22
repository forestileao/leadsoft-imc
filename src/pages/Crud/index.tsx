import React from 'react';
import {CgOptions} from 'react-icons/cg';

import {Container, Content, Header} from './styles';

const Crud: React.FC = () => {
  return (
    <>
      <Header>
        <div>
          <h3>LeadSoft</h3>
          <a href="#">
            <h4>Logout</h4>
          </a>
        </div>
      </Header>
      <Container>
        <Content>
          <table>
            <tr>
              <th>Nome Completo</th>
              <th>Idade</th>
              <th>Altura</th>
              <th>Peso</th>
              <th>IMC</th>
              <th>
                <CgOptions />
              </th>
            </tr>

            <tr>
              <td>Pinto</td>
              <td>dwda</td>
              <td>dawd</td>
              <td>dawd</td>
              <td>dawd</td>
              <td>dwad</td>
            </tr>
          </table>
        </Content>
      </Container>
    </>
  );
};

export default Crud;
