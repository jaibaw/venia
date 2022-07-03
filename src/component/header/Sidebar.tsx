import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { action_fetchProductByCategory, action_setMenuBarStatus } from '../../actions/get-products';
import { SIZE, STYLE, BRAND } from "../../constant/common";
import Color from '../common/Color';
import close from '../../assests/images/close.png';

//sidebar
function Sidebar() {
    const dispatch = useDispatch();
   
    //fetch data based on slection of dropdown
    const handleFilterChange = (e: any) => {
        dispatch(action_fetchProductByCategory(e.target.value));
    };

    const handleMenuClose = () => {
        dispatch(action_setMenuBarStatus(false));
    }

    //return component
    return (
        <div className='sidebar-container '>
            <div className="aem-Grid aem-Grid--12 aem-GridColumn--phone--12" >
                <div>
                    <div className='filter-title-div'>
                        <span className='sidebar-span'>Filters</span>
                        <img className='close-log' src={close} onClick={handleMenuClose} ></img>
                    </div>
                    <div className="attr">
                        <div className='sidebar-span-div'>
                            <span className='sidebar-span'>Attributes</span>
                        </div>
                        <div className='attr-bottom'>
                            {SIZE.map(function (key) {
                                return (
                                    <div>
                                        <input className='chechbox-resize' type="checkbox" id="key" name="key" value={key.value}>
                                        </input>
                                        <span className='checkbox-span'>{key.value}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className='attr'>
                        <div className='sidebar-span-div'>
                            <span className='sidebar-span'>Attributes</span>
                        </div>
                        <div className='attr-bottom'>
                            {STYLE.map(function (key) {
                                return (
                                    <div>
                                        <input
                                            className='chechbox-resize'
                                            type="checkbox"
                                            id={(key.id)}
                                            name="key"
                                            value={key.value}
                                            onClick={handleFilterChange}
                                        // checked={checked}
                                        >
                                        </input>
                                        <label className='checkbox-span'>{key.filterLabel}</label>
                                        <br></br>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className='attr'>
                        <div className='sidebar-span-div'>
                            <span className='sidebar-span'>Color</span>
                        </div>
                        <div className='attr-bottom'>
                            <Color />
                        </div>
                    </div>

                    <div className='attr'>
                        <div className='sidebar-span-div'>
                            <span className='sidebar-span'>Attributes</span>
                        </div>
                        <div className='attr-bottom'>
                            {BRAND.map(function (key) {
                                return (
                                    <div>
                                        <input className='chechbox-resize' type="checkbox" id="key" name="key" value={key}>
                                        </input>
                                        <label className='checkbox-span'>{key}</label>
                                        <br></br>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Sidebar;


