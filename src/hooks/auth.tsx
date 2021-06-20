import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';

import api from '../services/api';

interface User {
  id: string;
  email: string;
  name: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => Promise<void>;
  updatedUser: (user: User) => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<User>({} as User);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('/authenticate', {
        email,
        password
      });

      const { token, user } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`;

      await AsyncStorage.setItem('@stageView:user', JSON.stringify({ ...user, token }));

      setData({ ...user, token });

    } catch (error) {
      throw new Error(error);
    }
  }

  async function signOut() {
    try {
      setData({} as User);
    } catch (error) {
      throw new Error(error);
    }
  }

  async function updatedUser(user: User) {
    try {

      setData(user);

    } catch (error) {
      throw new Error(error);
    }
  }
  
  useEffect(() => {
    async function loadUserData() {
      const data = await AsyncStorage.getItem('@stageView:user');
      const loadedData = data ? JSON.parse(data) : []
      
      if(loadedData.length > 0){
        api.defaults.headers.authorization = `Bearer ${loadedData[0].token}`;
        setData(loadedData[0].user);
      }
    }

    loadUserData();
  }, [])

  return (
    <AuthContext.Provider value={{
      user: data,
      signIn,
      signOut,
      updatedUser
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context
}

export { AuthProvider, useAuth };
