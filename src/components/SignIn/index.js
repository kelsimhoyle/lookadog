import React from "react";
import { AmplifySignIn } from '@aws-amplify/ui-react';

const SignIn = () => (
<AmplifySignIn
    headerText="Sign In"
    slot="sign-in"
  ></AmplifySignIn>
)

export default SignIn;