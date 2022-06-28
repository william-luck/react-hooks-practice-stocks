import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, setPortfolio }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio ? 
      portfolio.map(stock => {
        return <Stock key={stock.id} stock={stock} portfolio={portfolio} setPortfolio={setPortfolio}/>
      }) : null
      }
    </div>
  );
}

export default PortfolioContainer;
