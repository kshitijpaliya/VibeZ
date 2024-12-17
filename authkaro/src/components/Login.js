import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
function Login({ logIn }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: name, password: password }),
      });
      const data = await response.json();
      console.log(data);
      if (data.success) {
        // localStorage.setItem("loggedInUser", name);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({
            username: data.username,
            userId: data.userId,
          })
        );
        logIn(data.username, data.userId);
        // logIn(name);
      } else {
        alert("Invalid Credentials");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  return (
    <Fragment>
      <div className="flex items-center justify-center h-screen bg-gradient-to-b from base-base-100 to-black">
        <div className="flex justify-evenly gap-10rem w-[90%]">
          <div className="text-start lg:text-left">
            <h1 className="text-8xl font-bold text-white gradient-text animate-gradient">
              Welcome!
            </h1>
            <p className="py-5 text-xl text-white">
              Let's have you <span className="text-pink-400">Grooving!</span>{" "}
              Login now and let the rhythm take over!
            </p>
            <div className="flex flex-col gap-4">
              <p className="text-l text-white">
                Don't have an account? Don't worry! Sign up and join the party!
              </p>
              <Link
                to="/signup"
                className="bg-base-300 my-3 p-3 text-white w-fit"
                style={{ border: "2px solid white" }}
              >
                Sign Up
              </Link>
            </div>
          </div>

          <form
            className="bg-opacity-0 bg-black p-5 flex flex-col gap-5 justify-center w-[25%]"
            style={{ border: "2px solid white" }}
          >
            <div className="form-control">
              <input
                type="Name"
                placeholder="Username"
                className="bg-base-300 p-3 input-bordered"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <input
                type="Password"
                placeholder="Password"
                className="bg-base-300 p-3 input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                className="text-base bg-base-300 py-4 text-white w-full max-w-[100px] mt-2"
                style={{ border: "2px solid white" }}
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
