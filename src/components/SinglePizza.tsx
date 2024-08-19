import { FC, useState } from "react";
import { Pizza } from "../models/Pizzas";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { EditPizzaForm } from "./EditPizzaForm";

interface SinglePizzaProps {
    pizza: Pizza;
    updatePizza: (newPizza: Pizza) => void;
    deletePizza: (id: number) => void;
}

export const SinglePizza: FC <SinglePizzaProps> = ({pizza, updatePizza, deletePizza}) => {
    const [edit, setEdit] = useState<boolean>(false);

    const toggleEditHandeler = () => {
        setEdit(!edit);
    }

    const deleteHandeler = () => {
        deletePizza(pizza.id);
    }


    return(
        <div className="pizza">
           <img src={`./images/${pizza.img}`} alt={pizza.title}/>
           <h2>{pizza.title}</h2>
           <span>{pizza.price}</span>
           <div className="pizza-controls">
            <CiEdit onClick={toggleEditHandeler}/>
            <MdDelete onClick={deleteHandeler}/>
           </div>
           {edit ? <EditPizzaForm 
            data={pizza} 
            updatePizza={updatePizza}
            toggleEditHandeler={toggleEditHandeler}
            /> : null }
        </div>
    )
}