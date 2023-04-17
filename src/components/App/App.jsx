import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { FilterContacts } from '../Filter/Filter';

import { Container, ContactSection } from './AppStyled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = (name, number) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  handleFilter = event => {
    this.setState({ filter: event.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  onDelete = id => {
    const { contacts } = this.state;
    const updatesContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: updatesContacts });
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container>
        <ContactForm
          onSubmit={this.handleSubmit}
          contacts={this.state.contacts}
        />
        <ContactSection>
          <FilterContacts value={filter} handleFilter={this.handleFilter} />
          <ContactsList items={visibleContacts} onClick={this.onDelete} />
        </ContactSection>
      </Container>
    );
  }
}

export default App;
