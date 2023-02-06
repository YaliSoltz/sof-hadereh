import React, { useContext } from "react";
import { ArticleContext } from "../../context/article";

const Article = () => {
  const { articles } = useContext(ArticleContext);
  return (
    <>
      {articles.map((article, index) => (
        <div
          className="card_article"
          key={index}
          style={{
            backgroundImage: `url(${article.imgUrl.url})`,
          }}
        >
          <p>{article.title}</p>
          <p>{article.content}</p>
        </div>
      ))}
    </>
  );
};

export default Article;
