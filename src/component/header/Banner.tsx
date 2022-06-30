import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import womensblock from "../../assests/images/womensblock.jpg";
import manplay from "../../assests/images/manplay.jpg";
import { MenuItem, TextField } from "@mui/material";
import Breadcrum from '../common/Breadcrum';
import { FILTER } from '../../constant/common';
import { action_fetchProductByCategory, action_sortProductPrice } from '../../actions/get-products';


function Banner() {
    const dispatch = useDispatch();

    const [filterValue, setFilterValue] = useState('');

    const productList = useSelector((state: any) => state.getProductList.getProductList);


    const filterChange = (e: any) => {
        setFilterValue(e.target.value);
        if ((e.target.value === 'desc') || (e.target.value === 'asc')) {
            debugger
            dispatch(action_sortProductPrice(e.target.value));
        } else {
            dispatch(action_fetchProductByCategory(e.target.value));
        }
    }

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
                    <Breadcrum
                        label={filterValue}
                    />
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--6">
                    {productList && productList ? productList.length : 0}
                    <span>Results</span>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--3">
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Select"
                        value={filterValue}
                        onChange={filterChange}
                        helperText="Please select your currency"
                    >
                        {FILTER.map(function (option: any) {
                            return (
                                <MenuItem key={option.id} value={option.value}>
                                    {option.filterLabel}
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

