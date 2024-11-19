import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
function Hero() {
  const [hero, setHero] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const heroRef = ref(db, "hero");

    onValue(heroRef, (snapshot) => {
      const data = snapshot.val();
      setHero(data);
    });
  }, []);
  return (
    <div className="hero" id="home">
      <div className="contanier">
        <div className="content">
          <h4>{hero.title1}</h4>
          <h1>{hero.title2}</h1>
        </div>
        <div className="hero-img">
          <img src={`data:image/jpeg;base64, ${hero.img}`} alt />
        </div>
      </div>
    </div>
  );
}
export default Hero;
