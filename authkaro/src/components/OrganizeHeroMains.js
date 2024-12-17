import React, { Fragment } from "react";

function OrganizeHeroMains() {
  return (
    <Fragment>
      <div className="hero h-[90vh] organiserContainer">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content flex flex-col">
          <h1 className="mb-3 text-8xl text-center font-bold text-white">
            Turn Up The Heat
          </h1>
          <div className="max-w-md flex flex-col items-center justify-center">
            <p className="mb-5 text-l text-white">
              Streamline event organization with ease. Discover nearby venues,
              favorite performers, and the pulse of your community, all in one
              place. Experience seamless planning on our platform.
            </p>
            <button className="btn" style={{ border: "2px solid white" }}>
              <a href="#RestHero">Get Started</a>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default OrganizeHeroMains;
