import React, { useContext } from "react";
import { SentenceContext } from "../../context/sentence";
const Home = () => {
  const { sentences } = useContext(SentenceContext);

  const index = Math.floor(Math.random() * sentences.length);

  console.log(index);

  return <h2 className="home-sentence">{sentences[index]?.content}</h2>;
};

export default Home;
