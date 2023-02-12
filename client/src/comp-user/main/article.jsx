import React, { useContext, useState } from "react";
import { ArticleContext } from "../../context/article";
import { UserContext } from "../../context/user";
const Article = () => {
  const { articles, deleteArticle, changeArticle } = useContext(ArticleContext);
  const { user } = useContext(UserContext);

  // funcion that change title/content or delete
  const edit = (id, key, value) => {
    let text;
    if (key === "title") text = "הכניסי כותרת חדשה";
    else if (key === "content") text = "הכניסי תוכן חדש";
    value = prompt(text, value);
    if (value) changeArticle(id, { [key]: value });
    console.log(value);
  };

  return (
    <div className="article-container">
      {articles.map((article, index) => (
        <div
          key={index}
          className="card"
          style={{
            backgroundImage: `url(${article.imgUrl.url})`,
          }}
        >
          {user.role === "admin" && (
            <select
              className="editor"
              defaultValue=""
              onChange={(e) => {
                switch (e.target.value) {
                  case "title":
                    edit(article._id, "title", article.title);
                    e.target.value = "";
                    break;

                  case "content":
                    edit(article._id, "content", article.content);
                    e.target.value = "";
                    break;

                  case "delete":
                    deleteArticle(article._id);
                    e.target.value = "";
                    break;

                  default:
                    break;
                }
              }}
            >
              <option value="" hidden>
                עריכה
              </option>
              <option value="title">שינוי כותרת</option>
              <option value="content">שינוי תוכן</option>
              <option value="delete">מחיקה</option>
            </select>
          )}
          <div className="card-content">
            <h2 className="card-title">{article.title}</h2>
            <div className="card-body">
              <div>
                {article.content?.split(".").map((word, index) => (
                  <p key={index}>{word + "."}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Article;
