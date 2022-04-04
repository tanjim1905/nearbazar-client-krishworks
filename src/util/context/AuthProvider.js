import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContect = createContext(null);

const AuthProvider = ({children}) => {
    const allContext = useFirebase();
    return (
        <AuthContect.Provider value={allContext}>
            {children}
        </AuthContect.Provider>
    );
};

export default AuthProvider;