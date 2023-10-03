import React from "react";

const BirthdayTable = ({ data }) => {
  return (
    <div className="w-full">
      <h1 className="font-bold captialize text-4xl h-1/2 py-2">
        Birthday Tracker
      </h1>
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
            return (
              <tr>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.birthday}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BirthdayTable;
