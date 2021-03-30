import React, { createContext, useEffect, useState } from "react";
import { Auth } from 'aws-amplify';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [auth, setAuth] = useState(false)
    
    useEffect(() => {
        checkUser();
    }, []);

    async function checkUser() {
        try {
            let user = await Auth.currentAuthenticatedUser();
            setUser(user)
            setAuth(true)
          } catch {
            setUser(null)
            setAuth(false)
          }
    };

    const signOut = () => {
        Auth.signOut()
            .then(() => setUser(null))
            .catch(err => console.log('error signing out: ', err));
    };

    const signUp = ({email, password, phone_number, name}) => {
        Auth.signUp({
            'username': email,
            password,
            'attributes': {
                email,
                password,
                phone_number,
                'custom:name': name
            }
        });
    }

    return (
        <UserContext.Provider value={{user, auth, signOut, signUp}}>
            {children}
        </UserContext.Provider>

    )
};

export { UserProvider, UserContext };