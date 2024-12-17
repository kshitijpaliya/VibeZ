import React, { useState, useEffect, Fragment } from "react";

function Account({ userID }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      console.log("Fetching user for userID:", userID); // Debugging
      const response = await fetch(
        `https://cold-cassandra-backendsforpracticealltheverybestrukja-1e03db87.koyeb.app/user?username=${userID}`, // Updated
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }
      const data = await response.json();
      setUser(data[0]);
    } catch (error) {
      console.log("Error Fetching User", error);
    }
  };

  if (!userID) {
    return <div className="text-center text-red-500">User not found!</div>;
  }

  //   return (
  //     <Fragment>
  //       <div className="w-[100%] h-[90.8vh] bg-gradient-to-b from-base-100 to-black flex items-center justify-center">
  //         {user && (
  //           <div className="w-[75%] flex justify-end items-center mt-7">
  //             <div className="rounded-box shadow-xl w-[90%] bg-black h-[60%] flex flex-col items-center p-8">
  //               <p className="text-7xl font-bold">
  //                 Welcome{" "}
  //                 <span className="gradient-text animate-gradient">
  //                   {user.name}
  //                 </span>
  //               </p>
  //               <p className="text-3xl mt-5">Account Details</p>
  //               <div className="flex flex-col items-start mt-8 gap-6 w-full">
  //                 <div className="flex items-center gap-4">
  //                   <span className="text-2xl">Email:</span>
  //                   <div className="w-[20rem] bg-gradient-to-b from-base-300 to-black rounded flex items-center justify-center p-3">
  //                     <span className="text-xl">{user.email}</span>
  //                   </div>
  //                 </div>
  //                 <div className="flex items-center gap-4">
  //                   <span className="text-2xl">Username:</span>
  //                   <div className="w-[20rem] bg-gradient-to-b from-base-300 to-black rounded flex items-center justify-center p-3">
  //                     <span className="text-xl">{user.username}</span>
  //                   </div>
  //                 </div>
  //                 <div className="flex items-center gap-4">
  //                   <span className="text-2xl">Phone:</span>
  //                   <div className="w-[20rem] bg-gradient-to-b from-base-300 to-black rounded flex items-center justify-center p-3">
  //                     <span className="text-xl">+91 {user.phoneno}</span>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         )}
  //       </div>
  //     </Fragment>
  //   );
  return (
    <Fragment>
      <div className="w-[100%] h-[90.8vh] bg-gradient-to-b from-gray-900 via-black to-gray-900 flex items-center justify-center">
        {user && (
          <div className="w-[85%] lg:w-[70%] xl:w-[60%] flex justify-center items-center mt-7">
            <div
              className="rounded-lg w-full text-white h-auto flex flex-col items-center p-10 space-y-10"
              style={{ border: "2px solid white" }}
            >
              {/* Welcome Heading */}
              <p className="text-5xl md:text-7xl font-extrabold text-center leading-tight">
                Welcome{" "}
                <span className="gradient-text animate-gradient">
                  {user.name}
                </span>
              </p>
              <p className="text-xl md:text-3xl font-semibold text-gray-300">
                Your Account Details
              </p>

              {/* Account Details Section */}
              <div className="flex flex-col items-center w-full space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4 w-fit justify-center">
                  <div className="text-lg md:text-2xl font-medium w-[110px] text-right">
                    Email:
                  </div>
                  <div className="w-[20rem] bg-gradient-to-r from-gray-800 to-gray-700 rounded-md flex items-center justify-center py-3 px-4">
                    <span className="text-sm md:text-lg text-gray-300">
                      {user.email}
                    </span>
                  </div>
                </div>

                {/* Username */}
                <div className="flex items-center gap-4 w-fit justify-center">
                  <div className="text-lg md:text-2xl font-medium w-[110px] text-right">
                    Username:
                  </div>
                  <div className="w-[20rem] bg-gradient-to-r from-gray-800 to-gray-700 rounded-md flex items-center justify-center py-3 px-4">
                    <span className="text-sm md:text-lg text-gray-300">
                      {user.username}
                    </span>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-center gap-4 w-fit justify-center">
                  <div className="text-lg md:text-2xl font-medium w-[110px] text-right">
                    Phone:
                  </div>
                  <div className="w-[20rem] bg-gradient-to-r from-gray-800 to-gray-700 rounded-md flex  justify-center py-3 px-4">
                    <span className="text-sm md:text-lg text-gray-300">
                      +91 {user.phoneno}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default Account;

// import React, { Fragment, useEffect, useState } from "react";

// function Account({ userID }) {
//   const [username, setUsername] = useState(null);

//   const fetchUser = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:5000/user?username=${username}`,
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       if (!response.ok) {
//         throw new Error("Failed to fetch user");
//       }
//       const data = await response.json();
//       setUsername(data[0]);
//     } catch (error) {
//       console.log("Error Fetching User", error);
//     }
//   };

//   useEffect(() => {
//     fetchUser();
//   }, [userID]);

//   return (
//     <Fragment>
//       <div className="w-[100%] h-[90.8vh] bg-gradient-to-b from-base-100 to-black flex items-center justify-center">
//         {username && (
//           <div className="w-[75%] flex justify-end items-center mt-7">
//             <div className="rounded-box shadow-xl w-[90%] bg-black h-[60%] flex flex-col items-center p-8">
//               <p className="text-7xl font-bold">
//                 Welcome{" "}
//                 <span className="gradient-text animate-gradient">
//                   {username.name}
//                 </span>
//               </p>
//               <p className="text-3xl mt-5">Account Details</p>
//               <div className="flex flex-col items-start mt-8 gap-6 w-full">
//                 <div className="flex items-center gap-4">
//                   <span className="text-2xl">Email:</span>
//                   <div className="w-[20rem] bg-gradient-to-b from-base-300 to-black rounded flex items-center justify-center p-3">
//                     <span className="text-xl">{username.email}</span>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <span className="text-2xl">Username:</span>
//                   <div className="w-[20rem] bg-gradient-to-b from-base-300 to-black rounded flex items-center justify-center p-3">
//                     <span className="text-xl">{username.username}</span>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <span className="text-2xl">Phone:</span>
//                   <div className="w-[20rem] bg-gradient-to-b from-base-300 to-black rounded flex items-center justify-center p-3">
//                     <span className="text-xl">+91 {username.phoneno}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </Fragment>
//   );
// }

// export default Account;
