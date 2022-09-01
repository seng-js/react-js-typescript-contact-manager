import React from "react";
import {useDispatch} from "react-redux";
import {updateContactHandler} from "../services";

type ActionListProps = {
    index: string,
    item: any
}

const ActionList: React.FC<ActionListProps>  = ({index, item}) => {
    const dispatch = useDispatch();
    const {isContact, isFavorite} = item;
    const updateData = (type: string, action: string) => {
        updateContactHandler(type, action, index, dispatch);
    }
    return (
        <div className="list-action">
            {isContact ? (
                <button onClick={() => updateData('contact', 'delete')}
                    className="btn btn-danger">Delete from contacts</button>
            ):(
                <button onClick={() => updateData('contact', 'add')}
                    className="btn btn-success">Add to contacts</button>
            )}
            {isContact === true && isFavorite === false && (
                <button onClick={() => updateData('favorite', 'add')}
                    className="btn btn-success">Add to favorites</button>
            )}
            {isFavorite === true && (
                <button onClick={() => updateData('favorite', 'delete')}
                        className="btn btn-danger">Delete from favorites</button>
            )}
        </div>
    )
}

export default ActionList
