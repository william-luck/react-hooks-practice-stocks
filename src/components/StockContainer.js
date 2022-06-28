import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, setPortfolio, portfolio }) {


 

  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map(stock => {
        return <Stock key={stock.id} stock={stock} setPortfolio={setPortfolio} portfolio={portfolio} />
      })}
    </div>
  );
}

export default StockContainer;
