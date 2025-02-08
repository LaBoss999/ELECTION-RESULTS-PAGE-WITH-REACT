import React from "react";
import "./index.css";
import "./Election.css";

function ElectionResults({ elections }) {
  return (
    <table className="election-table">
      <thead>
        <tr>
          <th>Year</th>
          <th>Candidate</th>
          <th>Party</th>
          <th>Popular Votes</th>
          <th>Electoral Votes</th>
          <th>States Won</th>
        </tr>
      </thead>
      <tbody>
        {elections.map((election, index) => (
          <tr key={index}>
            <td>{election.year}</td>
            <td>{election.candidate}</td>
            <td>{election.party}</td>
            <td>{election.popularVotes}</td>
            <td>{election.electoralVotes}</td>
            <td>{election.statesWon}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ElectionResults;
