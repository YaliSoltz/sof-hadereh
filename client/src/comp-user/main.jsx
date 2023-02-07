import React from "react";
import { Route, Routes } from "react-router-dom";
import Article from "./main/article";
import Bio from './../components/bio';
import Consultation from './../components/consultation';
import ContactUs from './../components/contactUs';
import HomeVisit from './../components/homeVisit';
import Lecture from './../components/lecture';
import PersonalSharing from './../components/personalSharing';
import Reading from './../components/reading';
const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Bio />} />
      <Route path="/bio" element={<Bio />} />
      <Route path="/article" element={<Article />} />
      <Route path="/consultation" element={<Consultation />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/homevisit" element={<HomeVisit />} />
      <Route path="/lectures" element={<Lecture />} />
      <Route path="/personalsharing" element={<PersonalSharing />} />
      <Route path="/reading" element={<Reading />} />

    </Routes>
  );
};

export default Main;
