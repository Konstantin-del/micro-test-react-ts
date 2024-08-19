import React,{ FC, useState } from 'react';
import './App.css';
import { AddPizzaForm } from './components/AddPizzaForm';
import { Pizza } from './models/Pizzas';
import { DisplayPizzas } from './components/DisplayPizzas';

const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([])
  
  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza])
  }

  const updatePizza = (newPizza: Pizza) => {
    setPizzasList(pizzasList.map((pizza) => 
      (pizza.id === newPizza.id ? newPizza : pizza)))
  }

  const deletePizza = (id: Number) => {

    const newPizzaList = pizzasList.filter(pizza => pizza.id !== id);
    setPizzasList(newPizzaList);
  }

  console.log(pizzasList)

  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">Our pizza</span>
        <AddPizzaForm
          addPizza={addPizza}
        />
        <DisplayPizzas 
          pizzasList={pizzasList} 
          updatePizza={updatePizza}
          deletePizza={deletePizza}
        />
      </div>
    </div>
  );
}

export default App;
