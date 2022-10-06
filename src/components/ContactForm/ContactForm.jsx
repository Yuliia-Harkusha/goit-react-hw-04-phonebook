import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FormItem, Input, Label, Button } from './ContactForm.styled';

export const FormAddContact = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = nanoid();
  const numberId = nanoid();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormItem>
        <Label htmlFor={nameId}>Name: </Label>
        <Input
          id={nameId}
          onChange={handleChange}
          value={name}
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
          value={number}
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
};

FormAddContact.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
