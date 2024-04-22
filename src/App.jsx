
import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard/CoffeeCard";
import { useState } from "react";

function App() {
 
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className="m-20">
      <h1 className="text-6xl text-center text-purple-800">Hot Cold Coffee {coffees.length}</h1>
     <div className="grid grid-cols-2 gap-5">
     {
        coffees.map(coffee => <CoffeeCard  coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
      }
     </div>
    </div>
  );
}

export default App;
