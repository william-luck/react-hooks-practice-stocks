import React from "react";

function SearchBar({ stocks, setStocks, handleFilter, handleTypeSort}) {





  function handleAlphabet() {
    console.log("I've been filtered alphabettical")

    const alphSort = stocks.sort((a, b) => {
      if (a.ticker < b.ticker) {
        return -1;
      } else {
        return 1;
      }
    })
    setStocks(alphSort)
    console.log(alphSort)
    handleFilter();
  }

  function handlePrice() {
    console.log("I've been filtered price")

    const priceSort = stocks.sort((a, b) => {
      if (a.price > b.price) {
        return 1
      } else {
        return -1;
      }
    })
      setStocks(priceSort)
      console.log(priceSort)
      handleFilter();
  }

  function handleType(event) {
    console.log("I've been changed")
    handleTypeSort(event.target.value)

    const typeSort = stocks.filter(stock => stock.type === event.target.value)
    console.log('sorted', typeSort)
    setStocks(typeSort)
    
  }



  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={handleAlphabet}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={handlePrice}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleType}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
