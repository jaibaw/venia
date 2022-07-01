import { Breadcrumbs, Link } from "@mui/material";

function Breadcrum(props: any) {
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
                            <span className="span-beadcrum">Dressing</span>
                    }
                </Link>
            </Breadcrumbs>

        </div>
    );
}

export default Breadcrum;

