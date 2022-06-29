import React from 'react';
import { SIZE, STYLE, BRAND } from "../../constant/common";

function Sidebar() {
    return (
        <div className='sidebar-container'>
            <div className="aem-Grid aem-Grid--12">
                <div>
                    <div>
                        {SIZE.map(function (key) {
                            return (
                                <div>
                                    <input type="checkbox" id="key" name="key" value={key}>
                                    </input>
                                    <label>{key}</label>
                                    <br></br>
                                </div>
                            );
                        })}
                    </div>
                    <div>
                        {STYLE.map(function (key) {
                            return (
                                <div>
                                    <input type="checkbox" id="key" name="key" value={key}>
                                    </input>
                                    <label>{key}</label>
                                    <br></br>
                                </div>
                            );
                        })}
                    </div>
                    <div>
                        {BRAND.map(function (key) {
                            return (
                                <div>
                                    <input type="checkbox" id="key" name="key" value={key}>
                                    </input>
                                    <label>{key}</label>
                                    <br></br>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;