import PropTypes from 'prop-types';
import { Item, Button } from './ContactItemStyle';

export const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <Item key={id}>
      {name}: {number}
      <Button type="button" onClick={() => onClick(id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
