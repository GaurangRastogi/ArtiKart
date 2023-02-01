import React, { useEffect, useState } from "react";
import "./About.css";
function About() {
  return (
    <div className="aboutPage">
      <h1>Artikart - A place for Artisans</h1>

      <p>
        It is an online marketplace for artisans and organisations to sell
        authentic handmade products globally under their own brand name,
        ensuring customers a quality purchase at a fair price.
        <br />
        <br />
        We welcome you to our website named Artikart, if you want to buy from
        our website, get yourself registered as Buyer, otherwise to sell you can
        register in Seller section.
      </p>

      <span id="aboutFoot">Made with passion and blessings - Gaurang Rastogi</span>
    </div>
  );
}

export default About;
