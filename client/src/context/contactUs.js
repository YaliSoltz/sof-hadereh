import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ContactUsContext = createContext(); // the contactUs context

const ContactUsProvider = ({ children }) => {
  const [contactUs, setContactUs] = useState([]); // all the contactUs
  const url = "http://localhost:4050/api/contactUs/";

  // function that pulls all the contactUs from the server
  const getContactUs = async () => {
    const { data } = await axios.get(url);
    console.log(data);
    setContactUs(data);
  };

  // function that add new contactUs
  const addNewContactUs = async (body) => {
    const { data } = await axios.post(url, body);
    console.log(data);
  };

  // function that delete contactUs by id
  const deleteContactUs = async (id) => {
    const { data } = await axios.delete(url + id);
    console.log(data)
  };

  useEffect(() => {
    getContactUs();
  }, []);

  return (
    <ContactUsContext.Provider
      value={{
        contactUs,
        setContactUs,
        addNewContactUs,
        deleteContactUs,
      }}
    >
      {children}
    </ContactUsContext.Provider>
  );
};

export default ContactUsProvider;
