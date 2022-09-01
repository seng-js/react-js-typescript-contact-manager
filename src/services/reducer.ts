import {
    isFilterByLocation,
    isFilterByName,
    isFilterDelete,
    isValidInput
} from "../util";

const {
    REACT_APP_CONTACT_CREATE,
    REACT_APP_CONTACT_UPDATE,
    REACT_APP_CONTACT_DELETE,
    REACT_APP_CONTACT_GET_FILTER_DATA,
    REACT_APP_CONTACT_GET_INIT_DATA
} = process.env

const initialState = {
    selectedFilterByName: '',
    selectedFilterByLocation: '',
    contacts: [],
    tempContacts: []
}

const reducer = (state: any = initialState, action: any) => {
    let contacts: Array<any> = [];
    switch (action.type) {
        case REACT_APP_CONTACT_GET_INIT_DATA:
            return {
                ...state,
                contacts: action.payload,
                tempContacts: action.payload
            };
        case REACT_APP_CONTACT_CREATE:
            return {
                ...state,
                contacts: [...state.contacts, action.payload.data],
                tempContacts: state.contacts
            };
        case REACT_APP_CONTACT_UPDATE:
            contacts = state.contacts.map((contact: any) => {
                if (contact.index === action.payload.index) {
                    return {...contact, ...action.payload.data}
                }

                return contact;
            });
            return {
                ...state,
                contacts
            };
        case REACT_APP_CONTACT_DELETE:
            contacts = state.contacts.filter((contact: any) => {
                return isFilterDelete(contact, action.payload.index);
            });
            return {
                ...state,
                contacts
            };
        case REACT_APP_CONTACT_GET_FILTER_DATA:
            if (isValidInput(action.payload.filterByLocation) &&
                isValidInput(action.payload.filterByName)) {
                contacts = state.tempContacts.filter((contact: any) => {
                    return isFilterByName(action.payload.filterByName, contact) &&
                        isFilterByLocation(action.payload.filterByLocation, contact);
                });
            } else if (isValidInput(action.payload.filterByLocation)) {
                contacts = state.tempContacts.filter((contact: any) => {
                    return isFilterByLocation(action.payload.filterByLocation, contact);
                });
            } else if (isValidInput(action.payload.filterByName)) {
                contacts = state.tempContacts.filter((contact: any) => {
                    return isFilterByName(action.payload.filterByName, contact);
                });
            } else {
                contacts = state.tempContacts;
            }
            return {
                ...state,
                contacts,
                tempContacts: state.tempContacts,
                selectedFilterByName: action.payload.filterByName,
                selectedFilterByLocation: action.payload.filterByLocation
            };
        default:
            return {
                ...state,
                contacts: [],
                tempContacts:[]
            };
    }
}

export default reducer;
