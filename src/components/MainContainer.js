import {React, useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [filtered, setFiltered] = useState(false)
  const [type, setType] = useState('all')
  const [sourceStocks, setSourceStocks] = useState([])
  

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
      .then(response => response.json())
      .then(src => {
        if (!filtered) {
          setStocks(src)
          setSourceStocks(src)
        }
      })
        }, [])

  function handleFilter() {
      setFiltered(!filtered)
    } 

  function handleTypeSort(stockType) {
    
    setType(stockType)
    setStocks(sourceStocks)

  }
    
  // function handleRender() {
  //   setRender(!render)
  // }
    


  
  return (
    <div>
      <SearchBar stocks={stocks} setStocks={setStocks} handleFilter={handleFilter} handleTypeSort={handleTypeSort}  />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} setPortfolio={setPortfolio} portfolio={portfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} setPortfolio={setPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
