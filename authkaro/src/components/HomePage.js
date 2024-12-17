import React from "react";
import Hero from "./Hero";
import RestHero from "./RestHero.js";
import Discount from "./Discount.js";
import EventsHome from "./EventsHome.js";
import HomeStat from "./HomeStat.js";
import Organisation from "./Organisation.js";
import Works from "./Works.js";
import Footer from "./Footer.js";

function HomePage({ user, logOut }) {
  return (
    <div className="w-full">
      <Hero />
      <RestHero />
      <Discount />
      <EventsHome />
      <HomeStat />
      <Organisation />
      <Works />
      <Footer logOut={logOut} />
    </div>
  );
}

export default HomePage;
