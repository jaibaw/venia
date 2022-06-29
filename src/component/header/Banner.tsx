import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import womensblock from "../../assests/images/womensblock.jpg";
import manplay from "../../assests/images/manplay.jpg";
import { MenuItem, TextField } from "@mui/material";
import Breadcrum from '../common/Breadcrum';


function Banner() {
    const productList = useSelector((state: any) => state.getProductList.getProductList);

    console.log("productList.data.", productList)
    return (
        <div className="banner-container">
            <div className="aem-Grid aem-Grid--12">
                <div className='aem-GridColumn aem-GridColumn--default--5'>
                    <img className="women-block" src={womensblock}>
                    </img>
                </div>
                <div className='aem-GridColumn aem-GridColumn--default--7'>
                    <img className="man-play" src={manplay}>
                    </img>
                </div>
            </div>
            <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--3">
                    <Breadcrum />
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--6">
                    {/* {productList ? 9 : 0} */}
                    <span>Results</span>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--3">
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Select"
                        // value={currency}
                        // onChange={handleChange}
                        helperText="Please select your currency"
                    >

                        {productList != undefined && productList.map(function (option: any) {

                            // let final = [...new Set(option.category)];
                            return (
                                <MenuItem key={option.id} value={option.id}>
                                    {option.category}
                                </MenuItem>
                            );
                        })}
                    </TextField>
                </div>
            </div>


        </div>
    );
}

export default Banner;

