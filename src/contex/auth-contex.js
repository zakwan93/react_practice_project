import React from 'react';

const authContex = React.createContext({
    authanticated: false,
    login: () => {

    }
});


export default authContex;