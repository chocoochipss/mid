import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
function Portfolio() {
  const [portfolio, setPortfolio] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const portfolioRef = ref(db, "portfolio");

    onValue(portfolioRef, (snapshot) => {
      const data = snapshot.val();
      setPortfolio(data);
    });
  }, []);
  return (
    <section id="Portfolio" className="portfolio">
      <div className="contanier">
        <div className="sec-top">
          <h1>
            {portfolio.title1} <span>{portfolio.title2}</span>
          </h1>
        </div>
        <div className="boxs">
          <div className="box">
            <div className="box-hover">
              <span> {portfolio.subtitle1}</span>
            </div>
            <img src={`data:image/jpeg;base64, ${portfolio.img1}`} alt />
          </div>
          <div className="box">
            <div className="box-hover">
              <span>{portfolio.subtitle2}</span>
            </div>
            <img src={`data:image/jpeg;base64, ${portfolio.img2}`} alt />
          </div>
          <div className="box">
            <div className="box-hover">
              <span>{portfolio.subtitle2}</span>
            </div>
            <img src={`data:image/jpeg;base64, ${portfolio.img3}`} alt />
          </div>
          <div className="box">
            <div className="box-hover">
              <span>{portfolio.subtitle5}</span>
            </div>
            <img src={`data:image/jpeg;base64, ${portfolio.img4}`} alt />
          </div>
          <div className="box">
            <div className="box-hover">
              <span>{portfolio.subtitle4}</span>
            </div>
            <img src={`data:image/jpeg;base64, ${portfolio.img5}`} alt />
          </div>
          <div className="box">
            <div className="box-hover">
              <span>{portfolio.subtitle6}</span>
            </div>
            <img src={`data:image/jpeg;base64, ${portfolio.img6}`} alt />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
