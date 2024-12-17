import React, { Fragment } from "react";

const Hero = () => {
  return (
    <Fragment>
      <div className="hero h-screen w-full heroContainer">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-full">
            <h1 className="mb-5 text-9xl font-bold gradient-text animate-gradient">
              VibeZ
            </h1>
            <p className="mb-5 text-sm" style={{ color: "white" }}>
              Making finding nearby events and favorite performers a breeze,{" "}
              <br />
              just vibe in and explore with ease. Experience the pulse of your{" "}
              <br />
              locality with a few clicks on our website.
            </p>
            <button className="btn">
              <a
                href="#recentEvents"
                className="gradient-text animate-gradient"
              >
                Get Started
              </a>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
