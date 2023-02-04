import React, { useState } from "react";
import { useContext } from "react";
import { SentenceContext } from "../context/sentence";

const Sentence = () => {
  const { sentences, addNewSentence, deleteSentence, changeSentence } =
    useContext(SentenceContext);
  const [newSentence, setNewSentence] = useState({}); // new sentence object

  // function that add new sentence and reset the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    addNewSentence(newSentence); // add newSentence to database
    document.getElementById("form").reset(); // reset the form
  };

  return (
    <div className="App-header">
      <div style={{ display: "flex" }}>
        {sentences.map((sentence, index) => (
          <div className="card" style={{ width: "18rem" }} key={index}>
            <div className="card-body">
              <h5 className="card-text">
                <span>תוכן: {sentence.content}</span>
                <input
                  type="text"
                  id={"content" + sentence._id}
                  placeholder="תוכן חדש.."
                />
                <button
                  onClick={() =>
                    changeSentence(sentence._id, {
                      content: document.getElementById("content" + sentence._id)
                        .value,
                    })
                  }
                >
                  שינוי תוכן
                </button>
              </h5>
              <button
                className="btn btn-primary"
                onClick={() => deleteSentence(sentence._id)}
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
            placeholder="תוכן:"
            required
            onChange={(e) =>
              setNewSentence({
                ...newSentence,
                content: e.target.value,
              })
            }
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

export default Sentence;
