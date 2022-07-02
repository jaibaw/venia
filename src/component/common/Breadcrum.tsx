import { Breadcrumbs, Link } from "@mui/material";
import { useSelector } from "react-redux";

// braedcrum component
function Breadcrum(props: any) {
    const productDetail = useSelector((state: any) => state.getProductList.singleProductDetail);

    return (
        <div className="breadcrum-container">
            <Breadcrumbs>
                <Link>
                    <span className="span-beadcrum"> Clothing</span>
                </Link>
                <Link>
                    {
                        (props.label) ?
                            <span className="span-beadcrum">{props.label}</span> :
                            <span className="span-beadcrum">{ (Object.keys(productDetail).length > 0) ? productDetail.category : "Dressing"}</span>
                    }
                </Link>
            </Breadcrumbs>

        </div>
    );
}

export default Breadcrum;

