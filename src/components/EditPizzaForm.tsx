import React,{ ChangeEvent, FC, FormEvent, useState } from "react";
import { Pizza } from "../models/Pizzas";

interface EditPizzaFormProps {
    data: Pizza;
    updatePizza: (newPizza: Pizza) => void;
    toggleEditHandeler: () => void; 
}

export const EditPizzaForm: FC <EditPizzaFormProps> = ({data, updatePizza, toggleEditHandeler}) => {
    const [editPizza, setEditPizza] = useState<Pizza>(data)

    const changeHandler = (e:ChangeEvent<HTMLInputElement>) => {

        const{name, value} = e.target;
        setEditPizza({...editPizza, [name]: value })
        //console.log(e.target);
    }

    const submitHandler = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // для того что бы при отправке страница не перезагружалась
        
        const {title, price, img} = editPizza;

        if(title && price && img){   
            updatePizza(editPizza);
            toggleEditHandeler();
        }
        setEditPizza(data);

    }

    return(
        <form className="edit-form" onSubmit={submitHandler}>
            <input 
            name="title"
            type="text"
            placeholder="name"
            onChange={changeHandler}
            value={editPizza.title}
            />
            <input 
            name="price"
            type="text"
            placeholder="price"
            onChange={changeHandler}
            value={editPizza.price}
            />
            <input 
            name="img"
            type="text"
            placeholder="image"
            onChange={changeHandler}
            value={editPizza.img}
            />
            <button type="submit">confirm</button>
        </form>
    )
    

}