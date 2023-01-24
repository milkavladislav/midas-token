import React from "react";
import FAQ from "./components/FAQ/FAQ";
import Main from "./components/Main/Main";
import Metrics from "./components/Metrics/Metrics";
import Stake from "./components/Stake/Stake";

function App() {
  return (
    <div className="App">
      <Main />
      <Metrics />
      <Stake />

      <FAQ />
    </div>
  );
}

export default App;
