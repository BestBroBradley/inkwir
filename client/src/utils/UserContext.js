import React from "react";

const UserContext = React.createContext({
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
        loggedIn: false,
        user: null,
        failureMessage: null
});

export default UserContext