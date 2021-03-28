import React, { createContext, useEffect, useState } from "react";
import { Auth } from 'aws-amplify';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        checkUser();
    }, []);

    async function checkUser() {
        
        try {
            let user = await Auth.currentAuthenticatedUser();
            setUser(user)
          } catch {
            setUser(null)
          }
    };

    function signOut() {
        Auth.signOut()
            .then(() => setUser(null))
            .catch(err => console.log('error signing out: ', err));
    };

    return (
        <UserContext.Provider value={{user, signOut}}>
            {children}
        </UserContext.Provider>

    )
};

export { UserProvider, UserContext };