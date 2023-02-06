import React from "react";
import { Route, Routes } from "react-router-dom";
import Article from "./main/article";
const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Article />} />

    </Routes>
  );
};

export default Main;
