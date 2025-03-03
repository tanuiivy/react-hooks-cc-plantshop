import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, searchTerm}) {
  //filtering plants based on search term
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase()) // ✅ Case-insensitive search
  );
 
  return (
    <ul className="cards">
      {filteredPlants.length > 0 ? (
        filteredPlants.map((plant) => (
          <PlantCard
            key={plant.id}
            name={plant.name}
            image={plant.image}
            price={plant.price}
          />
        ))
      ) : (
        <p>No plants found</p> 
     )}
   </ul>
  );
}

export default PlantList;
