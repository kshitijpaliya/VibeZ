import React, { Fragment } from "react";
import pic from "../components/static/marshmello1.png";

function Discount() {
  return (
    <Fragment>
      <div className="flex items-center justify-center bg-black pt-20 pb-15">
        <div className="flex items-center justify-between rounded-box bg-gradient-to-b from-pink-200 to-pink-400 shadow-xl w-[80%] h-fit mt-7 gap-4 py-5 px-10">
          <div className="flex flex-col justify-center items-left gap-2">
            <h2 className="card-title text-black text-3xl font-bold">
              Events Draining Your Wallet
            </h2>
            <p className="text-black text-base text-left">
              Fear not! We've got your back with unbeatable prices and exclusive
              discounts, ensuring you enjoy every moment to the fullest
            </p>
            <div className="card-actions">
              <button className="btn w-fit mt-5">
                <span>Check Out</span>
              </button>
            </div>
          </div>
          <img src={pic} alt="Movie" className="h-40"></img>
        </div>
      </div>
    </Fragment>
  );
}

export default Discount;
