import { Box } from "@mui/material";
import { style } from "@mui/system";
import { SIZE } from "../../constant/common";

function Size() {
    return (
        <div>
            <div>
                {
                    SIZE.map((key) => {
                        return (
                            <Box  className="box" component="span" sx={{ p: 1, border: '1px solid #91959C' }}>
                                <label>{key.img}</label>
                            </Box>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Size;
