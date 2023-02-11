import React, { useContext, useState } from "react";
import { ArticleContext } from "../../../context/article";

const Article = () => {
  const { addNewArticle } = useContext(ArticleContext);

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
    const reader = new FileReader(); // defines new instance from FileReader class
    reader.readAsDataURL(file); // converts the file to base64
    //func that get the image in base64 and add it to newArticle object
    reader.onloadend = () => {
      console.log(reader.result);
      setNewArticle({ ...newArticle, imgUrl: reader.result });
    };
  };

  return (
    <div>
        <h2>הוספת מאמר חדש</h2>
      <form
        id="form"
        className="sharing-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          name="name"
          type="text"
          onChange={(e) =>
            setNewArticle({ ...newArticle, title: e.target.value })
          }
          placeholder="כותרת:"
        />

        <input
          type="file"
          className="img-upload"
          name="img-upload"
          required
          onChange={(e) => setImgUrl(e)}
        />

        <textarea
          placeholder="תוכן:"
          required
          onChange={(e) =>
            setNewArticle({ ...newArticle, content: e.target.value })
          }
        />
        <div>
          <button type="submit" className="send">
            הוספה
          </button>
        </div>
      </form>
    </div>
  );
};

export default Article;
