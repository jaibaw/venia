import React from 'react';
import { SIZE, STYLE, BRAND } from "../../constant/common";
import Color from '../common/Color';

function Sidebar() {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <div className='sidebar-container'>
            <div className="aem-Grid aem-Grid--12">
                <div className='attr'>
                    <span className='sidebar-span'>Filters</span>
                </div>
                <div className="attr">
                    <div>
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
                    <div>
                        <span className='sidebar-span'>Attributes</span>
                    </div>
                    <div className='attr-bottom'>
                        {STYLE.map(function (key) {
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

                <div className='attr'>
                    <div>
                        <span className='sidebar-span'>Color</span>
                    </div>
                    <div className='attr-bottom'>
                        <Color />
                    </div>
                </div>


                <div className='attr'>
                    <div>
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
    );
}

export default Sidebar;


