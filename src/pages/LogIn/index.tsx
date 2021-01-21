import React, {useRef, useCallback, useState} from 'react';
import {Form} from '@unform/web';
import {FormHandles} from '@unform/core';
import {FiLock, FiMail} from 'react-icons/fi';
import * as Yup from 'yup';

import {Container, Content} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.png';

import getValidationErrors from '../../utils/getValidationErrors';

interface LogInFormData {
  email: string;
  password: string;
}

const LogIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: LogInFormData) => {
    formRef.current?.setErrors({});
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um E-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      /*signIn({
        email: data.email,
        password: data.password,
      });*/
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

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
