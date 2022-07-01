import React, { useState, useEffect } from "react";
import pluscircle from "../../assests/images/pluscircle.svg";
import minuscircle from "../../assests/images/minuscircle.svg";

function Quantity(props: any) {

    const [quantity, setquantity] = useState(3);

    const onChangeDecrement = () => {
        if (quantity > 1) {
            setquantity(quantity - 1)
        }
    }

    const onChangeIncrement = () => {
        setquantity(quantity + 1)
    }

    return (
        <div className="quantity-container">
            <span>{<img className="quantity-logo-minus" src={minuscircle} onClick={onChangeDecrement}></img>
            }</span>

            <span className="quantity-span">{quantity}</span>

            <span>{<img className="quantity-logo-plus" src={pluscircle} onClick={onChangeIncrement}></img>
            }</span>
        </div>
    );
}

export default Quantity;

