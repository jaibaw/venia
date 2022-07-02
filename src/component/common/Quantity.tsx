import React, { useState, useEffect } from "react";
import pluscircle from "../../assests/images/pluscircle.svg";
import minuscircle from "../../assests/images/minuscircle.svg";
import { useDispatch, useSelector } from "react-redux";
import { action_setQuantity } from "../../actions/get-products";

// quntity selection
function Quantity(props: any) {
    const dispatch = useDispatch();

    //local state
    const [quantity, setquantity] = useState(1);
     
    //redux state
    const setQuantity = useSelector((state: any) => state.getProductList.setQuantity);

    //on decrement
    const onChangeDecrement = () => {
        if (quantity > 1) {
            setquantity(quantity - 1)
            dispatch(action_setQuantity(quantity.toString()));
        }
    }

    //on increment
    const onChangeIncrement = () => {
        setquantity(quantity + 1);
        dispatch(action_setQuantity(quantity.toString()));
    }

    //retun component
    return (
        <div className="quantity-container">
            <span>{<img className="quantity-logo-minus" src={minuscircle} onClick={onChangeDecrement}></img>
            }</span>

            <span className="quantity-span">{setQuantity}</span>

            <span>{<img className="quantity-logo-plus" src={pluscircle} onClick={onChangeIncrement}></img>
            }</span>
        </div>
    );
}

export default Quantity;

