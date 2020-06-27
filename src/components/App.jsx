
import React, { Component } from 'react';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

//utils
import { v4 as uuidv4 } from 'uuid';
import storage from '../utils/storage';
import { ToastContainer, toast } from 'react-toastify';

//styles
import 'react-toastify/dist/ReactToastify.css';
import styles from './ContactForm/ContactForm.module.scss';


class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  }

  componentDidMount() {
    const persistedContacts = storage.get("contacts");

    if (persistedContacts) {
      this.setState({

        contacts: persistedContacts,
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      storage.save('contacts', contacts);
    }
  }

  AddContacts = (name, number) => {
    const { contacts } = this.state
    const newContact = { name, number, id: uuidv4(), }

    if (!name || !number) { return toast.error('Please fill the form!') }
    else if (name.length < 3) { toast.error('Name should be more then 3 letters') }
    else if (contacts.some(contact => contact.name === name)) { toast.info(name + ` is alredy in contacts`) }
    else { this.setState(({ contacts }) => ({ contacts: [...contacts, newContact] })) }
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
  }

  changeFilter = filter => {
    this.setState({ filter });
  };

  RemoveContact = (contactId) => {

    this.setState(({ contacts }) =>
      ({ contacts: contacts.filter(({ id }) => id !== contactId) }));
  }

  render() {
    const { filter, contacts } = this.state;
    const visibleContacts = this.getVisibleContacts();
    console.log(visibleContacts);


    return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.AddContacts} />
        <h2>Contacts</h2>
        {contacts.length > 1 && <Filter value={filter} onChangeFilter={this.changeFilter} />}
        {contacts.length > 0 && < ContactList contacts={visibleContacts} onRemove={this.RemoveContact} />}
        {!visibleContacts.length && <div>Not faund</div>}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

export default App;