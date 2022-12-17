import { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  contactsOperations,
  contactsSelectors,
  contactsSlice,
} from 'redux/contactsHW7';
import { Box } from 'components/Box';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { nanoid } from 'nanoid';
import { Title } from './ContactsView.styled';

export const ContactsView = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(contactsSelectors.selectIsLoading);
  const error = useSelector(contactsSelectors.selectError);
  const items = useSelector(contactsSelectors.selectContacts);
  const filter = useSelector(contactsSelectors.selectFilter);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  function handleSubmit({ name, number }) {
    const checkName = items.some(
      item => item.name.toLowerCase().trim() === name.toLowerCase().trim()
    );
    checkName
      ? alert(`${name} is already in contacts`)
      : dispatch(
          contactsOperations.addContact({
            id: nanoid(),
            name,
            number,
          })
        );
  }

  function onFilterChange([value]) {
    dispatch(contactsSlice.findContact(value));
    // if (value && value.length > 0) {
    //   dispatch(contactsSlice.findContact(value));
    // } else if (!value) {
    //   dispatch(contactsSlice.findContact((value = '')));
    // }
    // !value
    //   ? dispatch(contactsSlice.findContact((value = '')))
    //   : dispatch(contactsSlice.findContact(value));
  }

  const filteredItems = useMemo(() => {
    if (filter) {
      return items.filter(item => {
        return item.name
          .toLowerCase()
          .trim()
          .includes(filter.toLowerCase().trim());
      });
    }
    return items;
  }, [filter, items]);

  // function handleDelete(itemID) {
  //   dispatch(contactsOperations.deleteContact(itemID));
  // }

  return (
    <Box
      width={1}
      p={4}
      as="main"
      paddingTop={75}
      display="grid"
      gridTemplateColumns="1fr 1fr"
    >
      <Box width={1}>
        {error && <p>{error}</p>}
        <Title>Add contact</Title>
        <ContactForm onFormSubmit={handleSubmit} />
        <h2>Find contact</h2>
        <Filter onChange={onFilterChange} />
      </Box>
      <Box width={1}>
        {isLoading && <p>Loading contacts...</p>}
        {items && items.length > 0 && <ContactList list={filteredItems} />}
      </Box>
    </Box>
  );
};
