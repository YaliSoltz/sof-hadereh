import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AdminInterface from "./comp-admin/Admin-interface";
import UserInterface from "./comp-user/User-interface";
import { UserContext } from "./context/user";
import Login from "./login";

const App = () => {
  const { token } = useContext(UserContext);

  return (
    <div>
      {token ? <AdminInterface /> : <UserInterface />}
    </div>
  )
};

export default App;
