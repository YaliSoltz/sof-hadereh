import React from "react";
import { Route, Routes } from "react-router-dom";
import Article from "./main/article";
const Main = () => {
  return (
   <div className="main">
     <Routes>
      <Route path="/" element={<Article />} />

    </Routes>
   </div>
  );
};

export default Main;
