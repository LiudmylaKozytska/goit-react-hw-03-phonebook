import PropTypes from 'prop-types';
import { Title, Input } from 'components/ContactForm/ContactFormStyle';
import { Label } from './FilterStyle';

export const FilterContacts = ({ value, handleFilter }) => {
  return (
    <>
      <Title>Contacts</Title>
      <Label>
        Find contacts by name
        <Input
          type="text"
          placeholder="Type name"
          value={value}
          onChange={handleFilter}
        ></Input>
      </Label>
    </>
  );
};

FilterContacts.propTypes = {
  value: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};
