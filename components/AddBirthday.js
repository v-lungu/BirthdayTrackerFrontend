import React from "react";
import { FormEvent } from "react";

const AddBirthday = () => {
  async function onSubmit(event) {
    event.preventDefault();

    const birthday =
      "2000" + "-" + event.target[2].value + "-" + event.target[3].value;

    const newBirthday = JSON.stringify({
      firstName: event.target[0].value,
      lastName: event.target[1].value,
      birthday: birthday,
    });

    const response = await fetch("http://localhost:7777/api/birthdays", {
      method: "POST",
      body: newBirthday,
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("birthday-month").value = "";
    document.getElementById("birthday-day").value = "";
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="flex flex-wrap flex-col mx-3 mb-6 mt-3">
          <div className="px-3">
            <label
              className="block uppercase tracking-wide font-bold mb-2 "
              for="first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-light border rounded py-3 px-4 mb-3 leading-tight focusLoutline-none"
              id="first-name"
              type="text"
              placeholder="Vlad"
            ></input>
          </div>
          <div className="px-3">
            <label
              className="block uppercase tracking-wide font-bold mb-2 "
              for="last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-light border rounded py-3 px-4 mb-3 leading-tight focusLoutline-none"
              id="last-name"
              type="text"
              placeholder="Lung"
            ></input>
          </div>
          <div className="px-3">
            <label
              className="block uppercase tracking-wide font-bold mb-2 "
              for="birthday-month"
            >
              Month
            </label>
            <input
              className="appearance-none block w-full bg-light border rounded py-3 px-4 mb-3 leading-tight focusLoutline-none"
              id="birthday-month"
              type="number"
              min={1}
              max={12}
            ></input>
          </div>
          <div className="px-3">
            <label
              className="block uppercase tracking-wide font-bold mb-2 "
              for="birthday-day"
            >
              Day
            </label>
            <input
              className="appearance-none block w-full bg-light border rounded py-3 px-4 mb-3 leading-tight focusLoutline-none"
              id="birthday-day"
              type="number"
              min={1}
              max={31}
            ></input>
          </div>
          <div className="px-3">
            <button
              type="submit"
              className="block uppercase tracking-wide font-bold bg-primary p-3 rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBirthday;
