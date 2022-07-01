import trash from "../../assests/images/trash.svg";
import edit from "../../assests/images/edit.svg";
import heart from "../../assests/images/heart.svg";

function EditMenu() {
    return (
        <div>
            <div className="edit-icon-container">
                <div>
                    <img className="edit-icons" src={edit}></img>
                    <label className="edit-icon-span">Edit item</label>
                </div>
                <div>
                    <img className="edit-icons" src={trash}></img>
                    <label className="edit-icon-span">Remove</label>
                </div>
                <div>
                    <img className="edit-icons" src={heart}></img>
                    <label className="edit-icon-span">Save for later</label>
                </div>
            </div>
        </div>
    );
}

export default EditMenu;

