import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const BioContext = createContext(); // the bio context

const BioProvider = ({ children }) => {
  const [bio, setBio] = useState([]); // all the bio
  const url = "http://localhost:4040/api/bio/";

  // function that pulls the bio from the server
  const getBio = async () => {
    const { data } = await axios.get(url);
    console.log(data);
    setBio(data);
  };

  // function that add new bio
  const addNewBio = async (body) => {
    const { data } = await axios.post(url, body);
    console.log(data);
  };

  // function that delete bio by id
  const deleteBio = async (id) => {
    const { data } = await axios.delete(url + id);
    console.log(data)
  };

  // function that change bio
  const changeBio = async (id, body) => {
    const result = await axios.patch(url + id, body);
    console.log(result);
    console.log(body);
  };

  useEffect(() => {
    getBio();
  }, []);

  return (
    <BioContext.Provider
      value={{
        bio,
        setBio,
        addNewBio,
        deleteBio,
        changeBio,
      }}
    >
      {children}
    </BioContext.Provider>
  );
};

export default BioProvider;
