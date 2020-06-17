
import React, { Component } from 'react';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import { v4 as uuidv4 } from 'uuid';

import styles from './ContactForm/ContactForm.module.scss';


class App extends Component {

  static propTypes = {};
  static defaulProps = {};

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
    const persistedContacts = localStorage.getItem('contacts');

    if (persistedContacts) {
      this.setState({
        contacts: JSON.parse(persistedContacts)
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts))
    }
  }

  AddContacts = (name, number) => {
    if (!name && !number) {
      return;
    }

    this.state.contacts.some(
      (contact) => contact.name === name)
      ? alert(name + ` is alredy in contacts`)
      : this.setState(
        ({ contacts }) => ({
          contacts: [
            ...contacts,
            {
              id: uuidv4(),
              name,
              number
            }
          ],
        })
      );
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
      </div>
    );
  }
}

export default App;