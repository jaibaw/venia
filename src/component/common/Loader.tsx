import Spinner from "react-spinner-material";

const Loader = (props: any) => {
    return (
        <div >
            <Spinner radius={100} color={"#333"} stroke={4} visible={props.loader} />
        </div>
    );
};

export default Loader;
