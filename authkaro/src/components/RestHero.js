import React, { Fragment } from "react";
import Carousel from "./CarouselGames";

function RestHero() {
  return (
    <Fragment>
      <div
        className="flex justify-center items-center p-4 gap-4 bg-gradient-to-b from-base-100 to-black px-20"
        id="recentEvents"
      >
        {/* Left Text Section */}
        <div className="w-[50%] flex flex-col justify-center items-start gap-5 ">
          <div className="flex flex-col justify-center item-start text-left">
            <h2 className="text-5xl font-bold pl-2">Recent</h2>
            <h2 className="mb-5 text-8xl font-bold">
              <span className="gradient-textf animate-gradient">Events</span>
            </h2>
            <p className="text-sm pl-2">
              Dive into the scroll and catch up on our latest events - the
              excitement you're missing awaits in our community.
            </p>
          </div>
          <p className="text-sm pl-2 text-gray-400">
            Cover: Krsna Live at Revels, MIT Manipal
          </p>
        </div>

        {/* Right Image Section */}
        <div className="w-[50%] flex justify-center items-center">
          <Carousel />
        </div>
      </div>
    </Fragment>
  );
}

export default RestHero;
