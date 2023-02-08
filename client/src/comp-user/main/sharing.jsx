import React, { useState } from "react";

const Sharing = () => {
  const [newPersonalSharing, setNewPersonalSharing] = useState({}); // new PersonalSharing object
  const [sended, setSended] = useState(false); // change the modal if the sharing is sended
  const [open, setOpen] = useState(false); // show the modal or not

  // function that add new PersonalSharing and reset the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newPersonalSharing);

    document.getElementsByClassName("sharing-form")[0].reset(); // reset the form
    setSended(true);
  };

  // When the user clicks anywhere outside of the sharing form it close it
  window.onclick = function (e) {
    if (e.target === document.getElementsByClassName("modal")[0])
      setOpen(false);
  };

  return (
    <div className="sharing-container">
      <div className="card">
        <h3 className="card-title">שם</h3>
        <h3 className="card-title">מצב משפחתי</h3>
        <h3 className="card-title">הסיפור שלי</h3>
        <div className="card-content">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            dolores ipsam soluta odit maxime harum eveniet dolor fugit, velit
            atque ab enim reprehenderit esse voluptates exercitationem dolore
            est explicabo minus in vero nostrum sint. Ipsa officiis pariatur ex
            error autem maiores nisi nesciunt id. Velit, aliquid delectus.
            Deserunt accusantium, consequatur ipsa iste libero nobis molestiae
            suscipit beatae, saepe odit ipsam.
          </p>
        </div>
      </div>
      <div className="card">
        <h3 className="card-title">שם</h3>
        <h3 className="card-title">מצב משפחתי</h3>
        <h3 className="card-title">הסיפור שלי</h3>
        <div className="card-content">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            dolores ipsam soluta odit maxime harum eveniet dolor fugit, velit
            atque ab enim reprehenderit esse voluptates exercitationem dolore
            est explicabo minus in vero nostrum sint. Ipsa officiis pariatur ex
            error autem maiores nisi nesciunt id. Velit, aliquid delectus.
            Deserunt accusantium, consequatur ipsa iste libero nobis molestiae
            suscipit beatae, saepe odit ipsam. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Deleniti dolores ipsam soluta odit
            maxime harum eveniet dolor fugit, velit atque ab enim reprehenderit
            esse voluptates exercitationem dolore est explicabo minus in vero
            nostrum sint. Ipsa officiis pariatur ex error autem maiores nisi
            nesciunt id. Velit, aliquid delectus. Deserunt accusantium,
            consequatur ipsa iste libero nobis molestiae suscipit beatae, saepe
            odit ipsam. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Deleniti dolores ipsam soluta odit maxime harum eveniet dolor
            fugit, velit atque ab enim reprehenderit esse voluptates
            exercitationem dolore est explicabo minus in vero nostrum sint. Ipsa
            officiis pariatur ex error autem maiores nisi nesciunt id. Velit,
            aliquid delectus. Deserunt accusantium, consequatur ipsa iste libero
            nobis molestiae suscipit beatae, saepe odit ipsam.
          </p>
        </div>
      </div>
      <div className="card">
        <h3 className="card-title">שם</h3>
        <h3 className="card-title">מצב משפחתי</h3>
        <h3 className="card-title">הסיפור שלי</h3>
        <div className="card-content">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            dolores ipsam soluta odit maxime harum eveniet dolor fugit, velit
            atque ab enim reprehenderit esse voluptates exercitationem dolore
            est explicabo minus in vero nostrum sint. Ipsa officiis pariatur ex
            error autem maiores nisi nesciunt id. Velit, aliquid delectus.
            Deserunt accusantium, consequatur ipsa iste libero nobis molestiae
            suscipit beatae, saepe odit ipsam.
          </p>
        </div>
      </div>

      <button className="modal-open" onClick={() => setOpen(true)}>
        הוספת שיתוף
      </button>
      {open ? (
        <div className="modal">
          <div className="modal-content">
            <span className="modal-close" onClick={() => setOpen(false)}>
              &times;
            </span>

            {sended ? (
              <div className="sharing-sended">
                <h1>השיתוף שלך הוא השראה לאנשים אחרים, תודה.</h1>
              </div>
            ) : (
              <form
                className="sharing-form"
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <input
                  name="name"
                  type="text"
                  onChange={(e) =>
                    setNewPersonalSharing({
                      ...newPersonalSharing,
                      name: e.target.value,
                    })
                  }
                  placeholder="שם: (מוזמן/ת להישאר אנונימי/ת)"
                />

                <input
                  name="age"
                  type="number"
                  placeholder="גיל:"
                  min={1}
                  maxLength={2}
                  required
                  onChange={(e) =>
                    setNewPersonalSharing({
                      ...newPersonalSharing,
                      age: e.target.value,
                    })
                  }
                />
                <select
                  id="status-select"
                  name="status"
                  required
                  defaultValue=""
                  onChange={(e) =>
                    setNewPersonalSharing({
                      ...newPersonalSharing,
                      status: e.target.value,
                    })
                  }
                >
                  <option value="" disabled>
                    סטטוס:
                  </option>
                  <option value="נשוי/נשואה">נשוי/נשואה</option>
                  <option value="רווק/ה">רווק/ה</option>
                  <option value="גרוש/ה">גרוש/ה</option>
                  <option value="אלמן/ה">אלמן/ה</option>
                  <option value="ערירי/ת">ערירי/ת</option>
                </select>

                <textarea
                  placeholder="הסיפור שלך.."
                  required
                  onChange={(e) =>
                    setNewPersonalSharing({
                      ...newPersonalSharing,
                      content: e.target.value,
                    })
                  }
                ></textarea>
                <div>
                  <button type="submit" className="send">
                    שלח/י
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Sharing;
