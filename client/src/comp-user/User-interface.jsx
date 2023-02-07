import React from "react";
import "../css/User.css";
import Footer from "./footer";
import Header from "./header";
import Main from "./main";
const UserInterface = () => {
  return (
    <>
      <div className="Container">
        <Header />

        <div className="main">
          <Main />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>

  );
};

export default UserInterface;
