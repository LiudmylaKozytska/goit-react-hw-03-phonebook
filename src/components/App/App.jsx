import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Swal from 'sweetalert2';

import { ContactForm } from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { FilterContacts } from '../Filter/Filter';
// import { alertConfirmDelete } from 'components/Alert/Alert';

import { Container, ContactSection } from './AppStyled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    console.log(newContact);
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  handleFilter = event => {
    this.setState({ filter: event.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    console.log(this.state);
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  onDelete = id => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
        confirmButtonClass: 'btn btn-primary',
        cancelButtonClass: 'btn btn-secondary',
      })
      .then(result => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your contact has been deleted.',
            'success'
          );
          const { contacts } = this.state;
          const updatesContacts = contacts.filter(contact => contact.id !== id);
          this.setState({ contacts: updatesContacts });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your contact file is safe :)',
            'error'
          );
        }
      });
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
