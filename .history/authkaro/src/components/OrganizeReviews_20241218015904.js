import React, { Fragment, useState, useEffect } from "react";

function OrganizeReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          "http://cold-cassandra-backendsforpracticealltheverybestrukja-1e03db87.koyeb.app/reviews"
        );
        if (!response.ok) {
          throw new Error("Server Error");
        }
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error Fetching Reviews", error);
      }
    };
    fetchReviews();
  }, []);

  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-7xl font-bold mt-[4rem] text-white">
          Organizer Spotlight
        </h1>
        <p className="mt-5">
          Scroll And See What Organisers Using Our Service Have To Say
        </p>
        <div className="w-full lg:w-[60%] h-fit carousel mt-1 mx-autio ">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="carousel-item w-fit flex justify-center items-center py-8 px-3 transition-transform duration-500 ease-in-out transform hover:scale-105"
            >
              <div className="bg-gradient-to-b from-purple-800 to-black gradient-text3 animate-gradient w-[15rem] rounded-lg shadow-lg ">
                <div className="text-center p-6 space-y-4">
                  <h2 className="text-2xl font-semibold text-white">
                    {review.userid}
                  </h2>
                  <p className="text-lg text-white opacity-80">
                    {review.review}
                  </p>
                  <div className="flex justify-center text-yellow-400">
                    {"⭐".repeat(review.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default OrganizeReviews;
