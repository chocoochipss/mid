import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
function Header() {
  const [header, setHeader] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const headerRef = ref(db, "header");

    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeader(data);
    });
  }, []);
  return (
    <header>
      <nav className="container">
        <span className="logo">{header.title1}</span>
        <i id="btn-menu" className="fa-solid fa-bars" />
        <div className="nav-links">
          <a href="#home" className="active">
            {header.title2}
          </a>
          <a href="#about">{header.title3}</a>
          <a href="#services">{header.title4}</a>
          <a href="#Portfolio">{header.title5}</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
