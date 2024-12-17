import React, { useState } from "react";
function OrganiserReview({ user }) {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that rating is a number
    if (isNaN(rating) || rating < 1 || rating > 5) {
      alert("Please enter a valid rating between 1 and 5.");
      return;
    }

    // Prepare payload
    const payload = {
      userid: user, // Automatically use logged-in user's ID
      review,
      rating: parseInt(rating), // Ensure rating is sent as a number
    };

    // Log payload to check values
    console.log("Payload being sent:", payload);

    try {
      const response = await fetch(
        "http://cold-cassandra-backendsforpracticealltheverybestrukja-1e03db87.koyeb.app/reviewsAdd",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Review added successfully");
        window.location = "/organize";
      } else {
        console.error("Error adding review:", data.error);
        alert(data.error || "An error occurred while adding the review.");
      }
    } catch (error) {
      console.error("Error:", error.message);
      alert("An error occurred while adding the review.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-9">
      <h1 className="text-7xl font-bold mt-9 pt-9 text-white">
        Did Our Service{" "}
        <span className="gradient-texts animate-gradient">Sizzle</span> or{" "}
        <span className="gradient-textf animate-gradient">Fizzle</span>?
      </h1>
      <p className="mt-4 text-xl">Leave Your Review!</p>
      <form
        className="card-body bg-black mt-5 w-[50vw] mb-[8rem]"
        onSubmit={handleSubmit}
        style={{ border: "2px solid white" }}
      >
        {/* Review Input */}
        <div className="form-control">
          <input
            type="text"
            placeholder="Review"
            className="p-[1rem] input-bordered bg-base-300"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
        </div>

        {/* Rating Input */}
        <div className="flex items-center gap-5 justify-left">
          <div className="form-control">
            <input
              type="number"
              placeholder="Rating/5"
              className="p-[1rem] input-bordered bg-base-300"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-[2rem] items-center justify-center">
            <button
              className="p-3"
              style={{ border: "2px solid white" }}
              type="submit"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default OrganiserReview;
