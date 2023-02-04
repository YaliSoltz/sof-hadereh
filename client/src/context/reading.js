import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ReadingContext = createContext(); // the reading context

const ReadingProvider = ({ children }) => {
  const [readings, setReadings] = useState([]); // all the readings
  const url = "http://localhost:4040/api/Readings/";

  // function that pulls all the readings from the server
  const getReadings = async () => {
    const { data } = await axios.get(url);
    console.log(data);
    setReadings(data);
  };

  // function that add new reading
  const addNewReading = async (body) => {
    const { data } = await axios.post(url, body);
    console.log(data);
  };

  // function that delete reading by id
  const deleteReading = async (id) => {
    const { data } = await axios.delete(url + id);
    console.log(data)
  };

  // function that change reading
  const changeReading = async (id, body) => {
    const result = await axios.patch(url + id, body);
    console.log(result);
    console.log(body);
  };

  useEffect(() => {
    getReadings();
  }, []);

  return (
    <ReadingContext.Provider
      value={{
        readings,
        setReadings,
        addNewReading,
        deleteReading,
        changeReading,
      }}
    >
      {children}
    </ReadingContext.Provider>
  );
};

export default ReadingProvider;
