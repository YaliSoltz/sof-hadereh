import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AdminInterface from "./comp-admin/Admin-interface";
import UserInterface from "./comp-user/User-interface";
import { UserContext } from "./context/user";
import Login from "./login";
import Reading from "./components/reading";

const App = () => {
  const { token } = useContext(UserContext);

  return (
    <Routes>
      <Route
        path="/"
        element={token ? <AdminInterface /> : <UserInterface />}
      />
      <Route
        path="/articles"
        element={token ? <AdminInterface id={0} /> : <UserInterface id={0} />}
      />
      <Route
        path="/sharings"
        element={token ? <AdminInterface id={1} /> : <UserInterface id={1} />}
      />
      <Route
        path="/lectures"
        element={token ? <AdminInterface id={2} /> : <UserInterface id={2} />}
      />
      <Route
        path="/about-me"
        element={token ? <AdminInterface id={3} /> : <UserInterface id={3} />}
      />
      <Route
        path="/readings"
        element={token ? <AdminInterface id={3} /> : <UserInterface id={4} />}
      />

      <Route path="/login" element={<Login />} />
      <Route path="/add" element={<Reading />} />
    </Routes>
  );
};

export default App;
