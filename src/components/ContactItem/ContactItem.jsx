import PropTypes from 'prop-types';
import { Item, Button } from './ContactItemStyle';
import { ReactComponent as DeleteIcon } from '../icons/deleteIcon.svg';

export const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <Item key={id}>
      <Button type="button" onClick={() => onClick(id)}>
        <DeleteIcon width="20" height="20"></DeleteIcon>
      </Button>
      {name}: {number}
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
