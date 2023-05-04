import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import Loader from '../Loader/Loader';

import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Popup from '../Popup/Popup';
import { ContactEditor } from '../ContactEditor/ContactEditor';
import { useState } from 'react';

const FormPaper = styled(Paper)`
  margin: 0 auto;
  width: 100%;
  padding: 24px;
`;

export default function Phonebook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [openPopup, setOpenPopup] = useState(false);
  const [contactId, setContactId] = useState(null);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Stack spacing={2} useFlexGap>
        <FormPaper elevation={3}>
          <Grid
            container
            justifyContent="space-around"
            alignItems="center"
            spacing={8}
          >
            <Grid item xs={8}>
              <Filter />
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="contained"
                type="submit"
                endIcon={<PersonAddAlt1Icon />}
                size="large"
                fullWidth
                onClick={() => setOpenPopup(true)}
                style={{
                  maxHeight: '56px',
                  minHeight: '56px',
                }}
              >
                Add contact
              </Button>
            </Grid>
          </Grid>
        </FormPaper>
        <FormPaper elevation={3}>
          {isLoading && !error && <Loader />}
          <ContactList
            setContactId={setContactId}
            setOpenPopup={setOpenPopup}
          />
        </FormPaper>
      </Stack>
      <Popup
        title="Contact Form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <ContactEditor
          contactId={contactId}
          setContactId={setContactId}
          setOpenPopup={setOpenPopup}
        />
      </Popup>
    </>
  );
}
