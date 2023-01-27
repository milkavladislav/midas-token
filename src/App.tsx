import React from "react";
import FAQ from "./components/FAQ/FAQ";
import Main from "./components/Main/Main";
import Metrics from "./components/Metrics/Metrics";
import Stake from "./components/Stake/Stake";
import SupportToken from "./components/SupportToken/SupportToken";
import Utility from "./components/Utility/Utility";

function App() {
  return (
    <div className="App">
      <Main />
      <Metrics />
      <Stake />
      <Utility />
      <SupportToken />
      <FAQ />
    </div>
  );
}

export default App;
