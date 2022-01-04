import React from 'react';
import {v4 as uuidv4} from 'uuid';
import {useDispatch, useSelector} from 'react-redux';
import {deletContact} from '../../redux/contactsRedux/actions';


export default function ContactList (){
  
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts)
  const filter = useSelector(state => state.filter)

  const filteredList = contacts.filter(contact => contact.name.toLowerCase().includes(filter))
  
  return ( 
  <div>
    {!contacts && <span>У вас нет контактов!</span>}
    {contacts &&
    <div>
      <h2>Contacts: </h2><br />
      <ul>{filteredList.map(contact =>
        <li key={uuidv4()}>
          {contact.name} : {contact.number}
          <button type="button" onClick={ () => dispatch(deletContact(contact.name))}>
            Delete
          </button>
        </li>
        )}
      </ul>
    </div>
    }
  </div>)
}
