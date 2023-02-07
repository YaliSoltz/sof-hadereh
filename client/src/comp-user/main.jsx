import React from "react";
import { Route, Routes } from "react-router-dom";
import Article from "./main/article";
import Bio from "./main/bio";
import Lecture from "./main/lecture";
import PersonalSharing from "./main/personalSharing";
const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/article" element={<Article />} />
        <Route path="/sharing" element={<PersonalSharing />} />
        <Route path="/lecture" element={<Lecture />} />
        <Route path="/bio" element={<Bio />} />
      </Routes>
    </div>
  );
};

export default Main;
