import React from "react";
import PortfolioContainer from "./PortfolioContainer";

function Stock({ stock, setPortfolio, portfolio}) {
 
  const {id, ticker, name, type, price} = stock

  function handleClick(event) {



    if (portfolio.filter(stock => stock.name === name).length > 0) { // IF THE FILTERED ARRAY IS NOT EMPTY, WILL NOT ADD. 
      console.log('already in here')
      if (event.clientX > 500) {
        const soldPortfolio = portfolio.filter(stock => stock.name !== name)
        setPortfolio(soldPortfolio)
      }
    } else {
      const newStock = {
        id: id,
        ticker: ticker,
        name: name,
        type: type, 
        price: price,
        portfolio: true,
      }
      setPortfolio([...portfolio, newStock])

    }
  }

  return (
    <div onClick={handleClick}>
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
