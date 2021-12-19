import {ADD_CONTACT, DELET_CONTACT, FILTER_CONTACTS} from './form-types';


export function addContact({ name, number}) {
    return { type: ADD_CONTACT, payload:{ name, number }}
}

export function deletContact(name) {
    return { type: DELET_CONTACT, payload:{ name }}
}


export function filterContacts(value) {
    return {type: FILTER_CONTACTS, payload:{ value }}
}