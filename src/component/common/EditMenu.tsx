import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import trash from "../../assests/images/trash.svg";
import edit from "../../assests/images/edit.svg";
import heart from "../../assests/images/heart.svg";

function EditMenu() {
    return (
        <div>
            <div>
                <div>
                    <img src={edit}></img>
                    <label>Edit item</label>
                </div>
                <div>
                    <img src={trash}></img>
                    <label>Remove</label>
                </div>
                <div>
                    <img src={heart}></img>
                    <label>Save for later</label>
                </div>
            </div>
        </div>
    );
}

export default EditMenu;

