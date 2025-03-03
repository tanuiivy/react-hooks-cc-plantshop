import React from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {plants.map((plants) => 
      <PlantCard
      key={plant.id}
      name={plant.name}
      image={plant.image}
      price={plant.price}
      />
      )}
      </ul>
  );
}

export default PlantList;
