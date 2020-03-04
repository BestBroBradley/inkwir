import React from "react";

export const UserContext = React.createContext({
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
        loggedIn: false,
        user: null,
        failureMessage: null
});