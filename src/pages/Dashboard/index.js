import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/UserProvider";
import { withAuthenticator } from "@aws-amplify/ui-react"

const Dashboard = () => {
    const { user } = useContext(UserContext);

    return (
        <>
            <h1>Dashboard</h1>
            <p>Hello {user.username}</p>
        </>
    )
};


export default withAuthenticator(Dashboard);
