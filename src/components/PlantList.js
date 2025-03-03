import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, searchTerm}) {
  const [plantList, setPlantList] = useState([]);
  useEffect(() => {
    setPlantList(plants);
  }, [plants]);

  //update plant price
  function handleUpdatePrice(updatedPlant) {
    setPlantList((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === updatedPlant.id ? updatedPlant : plant
      )
    );
  }

  //delete plant from list
  function handleDeletePlant(deletedId) {
    console.log(`Removing plant with ID: ${deletedId}`); //debugging log
    setPlantList((prevPlants) => prevPlants.filter((plant) => plant.id !== deletedId));
  }

  //filtering plants based on search term
  const filteredPlants = plantList.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase()) // ✅ Case-insensitive search
  );

  return (
    <ul className="cards">
      {filteredPlants.length > 0 ? (
        filteredPlants.map((plant) => (
          <PlantCard
            key={plant.id}
            id={plant.id}
            name={plant.name}
            image={plant.image}
            price={plant.price}
            onUpdatePrice={handleUpdatePrice}
            onDeletePlant={handleDeletePlant}
          />
        ))
      ) : (
        <p>No plants found</p> 
     )}
   </ul>
  );
}

export default PlantList;
