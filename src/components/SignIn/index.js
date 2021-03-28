import React from "react";
import { AmplifySignIn } from '@aws-amplify/ui-react';

const SignIn = () => (
<AmplifySignIn
    headerText="My Custom Sign In Text"
    slot="sign-in"
  ></AmplifySignIn>
)

export default SignIn;