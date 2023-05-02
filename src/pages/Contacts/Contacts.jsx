import Phonebook from 'components/Phonebook/Phonebook';
// import  ContactList from 'components/ContactList/ContactList';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import Box from '@mui/material/Box';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box sx={{ p: 4 }}>
      <Helmet>
        <title>Your Contacts</title>
      </Helmet>

      <div>{isLoading && 'Request in progress...'}</div>
      <Phonebook />
    </Box>
  );
}
