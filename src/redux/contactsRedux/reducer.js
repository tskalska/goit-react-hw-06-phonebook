import {createReducer} from '@reduxjs/toolkit';
import {addContact, deletContact, filterContacts} from './actions';

const initContactsState = {
    contacts:[],
}

export const contactsReducer = createReducer(initContactsState,{
        [addContact.type]: (state, {payload}) => {   
            return {
                ...state,
                contacts: [...state.contacts, {
                    name: payload.name,
                    number: payload.number
                }],
            }},
        [deletContact.type]: (state, {payload}) => {
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.name !== payload)
            }
        }
})


export const filterReducer = createReducer('', {
    [filterContacts.type]: (state, {payload}) => {
        return payload;
    }
} )

// ----------- RECDUX ----------


// export const filterReducer = (state = '', action) => {
//     switch (action.type) { 
//         case FILTER_CONTACTS:
//             return action.payload;
        
//         default:
//             return state;
//     }
// }

// const CONTACTS_INIT_STATE = {
//     contacts:[],
//     error: '',
// }


// export const contactsReducer = (state = CONTACTS_INIT_STATE, action) => {
//     switch (action.type) {

//         case ADD_CONTACT:
//             if (state.contacts.some(contact => contact.name.toLowerCase()===action.payload.name)){
//                 return {
//                     ...state,
//                     error: `The name ${action.payload.name} already exists.`
//                 }
//             } else {
//                 return {
//                     ...state,
//                     contacts: [...state.contacts, {
//                         name: action.payload.name,
//                         number: action.payload.number
//                     }]
//                 }
//             }
            
//         case DELET_CONTACT:
//             return {
//                 ...state,
//                 contacts: state.contacts.filter(contact => contact.name !== action.payload)
//             }
        
//         default:
//             return state;
//     }
// };
