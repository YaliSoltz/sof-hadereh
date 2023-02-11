import React from "react";
import "../css/User.css";

import Header from "./header";
import Article from "./main/article";
import Bio from "./main/bio";
import Lecture from "./main/lecture";
import Sharing from "./main/sharing";
import Reading from "./main/reading";
import Footer from "./footer";
import Page404 from "./main/page404";
const UserInterface = ({ id }) => {
  return (
    <div>
      <Header />
      <div className="Main">
        {(() => {
          switch (id) {
            case 0:
              return <Article />;
            case 1:
              return <Sharing />;
            case 2:
              return <Lecture />;
            case 3:
              return <Bio />;
            case 4:
              return <Reading />;
            case 5:
              return <Page404 />;
            default:
              return;
          }
        })()}
      </div>
      <Footer/>
    </div>
  );
};

export default UserInterface;
