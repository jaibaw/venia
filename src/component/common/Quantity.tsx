import { Box } from '@mui/material';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import pluscircle from "../../assests/images/pluscircle.svg";
import minuscircle from "../../assests/images/.minuscircle.svg";

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
            <div>
                <Box className="box" component="span" sx={{ p: 1, border: '1px solid #91959C' }}>
                    <label onClick={onChangeDecrement}>-</label>
                </Box>
                <Box className="box" component="span" sx={{ p: 1, border: '1px solid #91959C' }}>
                    <label>{quantity}</label>
                </Box>
                <Box className="box" component="span" sx={{ p: 1, border: '1px solid #91959C' }}>
                    <label onClick={onChangeIncrement}>+</label>
                </Box>
            </div>
        </div>
    );
}

export default Quantity;

