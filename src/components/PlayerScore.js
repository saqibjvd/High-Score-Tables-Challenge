import React, { useState } from "react";
import allCountryScores from "../Scores";

function PlayerScore() {
  const results = allCountryScores;

  // sorting countries name in alphabetic order
  const sortCountryNames = () => {
    results.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  };
  sortCountryNames();

  // sorting score in decending order

  const [scores, setScores] = useState(allCountryScores);
  const [sortOrder, setSortOrder] = useState("asc");

  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === "asc" ? "dsc" : "asc";
    setSortOrder(newSortOrder);
    sortScores(newSortOrder);
  };

  const sortScores = (order) => {
    const sortedScores = [...scores]; // copied orginal array to sorted scores array so original aray is not modidifed when we run for each-loop.

    sortedScores.forEach((country) => {
      country.scores.sort((a, b) => {
        return order === "asc" ? a.s - b.s : b.s - a.s;
      });
    });

    setScores(sortedScores);
  };

  return (
    <div>
      <button className="btn1" onClick={toggleSortOrder}>
        {sortOrder === "asc" ? "Sort ASC" : "Sort DSC"}
      </button>
      {results.map((result, index) => (
        <div key={index}>
          <table className="table">
            <thead>
              <tr>
                <th>Highest Score: {result.name.toUpperCase()}</th>
                <th>-</th>
              </tr>
            </thead>
            {result.scores.map((e, key) => (
              <tbody key={key}>
                <td>{e.n.toUpperCase()}</td>
                <td> {parseFloat(e.s)}</td>
              </tbody>
            ))}
          </table>
        </div>
      ))}
    </div>
  );
}

export default PlayerScore;
