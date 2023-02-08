import React from "react";
import "../css/User.css";

import Header from "./header";
import Article from "./main/article";
import Bio from "./main/bio";
import Lecture from "./main/lecture";
import ContactUs from './contactUs';
import Sharing from "./main/sharing";
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
            default:
              return;
          }
        })()}
      </div>
      <ContactUs/>
    </div>
  );
};

export default UserInterface;
