import React, {useState, useEffect, useRef} from 'react';
import {Form} from '@unform/web';
import {FormHandles} from '@unform/core';
import {Link, useRouteMatch, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import {Container} from './styles';
import Button from '../../components/Button';
import Header from '../../components/Header';
import api from '../../services/api';
import {useAuth} from '../../hooks/auth';
import {useToast} from '../../hooks/toast';

import {DataType} from '../../pages/Crud';

interface PersonParams {
  id?: string;
}

interface RequestError {
  title: string;
  status: number;
}
interface PersonFormData {
  name: string;
  surname: string;
  dateOfBirth: string;
  weigth: number;
  height: number;
  id: string;
}

const NewPerson: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);
  const {addToast} = useToast();
  const [person, setPerson] = useState({} as DataType);
  const {params} = useRouteMatch<PersonParams>();
  const {auth, logOut} = useAuth();

  async function handleSavePerson(data: PersonFormData) {
    let formatedDate = '';

    if (data.dateOfBirth) {
      formatedDate = new Date(data.dateOfBirth).toISOString();
    }

    const requestData = {
      name: data.name,
      surname: data.surname,
      dateOfBirth: formatedDate,
      weigth: data.weigth,
      height: data.height,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required('Nome não pode estar vazio'),
      surname: Yup.string().required('Sobrenome não pode estar vazio'),
      dateOfBirth: Yup.date().max(2070).min(1980),
      weigth: Yup.number().required('Peso não pode estar vazio').max(500),
      height: Yup.number().required('Altura Não pode estar vazia').max(3),
    });

    try {
      await schema.validate(data, {
        abortEarly: false,
      });

      if (params.id) {
        await api.put(
          `/People/${params.id}`,
          {
            ...requestData,
            id: data.id,
          },
          {
            headers: {
              Authorization: auth,
            },
          }
        );
        addToast({
          type: 'success',
          title: 'Requisição completa',
          description: 'Pessoa salva com sucesso',
        });
        history.goBack();
      } else {
        await api.post('/People', requestData, {
          headers: {
            Authorization: auth,
          },
        });
        addToast({
          type: 'success',
          title: 'Requisição completa',
          description: 'Pessoa salva com sucesso',
        });
        history.goBack();
      }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);

        return;
      }
      addToast({
        type: 'error',
        title: 'Erro',
        description: 'Houve um erro na requisição',
      });

      if ((err as RequestError).title === 'Unauthorized') {
        logOut();
      }
    }
  }

  async function handlePersonData(id: string) {
    try {
      const response = await api.get(`/People/${id}`, {
        headers: {
          Authorization: auth,
        },
      });

      setPerson(response.data);
    } catch (err) {
      if ((err as RequestError).title === 'Unauthorized') {
        logOut();
      }
    }
  }

  useEffect(() => {
    params.id && handlePersonData(params.id);
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Link to="/">
          <FiArrowLeft size={25} />
        </Link>
        <Form ref={formRef} onSubmit={handleSavePerson}>
          <Input
            name="name"
            type="text"
            maxLength={20}
            placeholder="Nome"
            defaultValue={person ? person.Name : ''}
          />
          <Input
            name="surname"
            type="text"
            maxLength={20}
            placeholder="Sobrenome"
            defaultValue={person ? person.Surname : ''}
          />
          <Input
            name="dateOfBirth"
            type="date"
            placeholder="Data de Nascimento"
            defaultValue={
              person ? person.DateOfBirth?.substr(0, 10) : '2020-01-01'
            }
          />
          <Input
            name="height"
            type="number"
            step="0.01"
            min="0"
            max="3"
            placeholder="Altura"
            defaultValue={person ? person.Height : 1}
          />
          <Input
            name="weigth"
            type="number"
            step="0.01"
            min="0"
            max="500"
            placeholder="Peso"
            defaultValue={person ? person.Weigth : 1}
          />

          <Button type="submit">Salvar</Button>
        </Form>
      </Container>
    </>
  );
};

export default NewPerson;
