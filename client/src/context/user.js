import jwtDecode from "jwt-decode";
import React, { createContext, useEffect, useState } from "react";
export const UserContext = createContext(); // the user context

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [token, setToken] = useState(localStorage.getItem("x-auth-token"));

  useEffect(() => {
    if (token) setUser(jwtDecode(token));
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
