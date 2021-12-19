import { combineReducers } from "redux"; 
import {ADD_CONTACT, DELET_CONTACT, FILTER_CONTACTS} from './form-types';

const CONTACTS_INIT_STATE = {
    contacts:[],
    error: '',
}

const contactsReducer = (state = CONTACTS_INIT_STATE, action) => {
    switch (action.type) {

        case ADD_CONTACT:
            if (state.contacts.some(contact => contact.name.toLowerCase()===action.payload.name)){
                return {
                    ...state,
                    error: `The name ${action.payload.name} already exists.`
                }
            } else {
                return {
                    ...state,
                    contacts: [...state.contacts, {
                        name: action.payload.name,
                        number: action.payload.number
                    }]
                }
            }
            
        case DELET_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.name !== action.payload.name)
            }
        
     
        
        default:
            return state;
    }
};

const filterReducer = (state = '', action) => {
    switch (action.type) { 
        case FILTER_CONTACTS:
            return action.payload;
        
        default:
            return state;
    }
}

const routReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
})

export default routReducer;