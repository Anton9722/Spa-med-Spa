import React from "react"

function Products() {

  return (
    <div id="productsContainer">
      <div className="product">
        <img src="src\images\pool.jpg" className="productImg"/>
        <h2>Lyx paketet</h2>
      </div>
      <div className="product">
        <img src="src\images\sauna.jpg" className="productImg"/>
        <h2>Standard paketet</h2>
      </div>
    </div>
  )
}

export default Products