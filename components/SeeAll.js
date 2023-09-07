import React from "react";

const SeeAll = async () => {
  try {
    const res = await fetch(`http://localhost:7777/api/birthdays`);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

return (
  <button
    onClick={getAll}
    className="bg-primary text-dark rounded-md text-5xl font-bold m-4 hover:bg-primaryDark hover:text-2xl"
  >
    See All
  </button>
);

export default SeeAll;
