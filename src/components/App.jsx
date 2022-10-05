import { Component } from 'react';
import { nanoid } from 'nanoid';
import { FormAddContact } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import {
  Container,
  Card,
  Title,
  Accent,
  ContactsCard,
  ContactsTitle,
  SearchInput,
  DefaultText,
} from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    console.log('didMount');
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts?.length) {
      this.setState({
        contacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('conponentDidUpdate');
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  addContact = contact => {
    if (this.isDuplicate(contact)) {
      return alert(`${contact.name} ${contact.number} is already in contacts`);
    }
    this.setState(prev => {
      const newContact = {
        id: nanoid(),
        ...contact,
      };
      return {
        contacts: [...prev.contacts, newContact],
      };
    });
  };

  removeContact = id => {
    this.setState(prev => {
      const newContacts = prev.contacts.filter(item => item.id !== id);
      return {
        contacts: newContacts,
      };
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  isDuplicate({ name, number }) {
    const { contacts } = this.state;
    const result = contacts.find(
      item => item.name === name && item.number === number
    );
    return result;
  }

  getFilteredContacts() {
    const { contacts, filter } = this.state;

    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(({ name, number }) => {
      const normalizedName = name.toLocaleLowerCase();
      const result =
        normalizedName.includes(normalizedFilter) ||
        number.includes(normalizedFilter);
      return result;
    });
    return filteredContacts;
  }

  render() {
    const { addContact, removeContact, handleChange } = this;
    const { filter } = this.state;
    const contacts = this.getFilteredContacts();

    return (
      <Container>
        <Card>
          <Title>
            Phone<Accent>book</Accent>
          </Title>
          <FormAddContact onSubmit={addContact} />
        </Card>

        <ContactsCard>
          <ContactsTitle>Contacts</ContactsTitle>
          <SearchInput
            type="text"
            name="filter"
            onChange={handleChange}
            value={filter}
            placeholder="Search"
          />
          {this.state.contacts.length > 0 ? (
            <ContactList items={contacts} removeContact={removeContact} />
          ) : (
            <DefaultText>Contact list is empty</DefaultText>
          )}
        </ContactsCard>
      </Container>
    );
  }
}
