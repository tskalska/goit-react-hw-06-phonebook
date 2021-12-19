import {useState, useEffect} from 'react';
import './App.css'; 
import Form from './components/form/Form'
import Filter from './components/filter/Filter';
import ContactList from './components/contactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import {addContact}  from './redux/form/form-actions';


export default function App() {

  const dispatch = useDispatch();
  const error = useSelector((state) => state.error); 


  const formSubmitHandler = ({newName, newNumber}) => {
    dispatch(addContact({name: newName, number: newNumber}))
  }



  // useEffect(()=> {
  //   localStorage.setItem('items', JSON.stringify(contacts));
  // }, [contacts])



  return (
    <div>
      <h1>Phonebook</h1><br/>
      {error && <p style = {{color:"red"}}>{error}</p>}
      <Form
        onSubmit={ formSubmitHandler }
      />

      <Filter
      />
      
      <ContactList
      />
    </div>
  );
}

