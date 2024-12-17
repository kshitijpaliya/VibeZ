import React, { Fragment, useEffect, useState } from "react";
import OrganizeHeroMains from "./OrganizeHeroMains";
import OrganiseElement from "./OrganizeElements";
import OrganizeHow from "./OrganizeHow";
import OrganizeReviews from "./OrganizeReviews";
import OrganiserReview from "./OrganiserReview";
import OrganizeForm from "./OrganizeForm";
import Footer from "./Footer";
import OrganiseHero2 from "./OrganiseHero2";
function Organize({ user }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Fragment>
      {loading ? (
        <div className="fixed left-0 w-full h-full bg-black flex justify-center items-center">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <div className="bg-black">
          <OrganizeHeroMains />
          <OrganiseElement />
          <OrganizeHow />
          <OrganizeReviews user={user} />
          <OrganizeForm user={user} />
          <OrganiseHero2 />
          <OrganiserReview user={user} />
          <Footer />
        </div>
      )}
    </Fragment>
  );
}

export default Organize;
