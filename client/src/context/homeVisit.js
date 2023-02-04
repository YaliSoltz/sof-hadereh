import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const HomeVisitContext = createContext(); // the homeVisit context

const HomeVisitProvider = ({ children }) => {
  const [homeVisits, setHomeVisits] = useState([]); // all the homeVisits
  const url = "http://localhost:4040/api/homeVisits/";

  // function that pulls all the homeVisits from the server
  const getHomeVisits = async () => {
    const { data } = await axios.get(url);
    console.log(data);
    setHomeVisits(data);
  };

  // function that add new homeVisit
  const addNewHomeVisit = async (body) => {
    const { data } = await axios.post(url, body);
    console.log(data);
  };

  // function that delete homeVisit by id
  const deleteHomeVisit = async (id) => {
    const { data } = await axios.delete(url + id);
    console.log(data)
  };

  // function that change homeVisit
  const changeHomeVisit = async (id, body) => {
    const result = await axios.patch(url + id, body);
    console.log(result);
    console.log(body);
  };

  useEffect(() => {
    getHomeVisits();
  }, []);

  return (
    <HomeVisitContext.Provider
      value={{
        homeVisits,
        setHomeVisits,
        addNewHomeVisit,
        deleteHomeVisit,
        changeHomeVisit,
      }}
    >
      {children}
    </HomeVisitContext.Provider>
  );
};

export default HomeVisitProvider;
