import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const SharingContext = createContext(); // the sharing context

const SharingProvider = ({ children }) => {
  const [sharings, setSharings] = useState([]); // all the sharings
  const url = "http://localhost:4040/api/sharings/";

  // function that pulls all the sharings from the server
  const getSharings = async () => {
    const { data } = await axios.get(url);
    console.log(data);
    setSharings(data);
  };

  // function that add new sharing
  const addNewSharing = async (body) => {
    const { data } = await axios.post(url, body);
    console.log(data);
  };

  // function that delete sharing by id
  const deleteSharing = async (id) => {
    const { data } = await axios.delete(url + id);
    console.log(data);
  };

  // function that change Sharing
  const changeSharing = async (id, body) => {
    const result = await axios.patch(url + id, body);
    console.log(result);
    console.log(body);
  };

  useEffect(() => {
    getSharings();
  }, []);

  return (
    <SharingContext.Provider
      value={{
        sharings,
        setSharings,
        addNewSharing,
        deleteSharing,
        changeSharing,
      }}
    >
      {children}
    </SharingContext.Provider>
  );
};

export default SharingProvider;
