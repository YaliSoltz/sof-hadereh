import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ReadingContext = createContext(); // the reading context

const ReadingProvider = ({ children }) => {
  const [readings, setReadings] = useState([]); // all the readings
  const url = "http://localhost:4001/api/Readings/";

  // function that pulls all the readings from the server
  const getReadings = async () => {
    const { data } = await axios.get(url);

    // books category
    let accompanyingChildren = { category: "ליווי ילדים", books: [] };
    let elderly = { category: "הגיל השלישי", books: [] };
    let death = { category: "מה קורה ברגע המוות ואחרי", books: [] };
    let inspiration = { category: "ספרי השראה", books: [] };

    //organize books by category
    data.map((reading) => {
      switch (reading.category) {
        case "ליווי ילדים":
          accompanyingChildren.books.push(
            <div>
              <div
                className="book"
                style={{ backgroundImage: `url(${reading.imgUrl.url})` }}
              >
                {true && (
                  <span
                    className="delete-book"
                    onClick={() => deleteReading(reading._id)}
                  >
                    &times;
                  </span>
                )}
              </div>
            </div>
          );
          break;
        case "הגיל השלישי":
          elderly.books.push(
            <div>
              <div
                className="book"
                style={{ backgroundImage: `url(${reading.imgUrl.url})` }}
              >
                {true && (
                  <span
                    className="delete-book"
                    onClick={() => deleteReading(reading._id)}
                  >
                    &times;
                  </span>
                )}
              </div>
            </div>
          );
          break;
        case "מה קורה ברגע המוות ואחרי":
          death.books.push(
            <div>
              <div
                className="book"
                style={{ backgroundImage: `url(${reading.imgUrl.url})` }}
              >
                {true && (
                  <span
                    className="delete-book"
                    onClick={() => deleteReading(reading._id)}
                  >
                    &times;
                  </span>
                )}
              </div>
            </div>
          );
          break;
        case "ספרי השראה":
          inspiration.books.push(
            <div>
              <div
                className="book"
                style={{ backgroundImage: `url(${reading.imgUrl.url})` }}
              >
                {true && (
                  <span
                    className="delete-book"
                    onClick={() => deleteReading(reading._id)}
                  >
                    &times;
                  </span>
                )}
              </div>
            </div>
          );
          break;
        default:
          break;
      }
    });

    console.log(data);
    setReadings([accompanyingChildren, elderly, death, inspiration]);
  };

  // function that add new reading
  const addNewReading = async (body) => {
    const { data } = await axios.post(url, body);
    console.log(data);
  };

  // function that delete reading by id
  const deleteReading = async (id) => {
    const { data } = await axios.delete(url + id);
    console.log(data);
  };

  // function that change reading
  const changeReading = async (id, body) => {
    const result = await axios.patch(url + id, body);
    console.log(result);
    console.log(body);
  };

  useEffect(() => {
    getReadings();
  }, []);

  return (
    <ReadingContext.Provider
      value={{
        readings,
        setReadings,
        addNewReading,
        deleteReading,
        changeReading,
      }}
    >
      {children}
    </ReadingContext.Provider>
  );
};

export default ReadingProvider;
