import React, {useState}from "react";

function NewPlantForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  //prevent the page reloading
  function handleSubmit(e){
    e.preventDefault();

    const newPlant = {
      name:name,
      image: image,
      price: parseFloat(price)
    };

    //post request to server
    fetch("http://localhost:6001/plants", {
      method: "POST",
      header: {"Content-Type": "application/json"},
      body: JSON.stringify(newPlant)
    })
    .then((res) => res.json())
    .then((data) => {
      //update state-PlantPage
      onAddPlant(data);
      setName("");
      setImage("");
      setPrice("");
    });
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input 
        type="text" 
        name="name" 
        placeholder="Plant name"
        value={name}
        onChange={(e) => setName(e.target.value)}
         />

        <input
         type="text" 
         name="image" 
         placeholder="Image URL" 
         value={name}
         onChange={(e) => setName(e.target.value)}
         />

        <input 
        type="number" 
        name="price" 
        step="0.01"
        placeholder="Price" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
