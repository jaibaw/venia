import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Breadcrumbs, Link } from "@mui/material";


function Breadcrum() {
    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    MUI
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    Core
                </Link>
                <Link
                    underline="hover"
                    color="text.primary"
                    href="/material-ui/react-breadcrumbs/"
                    aria-current="page"
                >
                    Breadcrumbs
                </Link>
            </Breadcrumbs>

        </div>
    );
}

export default Breadcrum;

