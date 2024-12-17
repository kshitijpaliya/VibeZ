import React, { Fragment, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
function Navbar({ user }) {
  console.log(user);
  const location = useLocation();
  const handlesignOut = () => {
    localStorage.removeItem("loggedInUser");
    window.location = "/";
  };

  const [paymentCount, setPaymentCount] = useState(0);

  useEffect(() => {
    const fetchPaymentCount = async () => {
      try {
        const response = await fetch(
          `https://cold-cassandra-backendsforpracticealltheverybestrukja-1e03db87.koyeb.app/history/${user}`
        );
        const data = await response.json();
        console.log(data);
        setPaymentCount(data.count);
        console.log("Payment count:", paymentCount);
        console.log("Payment count:", data.count);
      } catch (error) {
        console.error("Error fetching payment count:", error);
      }
    };

    fetchPaymentCount();
  }, []);

  return (
    <Fragment>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link
            to="/"
            className={`btn btn-ghost text-[1rem] ${
              location.pathname === "/" ? "text-pink-400" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/events"
            className={`btn btn-ghost text-[1rem] ${
              location.pathname === "/events" ? "text-pink-400" : ""
            }`}
          >
            Events
          </Link>
          <Link
            to="/organize"
            className={`btn btn-ghost text-[1rem] ${
              location.pathname === "/organize" ? "text-pink-400" : ""
            }`}
          >
            Organize
          </Link>
        </div>
        <Link
          to="/cart"
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle"
        >
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item">
              {paymentCount}
            </span>
          </div>
        </Link>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/account" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/ohistory" className="justify-between">
                  History
                </Link>
              </li>
              <li>
                <button onClick={handlesignOut}>Sign Out</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Navbar;
