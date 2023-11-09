import React from "react";

const SeeAll = ({ seeAll, setSeeAll }) => {
  async function handleClick(e) {
    setSeeAll(!seeAll);
  }
  return (
    <button
      className="bg-primary text-dark rounded-md text-5xl font-bold hover:bg-primaryDark hover:text-2xl"
      onClick={handleClick}
    >
      {seeAll ? "See All" : "See Upcoming"}
    </button>
  );
};

export default SeeAll;
