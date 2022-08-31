import {isFilterByLocation, isFilterByName, isValidInput} from "../util";

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

const reducer = (state = initialState, action: any) => {
    let contacts = [];
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
            contacts = state.contacts.map((contact) => {
                // @ts-ignore
                if (contact.index === payload.index) {
                    // @ts-ignore
                    return {...contact, ...payload.data}
                }

                return contact;
            });
            return {
                ...state,
                contacts: contacts
            };
        case REACT_APP_CONTACT_DELETE:
            // @ts-ignore
            contacts = state.contacts.filter(contact => contact.index !== payload.index);
            return {
                ...state,
                contacts: contacts
            };
        case REACT_APP_CONTACT_GET_FILTER_DATA:
            if (isValidInput(action.payload.filterByLocation) &&
                isValidInput(action.payload.filterByName)) {
                contacts = state.tempContacts.filter(contact => {
                    return isFilterByName(action.payload.filterByName, contact) &&
                        isFilterByLocation(action.payload.filterByLocation, contact);
                });
            } else if (isValidInput(action.payload.filterByLocation)) {
                contacts = state.tempContacts.filter(contact => {
                    return isFilterByLocation(action.payload.filterByLocation, contact);
                });
            } else if (isValidInput(action.payload.filterByName)) {
                contacts = state.tempContacts.filter(contact => {
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
