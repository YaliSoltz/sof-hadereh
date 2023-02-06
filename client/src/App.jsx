import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AdminInterface from "./comp-admin/Admin-interface";
import UserInterface from "./comp-user/User-interface";
import { UserContext } from "./context/user";
import Login from "./login";

const App = () => {
  const { token } = useContext(UserContext);

  return (
    <Routes>
      <Route
        path="/"
        element={token ? <AdminInterface /> : <UserInterface />}
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
