import React, { useContext } from "react";
import { LectureContext } from "../../context/lecture";

const Lecture = () => {
  const { lectures } = useContext(LectureContext);

  const whatsappUrl =
    "https://api.whatsapp.com/send?phone=972543997375&text=היי%20יה-לי,%20אני%20מתעניין%20בהרצאת%20כותרת%20והייתי%20שמח%20לשמוע%20עוד%20פרטים.";
  const emailUrl =
    "mailto:yali.soltz11@gmail.com?subject=כותרת&body=היי%20יה-לי,%20אני%20מתעניין%20בהרצאת%20כותרת%20והייתי%20שמח%20לשמוע%20עוד%20פרטים.";
  let lecture = { title: "הרצאה 5" };

  return (
    <div className="lecture-container">
      {/* need to check if server connected */}
      {lectures.map((lecture, index) => (
        <div className="lecture-card" key={index}>
          <img className="lecture-card-img" src={lecture.imgUrl.url} alt="IMG" />
          <h3 className="lecture-card-title">{lecture.title}</h3>
          <div className="lecture-card-content">
            <div>
              {lecture.content.split(".").map((word, index) => (
                <p key={index}>
                  {word + "."}
                </p>
              ))}
            </div>
          </div>
          <div className="lecture-order">
            <h4>להזמנה</h4>
            <a
              className="icon"
              href={whatsappUrl.replace("כותרת", lecture.title)}
              target="_blank"
            >
              ווצאפ
            </a>

            <a className="icon" href={emailUrl.replace("כותרת", lecture.title)}>
              אימייל
            </a>

            <a className="icon" href="tel:+972543997375" dir="ltr">
              טלפון
            </a>
          </div>
        </div>
      ))}

      <div className="lecture-card">
        <img
          className="lecture-card-img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Paracas_National_Reserve%2C_Ica%2C_Peru-3April2011.jpg/1200px-Paracas_National_Reserve%2C_Ica%2C_Peru-3April2011.jpg"
          alt="IMG"
        />
        <h3 className="lecture-card-title">שם הרצאה</h3>
        <h3 className="lecture-card-title">תוכן</h3>
        <div className="lecture-card-content">
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
        <div className="lecture-order">
          <h4>להזמנה</h4>
          <a
            className="icon"
            href={whatsappUrl.replace("כותרת", lecture.title)}
            target="_blank"
          >
            ווצאפ
          </a>

          <a className="icon" href={emailUrl.replace("כותרת", lecture.title)}>
            אימייל
          </a>

          <a className="icon" href="tel:+972543997375" dir="ltr">
            טלפון
          </a>
        </div>
      </div>
      <div className="lecture-card">
        <img
          className="lecture-card-img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Paracas_National_Reserve%2C_Ica%2C_Peru-3April2011.jpg/1200px-Paracas_National_Reserve%2C_Ica%2C_Peru-3April2011.jpg"
          alt="IMG"
        />
        <h3 className="lecture-card-title">שם הרצאה</h3>
        <h3 className="lecture-card-title">תוכן</h3>
        <div className="lecture-card-content">
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
        <div className="lecture-order">
          <h4>להזמנה</h4>
          <a
            className="icon"
            href={whatsappUrl.replace("כותרת", lecture.title)}
            target="_blank"
          >
            ווצאפ
          </a>

          <a className="icon" href={emailUrl.replace("כותרת", lecture.title)}>
            אימייל
          </a>

          <a className="icon" href="tel:+972543997375" dir="ltr">
            טלפון
          </a>
        </div>
      </div>
      <div className="lecture-card">
        <img
          className="lecture-card-img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Paracas_National_Reserve%2C_Ica%2C_Peru-3April2011.jpg/1200px-Paracas_National_Reserve%2C_Ica%2C_Peru-3April2011.jpg"
          alt="IMG"
        />
        <h3 className="lecture-card-title">שם הרצאה</h3>
        <h3 className="lecture-card-title">תוכן</h3>
        <div className="lecture-card-content">
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
        <div className="lecture-order">
          <h4>להזמנה</h4>
          <a
            className="icon"
            href={whatsappUrl.replace("כותרת", lecture.title)}
            target="_blank"
          >
            ווצאפ
          </a>

          <a className="icon" href={emailUrl.replace("כותרת", lecture.title)}>
            אימייל
          </a>

          <a className="icon" href="tel:+972543997375" dir="ltr">
            טלפון
          </a>
        </div>
      </div>
    </div>
  );
};

export default Lecture;
