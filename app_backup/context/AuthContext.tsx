'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';

// Data types
export interface AuthState {
  isAuthenticated: boolean;
  jwtToken : string;
  login ?:()=> void;
  logout ?: ()=>void;
}

const AuthContext = createContext<AuthState>({ isAuthenticated: false, jwtToken : '' });


export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    jwtToken : '' 
  })

  useEffect(() => {
      
    const storedUser = localStorage.getItem('token');
    if (storedUser) {
      setAuthState({ ...authState,isAuthenticated: true, jwtToken: JSON.parse(storedUser) });
    }
    
  }, []);


  const login = () => {
    const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    setAuthState(prevState => ({
      ...prevState,
      isAuthenticated: true,
      jwtToken
    }));
    localStorage.setItem('token', JSON.stringify(jwtToken));
  };
 

  const logout = () => {
    setAuthState({ isAuthenticated: false, jwtToken :""});
    localStorage.removeItem('token');
  };
  
  useEffect(() => {
      if(authState.isAuthenticated){
          localStorage.setItem('token', JSON.stringify(authState.jwtToken));
      }
  }, [authState]);
  
  return (
    <AuthContext.Provider value={{ ...authState, login , logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
