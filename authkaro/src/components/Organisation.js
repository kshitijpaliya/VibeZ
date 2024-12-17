import React from "react";

function Organisation() {
  return (
    <div className="w-full bg-black flex justify-center items-center py-20">
      <div className="hero h-[50vh] w-[77vw] organiseHero rounded-box bg-black">
        <div className="hero-overlay bg-opacity-60 rounded-box"></div>
        <div className="flex flex-col hero-content text-center text-neutral-content">
          <h1 className="mb-5 text-6xl font-bold text-white">
            Shout Out Your Event To The World
          </h1>
          <p className="mb-5" style={{ color: "white" }}>
            Elevate your Event hosting Experience With Seamless Setup and
            Powerful Promotional Tools on Our Platform!
          </p>
          <button className="btn" style={{ border: "1px solid white" }}>
            <a href="#organise">Host Now</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Organisation;
