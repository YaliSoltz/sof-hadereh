import React, { useContext } from "react";
import { UserContext } from "../context/user";
import AdminNavBar from "./header/adminNavBar";
import UserNavBar from "./header/userNavBar";
const Header = () => {
  const { token } = useContext(UserContext);
  return <div>{token ? <AdminNavBar /> : <UserNavBar />}</div>;
};

export default Header;
