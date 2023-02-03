import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ConsultationContext = createContext(); // the consultation context

const ConsultationProvider = ({ children }) => {
  const [consultations, setConsultations] = useState([]); // all the consultations
  const url = "http://localhost:4040/api/consultations/";

  // function that pulls all the consultations from the server
  const getConsultations = async () => {
    const { data } = await axios.get(url);
    console.log(data);
    setConsultations(data);
  };

  // function that add new consultation
  const addNewConsultation = async (body) => {
    const { data } = await axios.post(url, body);
    console.log(data);
  };

  // function that delete consultation by id
  const deleteConsultation = async (id) => {
    const { data } = await axios.delete(url + id);
    console.log(data)
  };

  // function that change consultation
  const changeConsultation = async (id, body) => {
    const result = await axios.patch(url + id, body);
    console.log(result);
    console.log(body);
  };

  useEffect(() => {
    getConsultations();
  }, []);

  return (
    <ConsultationContext.Provider
      value={{
        consultations,
        setConsultations,
        addNewConsultation,
        deleteConsultation,
        changeConsultation,
      }}
    >
      {children}
    </ConsultationContext.Provider>
  );
};

export default ConsultationProvider;
