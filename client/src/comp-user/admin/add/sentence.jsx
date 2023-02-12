import React, { useContext, useState } from "react";
import { SentenceContext } from "../../../context/sentence";

const Sentence = () => {
  const { addNewSentence } = useContext(SentenceContext);

  const [newSentence, setNewSentence] = useState({}); // new sentence object

  // function that add new sentence and reset the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    addNewSentence(newSentence); // add newSentence to database
    document.getElementById("form").reset(); // reset the form
  };

  return (
    <div>
      <h2>הוספת משפט חדש</h2>
      <form
        id="form"
        className="sharing-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          placeholder="תוכן:"
          required
          onChange={(e) =>
            setNewSentence({ ...newSentence, content: e.target.value })
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

export default Sentence;
