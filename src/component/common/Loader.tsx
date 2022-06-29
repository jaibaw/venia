import CircularProgress from "@mui/material/CircularProgress";
import React from "react"

function Loader(props: any) {
    return (
        <>
            {props.status} ?
            <CircularProgress /> :
            {}
        </>
    )
}


export default Loader;
