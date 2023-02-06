import React, { useContext } from "react";
import { UserContext } from "../context/user";

const Header = () => {
  const { setToken } = useContext(UserContext);

  return (
    <div>
      <button
        onClick={() => {
          localStorage.removeItem("x-auth-token");
          setToken();
        }}
      >
        logout
      </button>
    </div>
  );
};

export default Header;
