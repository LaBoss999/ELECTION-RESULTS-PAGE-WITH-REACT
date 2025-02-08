import React from "react";
import ElectionResults from "./ElectionResults";
import "./index.css";
import trump from "./assets/trump.png";
import "./Election.css";

function App() {
  const elections = [
    {
      candidate: "Donald Trump",
      party: "Republican",
      popularVotes: "74,216,154",
      electoralVotes: 232,
      statesWon: 25,
      year: 2020,
    },
    {
      candidate: "Joe Biden",
      party: "Democratic",
      popularVotes: "81,268,924",
      electoralVotes: 306,
      statesWon: 25,
      year: 2020,
    },
    {
      candidate: "Barack Obama",
      party: "Democratic",
      popularVotes: "46,040,456",
      electoralVotes: "134",
      statesWon: 45,
      year: 2015,
    }
  ];

  return (
    <div className="election-container">
      {/* Trump Image on the Side */}
      <img src={trump} alt="Donald Trump" className="trump-img" />

      {/* Election Table */}
      <div className="table-container">
        <h1>US Presidential Election Results</h1>
        <ElectionResults elections={elections} />
      </div>
    </div>
  );
}

export default App;
