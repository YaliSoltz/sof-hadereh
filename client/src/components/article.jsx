import React, { useState } from "react";
import { useContext } from "react";
import { ArticleContext } from "../context/article";

const Article = () => {
  const { articles, addNewArticle, deleteArticle, changeArticle } =
    useContext(ArticleContext);

  const [newArticle, setNewArticle] = useState({}); // new article object

  // function that add new article and reset the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    addNewArticle(newArticle); // add newArticle to database
    document.getElementById("form").reset(); // reset the form
  };

  // function that set the newArticle obj with imgUrl
  const setImgUrl = (e) => {
    const file = e.target.files[0]; // defines file as an object who contain image data
    const reader = new FileReader(); // defines new instance from FileReader class\
    reader.readAsDataURL(file); // converts the file to base64

    //func that get the image in base64 and add it to newArticle object
    reader.onloadend = () => {
      console.log(reader.result);
      setNewArticle({ ...newArticle, imgUrl: "reader.result" });
    };
  };

  return (
    <div className="App-header">
      <div style={{ display: "flex" }}>
        {articles.map((article, index) => (
          <div className="card" style={{ width: "18rem" }} key={index}>
            <img src={article.imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <span>כותרת: {article.title}</span>
                <input type="text" id="title" placeholder="כותרת חדשה.." />
                <button
                  onClick={() =>
                    changeArticle(article._id, {
                      title: document.getElementById("title").value,
                    })
                  }
                >
                  שינוי כותרת
                </button>
              </h5>
              <br />
              <h5 className="card-text">
                <span>תוכן: {article.content}</span>
                <input type="text" id="content" placeholder="תוכן חדש.." />
                <button
                  onClick={() =>
                    changeArticle(article._id, {
                      content: document.getElementById("content").value,
                    })
                  }
                >
                  שינוי תוכן
                </button>
              </h5>
              <button
                className="btn btn-primary"
                onClick={() => deleteArticle(article._id)}
              >
                מחיקה
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="form m-3">
        <form
          id="form"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          style={{ border: "solid black 20px" }}
        >
          <input
            type="text"
            className="form-control mb-3"
            placeholder="כותרת:"
            required
            onChange={(e) =>
              setNewArticle({ ...newArticle, title: e.target.value })
            }
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="תוכן:"
            required
            onChange={(e) =>
              setNewArticle({ ...newArticle, content: e.target.value })
            }
          />
          <label
            htmlFor="img-upload"
            className="form-label"
            style={{ color: "white" }}
          >
            העלאת תמונה
          </label>
          <input
            type="file"
            className="form-control mb-3"
            name="img-upload"
            required
            onChange={(e) => setImgUrl(e)}
          />
          <button type="submit" className="btn btn-primary m-2">
            הוספה
          </button>
          <button type="reset" className="btn btn-secondary m-2">
            מחיקה
          </button>
        </form>
      </div>
    </div>
  );
};

export default Article;
