import React from "react";
import './footer.css';
export default function Footer() {
  return (
    <main className="footer--main">
      <section>
        <h1>USEFULL LINK</h1>
        <p>About</p>
        <p>Service</p>
        <p>Cantact</p>
        <p>Help</p>
      </section>
      <section>
        <h1>NEWS LETTER</h1>
        <input type="text"  placeholder="Search here"/>
        <button>SUBCRIB NOW</button>
      </section>
      <section>
        <h1>CONTACT</h1>
        <p>Sector 48,Gurgaon,hyrana</p>
        <span>&#9873;</span>
        <span>&#9851;</span>

      </section>
    </main>
  );
}
