import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Breadcrumbs, Link } from "@mui/material";


function Breadcrum(props: any) {
    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    Clothing
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                >
                    {
                        (props.label ) ?
                            <span className='breadcrum-text'>{props.label}</span> :
                            "Dressing"
                    }
                </Link>
            </Breadcrumbs>

        </div>
    );
}

export default Breadcrum;

