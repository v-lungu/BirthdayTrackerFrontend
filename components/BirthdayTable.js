import React from "react";

const BirthdayTable = ({ data, title }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="w-full">
      <h1 className="font-bold captialize text-4xl h-1/2 py-2">{title}</h1>
      <table className="table-fixed box-border bg-white border-dark w-full">
        <thead>
          <tr>
            <th className="text-left">First Name</th>
            <th className="text-left">Last Name</th>
            <th className="text-left">Birthday</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            const date = item.birthday.split("-");
            const month = months[date[1] - 1];
            const birthday = month + " " + date[2];
            return (
              <tr>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{birthday}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BirthdayTable;
