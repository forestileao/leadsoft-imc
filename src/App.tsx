import React from 'react';
import GlobalStyle from './styles/global';

import LogIn from './pages/LogIn';
import Crud from './pages/Crud';

const App: React.FC = () => (
  <>
    <Crud />
    <GlobalStyle />
  </>
);

export default App;
