import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const SentenceContext = createContext(); // the sentence context

const SentenceProvider = ({ children }) => {
  const [sentences, setSentences] = useState([]); // all the sentences
  const url = "http://localhost:4001/api/sentences/";

  // function that pulls all the sentences from the server
  const getSentences = async () => {
    const { data } = await axios.get(url);
    console.log(data);
    setSentences(data);
  };

  // function that add new sentence
  const addNewSentence = async (body) => {
    const { data } = await axios.post(url, body);
    console.log(data);
  };

  // function that delete sentence by id
  const deleteSentence = async (id) => {
    const { data } = await axios.delete(url + id);
    console.log(data);
  };

  // function that change sentence
  const changeSentence = async (id, body) => {
    const result = await axios.patch(url + id, body);
    console.log(result);
    console.log(body);
  };

  useEffect(() => {
    getSentences();
  }, []);

  return (
    <SentenceContext.Provider
      value={{
        sentences,
        setSentences,
        addNewSentence,
        deleteSentence,
        changeSentence,
      }}
    >
      {children}
    </SentenceContext.Provider>
  );
};

export default SentenceProvider;
