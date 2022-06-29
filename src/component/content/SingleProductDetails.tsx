import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Breadcrum from '../common/Breadcrum';
import Color from '../common/Color';
import Quantity from '../common/Quantity';
import Size from '../common/Size';
import share from "../../assests/images/share.svg";
import heart from "../../assests/images/heart.svg";

function SingleProductDetails() {

    const singleProductDetail = useSelector((state: any) => state.getProductList.singleProductDetail);

    console.log("singleProductDetail", singleProductDetail)

    return (
        <div>
            <div className="aem-Grid aem-Grid--12">
                <div>
                    <Breadcrum />
                </div>
                <div>
                    <label>
                        {singleProductDetail.title}
                    </label>
                </div>

                <div>
                    <label>
                        {singleProductDetail.rating ? singleProductDetail.rating.rate : ""} {singleProductDetail.rating ? singleProductDetail.rating.count : ""}
                    </label>
                </div>
                <div>
                    <p>
                        {singleProductDetail.description}
                    </p>
                </div>
                <div>
                    <Color />
                </div>
                <div>
                    <Size />
                </div>
                <div>
                    <Quantity />
                </div>
                <div>
                    <Button variant="outlined" size="small">
                        Small
                    </Button>
                </div>
                <div>
                    <img src={heart}></img>
                    <label>Save</label>

                    <img src={share}></img>
                    <label>Share</label>

                </div>
            </div>
            <div className="aem-Grid aem-Grid--12">
                <label>Details</label>
                <div className="aem-GridColumn aem-GridColumn--default--6 logo">
                    <div>
                        <label>
                            Sweat-wicking
                        </label>
                    </div>
                    <div>
                        <label>
                            Lightweight fabric
                        </label>
                    </div>
                </div>

                <div className="aem-GridColumn aem-GridColumn--default--6 logo">
                    <div>
                        <label>
                            Breathable
                        </label>
                    </div>
                    <div>
                        <label>
                            69% nylon, 31% lycra
                        </label>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default SingleProductDetails;

