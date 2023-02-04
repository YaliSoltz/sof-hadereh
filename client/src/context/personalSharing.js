import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PersonalSharingContext = createContext(); // the personalSharing context

const PersonalSharingProvider = ({ children }) => {
  const [personalSharings, setPersonalSharings] = useState([]); // all the personalSharings
  const url = "http://localhost:4050/api/personalSharings/";

  // function that pulls all the personalSharings from the server
  const getPersonalSharing = async () => {
    const { data } = await axios.get(url);
    console.log(data);
    setPersonalSharings(data);
  };

  // function that add new personalSharing
  const addNewPersonalSharing = async (body) => {
    const { data } = await axios.post(url, body);
    console.log(data);
  };

  // function that delete personalSharing by id
  const deletePersonalSharing = async (id) => {
    const { data } = await axios.delete(url + id);
    console.log(data)
  };

  useEffect(() => {
    getPersonalSharing();
  }, []);

  return (
    <PersonalSharingContext.Provider
      value={{
        personalSharings,
        setPersonalSharings,
        addNewPersonalSharing,
        deletePersonalSharing,
      }}
    >
      {children}
    </PersonalSharingContext.Provider>
  );
};

export default PersonalSharingProvider;
