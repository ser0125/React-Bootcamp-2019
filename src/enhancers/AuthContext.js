import React from 'react';

//Deben ser padres de los hijos que voy a utilizar
export const AuthContext = React.createContext('jorge');

export const AuthProvider = AuthContext.Provider;

export const AuthConsumer = AuthContext.Consumer;