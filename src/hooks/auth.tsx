import React, {createContext, useCallback, useState, useContext} from 'react';
import api from '../services/api';

interface AuthState {
  Authorization: string;
  When: string;
}

interface LoginCredentials {
  username: string;
  password: string;
}

interface AuthContextData {
  auth: string;
  when: string;
  logOut(): void;
  logIn(credentials: LoginCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC = ({children}) => {
  const [data, setData] = useState<AuthState>(() => {
    const Authorization = localStorage.getItem('@Leadsoft:auth');
    const When = localStorage.getItem('@Leadsoft:when');

    if (Authorization && When) {
      return {Authorization, When};
    }

    return {} as AuthState;
  });

  const logOut = useCallback(() => {
    localStorage.removeItem('@Leadsoft:auth');
    localStorage.removeItem('@Gobarber:when');

    setData({} as AuthState);
  }, []);

  const logIn = useCallback(async ({username, password}) => {
    const response = await api.post('Auth/LogIn', {
      username,
      password,
    });

    const {Authorization, When} = response.data;

    localStorage.setItem('@Leadsoft:auth', Authorization);
    localStorage.setItem('@Leadsoft:when', When);

    setData({Authorization, When});
  }, []);

  return (
    <AuthContext.Provider
      value={{when: data.When, auth: data.Authorization, logIn, logOut}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must br used within an AuthProvider');
  }
  return context;
}
