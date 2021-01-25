import React, {useState, useEffect} from 'react';
import {CgOptions} from 'react-icons/cg';
import {FiEdit, FiDelete, FiPlusCircle} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import {Container, Content} from './styles';
import Header from '../../components/Header';
import {useAuth} from '../../hooks/auth';

import api from '../../services/api';
import {useToast} from '../../hooks/toast';

export interface DataType {
  Id: string;
  Name: string;
  Surname: string;
  DateOfBirth: string;
  Weigth: number;
  Height: number;
}

interface ResponseError {
  title: string;
}

const Crud: React.FC = () => {
  const [data, setData] = useState<DataType[]>([]);
  const {auth, logOut} = useAuth();
  const {addToast} = useToast();

  useEffect(() => {
    api
      .get('/People', {
        headers: {
          Authorization: auth,
        },
      })
      .then(response => {
        setData(response.data);
      })
      .catch((error: ResponseError) => {
        addToast({
          title: error.title,
          description: 'Não foi possível fazer a requisição',
          type: 'error',
        });
        logOut();
      });
  }, [data, logOut, addToast]);

  async function handleDelete(id: string, name: string) {
    if (confirm(`Você realmente quer excluir ${name} do banco de dados?`)) {
      try {
        await api.delete(`/People/${id}`, {
          headers: {
            Authorization: auth,
          },
        });
      } catch (err) {
        addToast({
          title: err.title,
          description: `Não foi possível deletar ${name}`,
          type: 'error',
        });
      }
    }
  }

  function handleAdd() {}

  function getAge(birth: Date) {
    const ageDifMs = Date.now() - birth.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Link to="/Person">
            <button onClick={handleAdd}>
              <FiPlusCircle size={25} />
            </button>
          </Link>
          <table>
            <thead>
              <tr>
                <th>Nome Completo</th>
                <th>Idade</th>
                <th>Altura</th>
                <th>Peso</th>
                <th>IMC</th>
                <th>
                  <CgOptions size={25} />
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map(person => {
                return (
                  <tr key={person.Id}>
                    <td>
                      {person.Name} {person.Surname}
                    </td>
                    <td>{getAge(new Date(person.DateOfBirth))}</td>
                    <td>{person.Height}</td>
                    <td>{person.Weigth}</td>
                    <td>
                      {Math.round(
                        (person.Weigth / (person.Height * person.Height)) * 10
                      ) / 10}
                    </td>
                    <td>
                      <Link to={`/Person/${person.Id}`}>
                        <button>
                          <FiEdit size={25} />
                        </button>
                      </Link>

                      <button>
                        <FiDelete
                          onClick={() => handleDelete(person.Id, person.Name)}
                          size={25}
                        />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Content>
      </Container>
    </>
  );
};

export default Crud;
