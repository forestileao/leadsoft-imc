import React, {useRef, useCallback} from 'react';
import {Form} from '@unform/web';
import {FormHandles} from '@unform/core';
import {FiLock, FiMail} from 'react-icons/fi';
import * as Yup from 'yup';

import {Container, Content} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.png';

import getValidationErrors from '../../utils/getValidationErrors';
import {useAuth} from '../../hooks/auth';
import {useToast} from '../../hooks/toast';

interface LogInFormData {
  email: string;
  password: string;
}

const LogIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const {logIn} = useAuth();
  const {addToast} = useToast();

  const handleSubmit = useCallback(
    async (data: LogInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um E-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await logIn({
          username: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          title: 'Erro na autenticação',
          description: 'Usuário ou senha inválidos',
          type: 'error',
        });
      }
    },
    [logIn, addToast]
  );

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="LeadSoft" />
        <h1>Faça seu Logon</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input icon={FiMail} name="email" placeholder="Email" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Password"
          />
          <Button type="submit">Entrar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default LogIn;
