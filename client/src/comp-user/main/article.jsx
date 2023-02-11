import React, { useContext, useState } from "react";
import { ArticleContext } from "../../context/article";
const Article = () => {
  const { articles, deleteArticle, changeArticle } = useContext(ArticleContext);

  const [open, setOpen] = useState(false);
  const [id, setId] = useState(); // selected article id
  const [key, setKey] = useState(); // selected article key
  const [value, setValue] = useState(""); // selected article value

  // funcion that show the edit modal and declare id + key + value
  const openEdit = (id, key, value) => {
    setId(id);
    setKey(key);
    setValue(value);
    console.log(value);
    setOpen(true);
  };

  return (
    <div className="article-container">
      <div className="article-modal" hidden={!open}>
        <div className="article-modal-content">
          <textarea
            id="textarea"
            value={value}
            cols="50"
            rows="15"
            onChange={(e) => setValue(e.target.value)}
          ></textarea>

          <button onClick={() => setOpen(false)}>ביטול</button>
          <button
            onClick={() => {
              changeArticle(id, {
                [key]: value,
              });
              setOpen(false);
            }}
          >
            אישור
          </button>
        </div>
      </div>

      {/* need to check if server connected */}
      {articles.map((article, index) => (
        <div className="article-card" key={index}>
          {true && (
            <button
              className="article-delete"
              onClick={() => deleteArticle(article._id)}
            >
              מחיקה
            </button>
          )}
          {true && (
            <button
              className="article-change-title"
              onClick={() => openEdit(article._id, "title", article.title)}
            >
              שינוי כותרת
            </button>
          )}
          {true && (
            <button
              className="article-change-content"
              onClick={() => openEdit(article._id, "content", article.content)}
            >
              שינוי תוכן
            </button>
          )}
          <img
            className="article-card-img"
            src={article.imgUrl.url}
            alt="IMG"
          />
          <h3 className="article-card-title">{article.title}</h3>
          <div className="article-card-content">
            <div>
              {/* need to check if work */}
              {article.content.split(".").map((word, index) => (
                <p key={index}>{word + "."}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Article;
