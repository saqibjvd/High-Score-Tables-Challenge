import React from "react";
import allCountryScores from "../Scores";

function PlayerScore() {
  const results = allCountryScores;

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


  return results.map((result, index) => (
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
    
  ));
}

export default PlayerScore;
