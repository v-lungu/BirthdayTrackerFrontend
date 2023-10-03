import React from "react";

const getAll = async () => {
  try {
    const res = await fetch(`http://localhost:7777/api/birthdays`);
    const data = res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

const SeeAll = () => {
  return (
    <button className="bg-primary text-dark rounded-md text-5xl font-bold hover:bg-primaryDark hover:text-2xl">
      See All
    </button>
  );
};

export default SeeAll;
