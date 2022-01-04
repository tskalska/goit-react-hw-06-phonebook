import React from 'react';
import {useState} from 'react';
import styles from './Form.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {addContact,addError} from '../../redux/contactsRedux/actions';
import PropTypes from 'prop-types';


export default function Form () {

  const [newName,setNewName]=useState('');
  const [newNumber,setNewNumber]=useState('');

  const contacts = useSelector(state => state.contacts.contacts)
  const dispatch = useDispatch('');


  const handleChange = (event) => {
    const {name, value} = event.target;

    switch (name) {
      case 'name':
        setNewName(value);
        break;

      case 'number':
        setNewNumber(value);
        break;
        
      default: return;
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (contacts && contacts.some(contact => contact.name.toLowerCase()===newName)){
      dispatch(addError());
      event.target.reset();
      return;
    } else {
      dispatch(addContact({newName, newNumber}));
      setNewName('');
      setNewNumber(''); 
      event.target.reset();
    }
  }


  return (
    <div className = {styles.formContainer}>
      <form onSubmit = {handleSubmit} className={styles.form}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChange}
            className = {styles.formInput}
          />
        </label>
        <label>
          Number:
          <input 
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleChange}
            className = {styles.formInput}
          >
          </input>
        </label>
        <button className={styles.formButton}>Add contact</button>
      </form>
    </div>
  );

}

Form.propTypes = {
  onSubmit: PropTypes.any,
}