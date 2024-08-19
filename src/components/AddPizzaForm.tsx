import React, {ChangeEvent, FC, FormEvent, useState} from "react";
import './styles.css';
import { Pizza } from "../models/Pizzas";

interface Props {
    addPizza: (newPizza: Pizza) => void
}

interface InitialState {
    title: string,
    price: string,
    img: string,
}

const initialState: InitialState = {
    title: '',
    price: '',
    img: '',
}

export const AddPizzaForm: FC <Props> = ({ addPizza }) => {
    const[newPizza, setNewPizza] = useState<InitialState>(initialState);

    const changeHandler = (e:ChangeEvent<HTMLInputElement>) => {

        const{name, value} = e.target;
        setNewPizza({...newPizza, [name]: value })
        //console.log(e.target);
    }

    const submitHandler = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // для того что бы при отправке страница не перезагружалась
        
        const {title, price, img} = newPizza;

        if(title && price && img){
            addPizza({
                title: title,
                price: Number(price),
                img: img,
                id: Date.now(),
            });
        }
        setNewPizza(initialState);

    }


    return(
        <form onSubmit={submitHandler}>
            <input 
            name="title"
            type="text"
            placeholder="name"
            onChange={changeHandler}
            value={newPizza.title}
            />
            <input 
            name="price"
            type="text"
            placeholder="price"
            onChange={changeHandler}
            value={newPizza.price}
            />
            <input 
            name="img"
            type="text"
            placeholder="image"
            onChange={changeHandler}
            value={newPizza.img}
            />
            <button type="submit">+add to menu</button>
        </form>
    )

}
