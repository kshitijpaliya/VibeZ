import React from "react";

function HomeStat() {
  return (
    <div className="bg-black flex justify-center">
      <div className="bg-black p-10 stats shadow">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Vibes Matches</div>
          <div className="stat-value text-primary">15L+</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Events Hosted</div>
          <div className="stat-value text-secondary">10K+</div>
          <div className="stat-desc">28% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary"></div>
          <div className="stat-title">Cities Covered</div>
          <div className="stat-value text-white">100+</div>
          <div className="stat-desc text-secondary">More On The Way!</div>
        </div>
      </div>
    </div>
  );
}

export default HomeStat;
