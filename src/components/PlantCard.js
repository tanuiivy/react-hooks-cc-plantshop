import React,{useState} from "react";

function PlantCard({id,name,image,price, onUpdatePrice, onDeletePlant}) {
  const [newPrice, setNewPrice]= useState(price);
  const [inStock, setInStock] = useState(true);//the plant by default will be in stock

  function handleStockToggle(){
    setInStock(!inStock);// a toggle between in stock and sold out
  }

  fetch(`http://localhost:6001/plants/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({inStock: !inStock}),//update on the stock status
  });

  //updating the price
  function handlePriceUpdate(){
    fetch (`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: parseFloat(newPrice) }),
    })
      .then((res) => res.json())
      .then((updatedPlant) => {
        onUpdatePrice(updatedPlant); // update state in PlantList
      });
  }

  //delete plant
  function handleDelete() {
    console.log(`Deleting plant with ID: ${id}`); // ✅ Log ID to see if function is called
  
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          console.log("Plant deleted successfully"); //log success
          onDeletePlant(id); //update state in PlantList
        } else {
          console.error("Failed to delete plant");
        }
      })
      .catch((error) => console.error("Error deleting plant:", error));
  }

  
  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${newPrice}</p>
      <input 
      type="number"
      step="0.01"
      value={newPrice}
      onChange={(e) => setNewPrice(e.target.value)}
      />

      <button onClick = {handlePriceUpdate}>Update Price </button>
      <button className= {inStock ? "primary" : ""}
      onClick={handleStockToggle}
       >
      {inStock ? "In Stock" : "Sold Out"}
      </button>
      <button onClick={handleDelete} style={{ backgroundColor: "red", color: "white" }} >
        Delete
      </button>
    </li>
  );
}

export default PlantCard;
