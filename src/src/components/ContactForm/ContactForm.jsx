import { Component } from 'react';
import { Form, Title, Input, Button } from './ContactFormStyle';
export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const { contacts } = this.props;
    console.log(contacts);
    const contactIncludes = contacts.some(contact => contact.name === name);

    if (contactIncludes) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.props.onSubmit(name, number);
    this.setState({
      name: '',
      number: '',
    });
  };

  handleNameChange = event => {
    this.setState({ name: event.currentTarget.value });
  };

  handleNumberChange = event => {
    this.setState({ number: event.currentTarget.value });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Title>Phonebook</Title>
        <label>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Type name"
            value={this.state.name}
            onChange={this.handleNameChange}
            required
          />
        </label>
        <label>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Type number"
            required
            value={this.state.number}
            onChange={this.handleNumberChange}
          />
        </label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
