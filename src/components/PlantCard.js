import React,{useState} from "react";

function PlantCard({name,image,price}) {
  const [inStock, setInStock] = useState(true);//the plant by default will be in stock

  function handleStockToggle(){
    setInStock(!inStock);// a toggle between in stock and sold out
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button
      className= {inStock ? "primary" : ""}
      onClick={handleStockToggle}
       >
      {inStock ? "In Stock" : "Sold Out"}
      </button>
    </li>
  );
}

export default PlantCard;
