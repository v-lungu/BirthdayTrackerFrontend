import React from "react";
import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";

const AddBirthday = ({ setToday, setUpcoming, setAllBirthdays }) => {
  const year = new Date().getFullYear();

  const [startDate, setStartDate] = useState(null);
  const [minDate, setMinDate] = useState(null);
  const [maxDate, setMaxDate] = useState(null);
  const [monthSelected, setMonthSelected] = useState(false);
  const [validFirst, setValidFirst] = useState(false);
  const [validLast, setValidLast] = useState(false);
  const [validForm, setValidForm] = useState(false);

  async function setDayCalendar(event) {
    setMinDate(new Date(year, event.target.value - 1, 1));
    setMaxDate(new Date(year, event.target.value, 0));
    setStartDate(minDate);
    setMonthSelected(true);
  }

  useEffect(() => {
    setStartDate(minDate);
  }, [minDate]);

  async function checkValidFirst(event) {
    setValidFirst(event.target.value ? true : false);
  }

  async function checkValidLast(event) {
    setValidLast(event.target.value ? true : false);
  }

  useEffect(() => {
    setValidForm(validFirst && validLast && monthSelected);
  }, [validFirst, validLast, monthSelected]);

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
    setStartDate(null);
    setMonthSelected(false);
    setValidFirst(false);
    setValidLast(false);
    setValidForm(false);

    const resToday = await fetch("http://localhost:7777/api/birthdays/today");
    const today = await resToday.json();

    const resUpcoming = await fetch(
      "http://localhost:7777/api/birthdays/upcoming"
    );
    const upcoming = await resUpcoming.json();

    const resAll = await fetch(`http://localhost:7777/api/birthdays`);
    const all = await resAll.json();

    setToday(today);
    setUpcoming(upcoming);
    setAllBirthdays(all);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="flex flex-wrap flex-col mx-3 mb-6 mt-3">
          <div className="px-3">
            <label
              className="block uppercase tracking-wide font-bold mb-2 "
              htmlFor="first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-light border rounded py-3 px-4 mb-3 leading-tight focusLoutline-none"
              id="first-name"
              type="text"
              onChange={checkValidFirst}
            ></input>
          </div>
          <div className="px-3">
            <label
              className="block uppercase tracking-wide font-bold mb-2 "
              htmlFor="last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-light border rounded py-3 px-4 mb-3 leading-tight focusLoutline-none"
              id="last-name"
              type="text"
              onChange={checkValidLast}
            ></input>
          </div>
          <div className="px-3">
            <label
              className="block uppercase tracking-wide font-bold mb-2 "
              htmlFor="birthday-month"
            >
              Month
            </label>
            <select
              className="appearance-none block w-full bg-light border rounded py-3 px-4 mb-3 leading-tight focusLoutline-none"
              id="birthday-month"
              onChange={setDayCalendar}
              min={1}
              max={12}
            >
              <option value="00" disabled selected></option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>
          <div className="px-3">
            <label
              className="block uppercase tracking-wide font-bold mb-2 "
              htmlFor="birthday-day"
            >
              Day
            </label>
            <div className="w-full">
              <DatePicker
                disabled={!monthSelected}
                minDate={minDate}
                maxDate={maxDate}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                renderCustomHeader={() => <div></div>}
                dateFormat="dd"
                className="appearance-none block w-full bg-light border rounded py-3 px-4 mb-3 leading-tight focusLoutline-none"
                wrapperClassName="date_picker full-width"
              />
            </div>
          </div>

          <div className="px-3">
            <button
              type="submit"
              className="block uppercase tracking-wide font-bold bg-primary p-3 rounded-md disabled:bg-slate-500"
              disabled={!validForm}
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
