import { Box } from '../Box';
import { List } from './ContactList.styled';
import { ContactItem } from '../ContactItem';
import { useSelector } from 'react-redux';
import { contactsSelectors } from 'redux/contactsHW7';

export const ContactList = ({ list }) => {
  const items = useSelector(contactsSelectors.selectContacts);

  return (
    <>
      <h2>Contacts list</h2>
      <p>{items && items.length > 0 && `Total count ${items.length}`}</p>
      <Box
        display="block"
        p={2}
        bg="bgComponent"
        width={1}
        borderRadius="normal"
        boxShadow="basic"
      >
        <List>
          {list
            .map(item => <ContactItem key={item.id} {...item} />)
            .sort((a, b) => a.props.name.localeCompare(b.props.name))}
        </List>
      </Box>
    </>
  );
};
