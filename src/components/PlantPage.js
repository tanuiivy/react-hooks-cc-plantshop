import React, {useState,useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage(){
  //to store fetched plants
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((res) => res.json())
    .then((data) => setPlants(data));//store the plants in state
    }, []);

    //add a new plant
    function handleAddPlant(newPlant){
      setPlants([...plants, newPlant]);//updates the state with new plant
    }

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
