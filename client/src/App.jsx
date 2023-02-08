import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AdminInterface from "./comp-admin/Admin-interface";
import UserInterface from "./comp-user/User-interface";
import { UserContext } from "./context/user";
import Login from "./login";
import Lecture from "./components/lecture";

const App = () => {
  const { token } = useContext(UserContext);
  const id = 0;

  return (
    <Routes>
      <Route
        path="/"
        element={token ? <AdminInterface /> : <UserInterface />}
      />
      <Route
        path="/article"
        element={token ? <AdminInterface id={0} /> : <UserInterface id={0} />}
      />
      <Route
        path="/sharing"
        element={token ? <AdminInterface id={1} /> : <UserInterface id={1} />}
      />
      <Route
        path="/lecture"
        element={token ? <AdminInterface id={2} /> : <UserInterface id={2} />}
      />
      <Route
        path="/bio"
        element={token ? <AdminInterface id={3} /> : <UserInterface id={3} />}
      />

      <Route path="/login" element={<Login />} />
      <Route path="/add" element={<Lecture />} />
    </Routes>
  );
};

export default App;
