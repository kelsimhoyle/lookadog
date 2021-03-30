import React, { useContext } from "react";
import { UserContext } from "../../Context/UserProvider";
import Auth from "../../components/Auth";

const Dashboard = () => {
    const { user } = useContext(UserContext);
    console.log(user)

    return (
        <Auth>
            <h1>Dashboard</h1>
            {/* <p>Hello {user.attributes.email}</p> */}
     </Auth>
    )
};


export default Dashboard;
