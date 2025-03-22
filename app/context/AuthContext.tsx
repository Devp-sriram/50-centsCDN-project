'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';

// D types


export type User = {

    email : string ,
    password : string ,
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User ,
  login ?:(User:User)=> void,
  logout ?:()=> void
}


const AuthContext = createContext<AuthState>({ isAuthenticated: false, user: 
    { 
      email : "",
      password : "",
    },
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: {
      email : "",
      password : "",
    },
  })

  useEffect(() => {
      
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setAuthState({ ...authState,isAuthenticated: true, user: JSON.parse(storedUser) });
    }
    
  }, []);

  

  const login = (user: User) => {
    setAuthState(prevState => ({
      ...prevState,
      isAuthenticated: true,
      user
    }));
    localStorage.setItem('user', JSON.stringify(user));
  };
 

  const logout = () => {
    setAuthState({ isAuthenticated: false, user: {
      email : "",
      password : "", 
      }
    });
    localStorage.removeItem('user');
  };
  
  useEffect(() => {
      if(authState.isAuthenticated){
          localStorage.setItem('user', JSON.stringify(authState.user));
      }
  }, [authState]);
  
  return (
    <AuthContext.Provider value={{ ...authState, login , logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
