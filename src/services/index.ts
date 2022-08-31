import {AnyAction, Dispatch} from "@reduxjs/toolkit";
import axios from "axios";
import {createContact, deleteContact, getInitData, updateContact} from "./actions";

const {REACT_APP_FIREBASE_URL} = process.env;
const peopleUrl = REACT_APP_FIREBASE_URL + 'people';

export const getInitDataHandler = (dispatch: Dispatch<AnyAction>) => {
    return axios.get(peopleUrl + '.json')
        .then((response) => {
            let contacts: Array<any> = [];
            Object.entries(response.data).forEach(([index, value]) => {
                // @ts-ignore
                contacts.push({...value, index});
            });
            dispatch(getInitData(contacts))
        }).catch((error) => {
            console.log('Error: ' + error);
        });
}

export const deleteDataHandler = (index: string, dispatch: Dispatch<AnyAction>) => {
    axios.delete(peopleUrl + '/' + index + '.json').then(() => {
        dispatch(deleteContact(index))
    });
}

export const updateContactHandler = (type: string, action: string, index: string, dispatch: Dispatch<AnyAction>) => {
    let data = {};
    const isAdd = action === 'add';
    if (type === 'favorite') {
        data = {'isFavorite': isAdd}
    } else if (type === 'contact') {
        data = {'isContact': isAdd}
        if (isAdd === false) {
            data = {'isContact': false, 'isFavorite': false}
        }
    }
    axios.patch(peopleUrl + '/' + index + '.json', data).then(() => {
        dispatch(updateContact(index, data))
    });
}

export const saveContactHandler = (data: object, dispatch: Dispatch<AnyAction>) => {
    // @ts-ignore
    if (data.index === undefined) {
        axios.post(peopleUrl + '.json', data).then((response) => {
            if (response.data !== undefined) {
                // @ts-ignore
                data.index = response.data.name;
                dispatch(createContact(data))
            }
        });
    } else {
        // @ts-ignore
        axios.patch(peopleUrl + '/' + data.index + '.json', data).then(() => {
            // @ts-ignore
            dispatch(updateContact(data.index, data))
        });
    }
}