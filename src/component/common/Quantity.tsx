import { Box } from '@mui/material';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import pluscircle from "../../assests/images/pluscircle.svg";
import  minuscircle from "../../assests/images/.minuscircle.svg";

function Quantity() {


    const [quantity, setquantity] = useState(1);
  
    return (
        <div>
            <div>
                <Box className="box" component="span" sx={{ p: 1, border: '1px solid #91959C' }}>
                    <label>-</label>
                </Box>
                <Box className="box" component="span" sx={{ p: 1, border: '1px solid #91959C' }}>
                    <label>{quantity}</label>
                </Box>
                <Box className="box" component="span" sx={{ p: 1, border: '1px solid #91959C' }}>
                    <label>+</label>
                </Box>
            </div>
        </div>
    );
}

export default Quantity;

