import React from "react";
import "./SupportToken.css";

const SupportToken = () => {
  return (
    <section className="support">
      <h2>How we support Midas token</h2>
      <div className="support__blocks">
        <div className="support__block">
          <h3>$4,824,884</h3>
          <p>Liquidity on DEX</p>
        </div>
        <div className="support__block">
          <h3>63,844</h3>
          <p>Bought back MIDAS tokens</p>
        </div>
      </div>
    </section>
  );
};

export default SupportToken;