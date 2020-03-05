import React from "react";

const UserContext = React.createContext({
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
        loggedIn: true,
        user: null,
        failureMessage: null
});

export default UserContext