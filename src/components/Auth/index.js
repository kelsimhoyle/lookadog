import React from 'react';

import { AmplifyAuthenticator, AmplifySignUp,  AmplifySignIn } from '@aws-amplify/ui-react';

const Auth = ({children}) => {


    return (

            <AmplifyAuthenticator usernameAlias="email">
            <AmplifySignUp
              slot="sign-up"
              usernameAlias="email"
              formFields={[
                {
                  type: "email",
                  label: "Custom email Label",
                  placeholder: "custom email placeholder",
                  required: true,
                },
                {
                  type: "password",
                  label: "Custom Password Label",
                  placeholder: "custom password placeholder",
                  required: true,
                },
                {
                  type: "phone_number",
                  label: "Custom Phone Label",
                  placeholder: "custom Phone placeholder",
                  required: true,
                },
                {
                    type: "custom:name",
                    label: "Name",
                    placeholder: "Name",
                    required: true
                }
              ]} 
            />
            <AmplifySignIn slot="sign-in" usernameAlias="email" />
            {children}
          </AmplifyAuthenticator>
    

    );

};

export default Auth;

