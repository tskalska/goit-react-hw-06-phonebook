import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { deletContact } from '../../redux/form/form-actions';


export default function ContactList ({ deleteButtnHandler }){
  
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts)
  console.log(contacts);

  // const normalizedFilter = filterX.toLowerCase()
  // const filteredList = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))


  return ( 
  <div>
    <h2>Contacts: </h2><br />
    {!contacts && <span>У вас нет контактов!</span>}
    {contacts &&
      <ul>{contacts.map(contact =>
        <li key={uuidv4()}>
          {contact.name} : {contact.number}
          <button type="button" onClick={ () => dispatch(deletContact(contact.name))}>
            Delete
          </button>
        </li>
        )}
      </ul>
    }
  </div>)
}
