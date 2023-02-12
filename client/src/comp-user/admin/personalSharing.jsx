import React, { useContext } from "react";
import { PersonalSharingContext } from "../../context/personalSharing";
import { SharingContext } from "../../context/sharing";

const PersonalSharing = () => {
  const { personalSharings, deletePersonalSharing } = useContext(
    PersonalSharingContext
  );
  const { addNewSharing } = useContext(SharingContext);
  console.log(personalSharings);

  return (
    <div className="personalSharing-container">
      {personalSharings.map((sharing, index) => (
        <div className="sharing-card" key={index}>
          <span
            className="delete-sharing"
            onClick={() => deletePersonalSharing(sharing._id)}
          >
            &times;
          </span>
          <button
            className="add-sharing"
            onClick={() => {
              addNewSharing({
                name: sharing.name,
                age: sharing.age,
                status: sharing.status,
                content: sharing.content,
              });
              deletePersonalSharing(sharing._id);
            }}
          >
            הוספה
          </button>
          <h3 className="sharing-card-title">שם: {sharing.name}</h3>
          <h3 className="sharing-card-title">גיל: {sharing.age}</h3>
          <h3 className="sharing-card-title">מצב משפחתי: {sharing.status}</h3>
          <h3 className="sharing-card-title">הסיפור שלי</h3>
          <div className="sharing-card-content">
            <p>{sharing.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PersonalSharing;
