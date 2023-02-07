import React from "react";
import "../css/User.css";
import Footer from "./footer";
import Header from "./header";
import Main from "./main";
import Article from "./main/article";
import Bio from "./main/bio";
import Lecture from "./main/lecture";
import PersonalSharing from "./main/personalSharing";
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
              return <PersonalSharing />;
            case 2:
              return <Lecture />;
            case 3:
              return <Bio />;
            default:
              return;
          }
        })()}
      </div>
      <Footer />
    </div>
  );
};

export default UserInterface;
