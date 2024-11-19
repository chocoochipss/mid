import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
function About() {
  const [about, setAbout] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const aboutRef = ref(db, "about");

    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data);
    });
  }, []);
  return (
    <section id="about" className="about">
      <div className="contanier">
        <div className="about-img">
          <img src={`data:image/jpeg;base64, ${about.img}`} alt=" " />
        </div>
        <div className="content">
          <h1>
            {about.title1}
            <span>{about.title2}</span>
          </h1>
          <p> {about.subtitle1}</p>
        </div>
      </div>
    </section>
  );
}
export default About;
