import React, { Fragment, useState } from "react";

function SignUp({ logIn }) {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhn] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = first + " " + last;
    try {
      const response = await fetch(
        "http://cold-cassandra-backendsforpracticealltheverybestrukja-1e03db87.koyeb.app/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password, email, phoneno, name }),
        }
      );
      const data = await response.json();
      console.log(data);
      if (data.success) {
        localStorage.setItem("loggedInUser", first);
        logIn(first);
        window.location = "/";
      } else {
        alert("Username Already in Use");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Fragment>
      <div className="flex flex-col gap-[3rem] h-screen w-full bg-gradient-to-b from-base-200 to-black items-center justify-center">
        <h1 className="text-7xl font-bold gradient-text animate-gradient">
          Welcome!
        </h1>
        <form
          className="flex flex-col w-[40%] py-7 px-5 gap-[1rem]"
          style={{ border: "2px solid white" }}
        >
          <div className="form-control w-full">
            <input
              type="text"
              placeholder="First Name"
              className="p-3 bg-base-300 text-base w-full"
              value={first}
              onChange={(e) => setFirst(e.target.value)}
              required
            />
          </div>
          <div className="form-control w-full">
            <input
              type="text"
              placeholder="Last Name"
              className="p-3 bg-base-300 text-base w-full"
              value={last}
              onChange={(e) => setLast(e.target.value)}
              required
            />
          </div>
          <div className="form-control w-full">
            <input
              type="text"
              placeholder="Email"
              className="p-3 bg-base-300 text-base w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control w-full">
            <input
              type="text"
              placeholder="Phone Number"
              className="p-3 bg-base-300 text-base w-full"
              value={phoneno}
              onChange={(e) => setPhn(e.target.value)}
              required
            />
          </div>
          <div className="form-control w-full">
            <input
              type="text"
              placeholder="Username"
              className="p-3 bg-base-300 text-base w-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-control w-full">
            <input
              type="text"
              placeholder="Password"
              className="p-3 bg-base-300 text-base w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              className="text-base bg-base-300 py-4 text-white w-full max-w-[100px] mt-2"
              style={{ border: "2px solide white" }}
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default SignUp;
