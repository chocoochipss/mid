import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
function Service() {
  const [myskills, setService] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const myskillsRef = ref(db, "myskills");

    onValue(myskillsRef, (snapshot) => {
      const data = snapshot.val();
      setService(data);
    });
  }, []);
  return (
    <section id="services" className="services">
      <div className="contanier">
        <div className="sec-top">
          <h1>
            {myskills.title1}
            <span>{myskills.title2}</span>
          </h1>
        </div>
        <div className="boxs">
          <div className="box">
            <i className="fa-solid fa-pen-ruler" />
            <h3>{myskills.subtitle1}</h3>
            <p>{myskills.subtitlek1}</p>
          </div>
          <div className="box">
            <i className="fa-solid fa-rocket" />
            <h3>{myskills.subtitle2}</h3>
            <p>{myskills.subtitlek2}</p>
          </div>
          <div className="box">
            <i className="fa-solid fa-code" />
            <h3>{myskills.subtitle3}</h3>
            <p>{myskills.subtitlek3}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Service;
