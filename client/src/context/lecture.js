import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const LectureContext = createContext(); // the lecture context

const LectureProvider = ({ children }) => {
  const [lectures, setLectures] = useState([]); // all the lectures
  const url = "http://localhost:4001/api/lectures/";

  // function that pulls all the lectures from the server
  const getLectures = async () => {
    const { data } = await axios.get(url);
    console.log(data);
    setLectures(data);
  };

  // function that add new lecture
  const addNewLecture = async (body) => {
    const { data } = await axios.post(url, body);
    console.log(data);
  };

  // function that delete lecture by id
  const deleteLecture = async (id) => {
    const { data } = await axios.delete(url + id);
    console.log(data)
  };

  // function that change Lecture
  const changeLecture = async (id, body) => {
    const result = await axios.patch(url + id, body);
    console.log(result);
    console.log(body);
  };

  useEffect(() => {
    getLectures();
  }, []);

  return (
    <LectureContext.Provider
      value={{
        lectures,
        setLectures,
        addNewLecture,
        deleteLecture,
        changeLecture,
      }}
    >
      {children}
    </LectureContext.Provider>
  );
};

export default LectureProvider;
