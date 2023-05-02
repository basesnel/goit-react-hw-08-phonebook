import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactEditor } from '../ContactEditor/ContactEditor';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import Loader from '../Loader/Loader';

import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

const FormPaper = styled(Paper)`
  margin: 0 auto;
  width: 100%;
  padding: 24px;
`;

export default function Phonebook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Stack spacing={2} useFlexGap>
      <FormPaper elevation={3}>
        <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          spacing={4}
        >
          <Grid item xs={9}>
            <ContactEditor />
          </Grid>
          <Grid item xs={3}>
            <Filter />
          </Grid>
        </Grid>
      </FormPaper>
      <FormPaper elevation={3}>
        {isLoading && !error && <Loader />}
        <ContactList />
      </FormPaper>
    </Stack>
  );
}
