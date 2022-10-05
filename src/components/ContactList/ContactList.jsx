import PropTypes from 'prop-types';
import { FaFeatherAlt, FaRegTrashAlt } from 'react-icons/fa';
import {
  List,
  ListItem,
  ListItemPart,
  FeatherIcon,
  TrashIcon,
} from './ContactList.styled';

export const ContactList = ({ items, removeContact }) => {
  const elements = items.map(({ name, number, id }) => {
    return (
      <ListItem key={id}>
        <ListItemPart>
          <FeatherIcon>
            <FaFeatherAlt />
          </FeatherIcon>
          {name}: {number}
        </ListItemPart>
        <TrashIcon onClick={() => removeContact(id)}>
          <FaRegTrashAlt />
        </TrashIcon>
      </ListItem>
    );
  });
  return <List>{elements}</List>;
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeContact: PropTypes.func.isRequired,
};
