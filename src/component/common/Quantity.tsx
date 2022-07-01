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
        <div>
            <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--1">
                    <div>
                        <div className="quantity-dec">
                            <img className="quantity-logo" src={minuscircle} onClick={onChangeDecrement}></img>
                        </div>
                    </div>
                </div>

                <div className="aem-GridColumn aem-GridColumn--default--2">
                    <div className="box-quantity">
                        <div className="box-span">
                            <span className="quantity-span">{quantity}</span>
                        </div>
                    </div>
                </div>

                <div className="aem-GridColumn aem-GridColumn--default--1">
                    <div>
                        <div className="quantity-inc">
                            <img className="quantity-logo" src={pluscircle} onClick={onChangeIncrement}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Quantity;

