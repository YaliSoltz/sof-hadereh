import React, { useContext, useState } from "react";
import { ArticleContext } from "../../context/article";
import { UserContext } from "../../context/user";
const Article = () => {
  const { articles, deleteArticle, changeArticle } = useContext(ArticleContext);
  const { user } = useContext(UserContext);

  const [open, setOpen] = useState(false);
  const [id, setId] = useState(); // selected article id
  const [key, setKey] = useState(); // selected article key
  const [value, setValue] = useState(); // selected article value

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
      <div className="edit-modal" hidden={!open}>
        <div className="edit-modal-content">
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

      {articles.map((article, index) => (
        <div className="article-card" key={index}>
          {user.role === "admin" && (
            <select
              className="editor"
              defaultValue=""
              onChange={(e) => {
                switch (e.target.value) {
                  case "title":
                    openEdit(article._id, "title", article.title);
                    break;

                  case "content":
                    openEdit(article._id, "content", article.content);
                    break;

                  case "delete":
                    deleteArticle(article._id);
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
          <img
            className="article-card-img"
            src={article.imgUrl.url}
            alt="IMG"
          />
          <h3 className="article-card-title">{article.title}</h3>
          <div className="article-card-content">
            <div>
             
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
