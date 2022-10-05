import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FormItem, Input, Label, Button } from './ContactForm.styled';

export class FormAddContact extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  nameId = nanoid();
  numberId = nanoid();

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({ name, number });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { nameId, numberId, handleChange, handleSubmit } = this;
    return (
      <form onSubmit={handleSubmit}>
        <FormItem>
          <Label htmlFor={nameId}>Name: </Label>
          <Input
            id={nameId}
            onChange={handleChange}
            value={this.state.name}
            type="text"
            name="name"
            placeholder="Enter the name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormItem>
        <FormItem>
          <Label htmlFor={numberId}>Number: </Label>
          <Input
            id={numberId}
            onChange={handleChange}
            value={this.state.number}
            type="tel"
            name="number"
            placeholder="Enter the number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormItem>
        <Button type="submit">Add contact</Button>
      </form>
    );
  }
}
