import './App.css'; 
import Form from './components/form/Form'
import Filter from './components/filter/Filter';
import ContactList from './components/contactList/ContactList';
import { useSelector } from 'react-redux';


export default function App() {

  const error = useSelector((state) => state.contacts.error); 


  // useEffect(()=> {
  //   localStorage.setItem('items', JSON.stringify(contacts));
  // }, [contacts])



  return (
    <div>
      <h1>Phonebook</h1><br/>
      {error && <p style = {{color:"red"}}>{error}</p>}
      <Form />

      <Filter />
      
      <ContactList />
    </div>
  );
}

