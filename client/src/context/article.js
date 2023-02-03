import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ArticleContext = createContext(); // the article context

const ArticleProvider = ({ children }) => {
  const [articles, setArticles] = useState([]); // all the articles
  const url = "http://localhost:4040/api/articles/";

  // function that pulls all the articles from the server
  const getArticles = async () => {
    const { data } = await axios.get(url);
    console.log(data);
    setArticles(data);
  };

  // function that add new article
  const addNewArticle = async (body) => {
    const { data } = await axios.post(url, body);
    console.log(data);
  };

  // function that delete article by id
  const deleteArticle = async (id) => {
    const { data } = await axios.delete(url + id);
    console.log(data)
  };

  // function that change article
  const changeArticle = async (id, body) => {
    const result = await axios.patch(url + id, body);
    console.log(result);
    console.log(body);
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <ArticleContext.Provider
      value={{
        articles,
        setArticles,
        addNewArticle,
        deleteArticle,
        changeArticle,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleProvider;
