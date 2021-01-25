import React from 'react';

import {Container} from './styles';
import logoImg from '../../assets/logo.png';

import {useAuth} from '../../hooks/auth';

const Header: React.FC = () => {
  const {logOut} = useAuth();

  return (
    <Container>
      <div>
        <img src={logoImg} alt="LeadSoft" />
        <h3>IMC manager</h3>
        <button onClick={logOut}>
          <h4>Logout</h4>
        </button>
      </div>
    </Container>
  );
};

export default Header;
