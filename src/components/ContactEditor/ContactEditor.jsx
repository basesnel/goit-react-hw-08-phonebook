import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import * as yup from 'yup';
import ReactInputMask from 'react-input-mask';

import useLocalStorage from '../../hooks/useLocalStorage';

import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import { Form, Field } from 'formik';

const scheme = yup.object().shape({
  name: yup.string().required().min(3, 'Must be at least 3 characters'),
  number: yup
    .string()
    .required()
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{2,3}\)?)\s?-?\s?(\(?\d{2,4}\)?)?$/,
      'Not valid, please try: 000-000-0000'
    ),
});

export function ContactEditor(props) {
  const { setOpenPopup } = props;

  const contacts = useSelector(selectContacts);

  // const searchedIndex = contacts.findIndex(contact => contact.id === contactId);
  // console.log(contacts[searchedIndex]);

  // const contact = contacts[searchedIndex];
  // const ctName = contact.name;
  // const ctNumber = contact.number;

  const [name, setName] = useLocalStorage('name', '');
  const [number, setNumber] = useLocalStorage('number', '');

  // useEffect(() => {
  //   if (contactId) {
  //     setName(ctName);
  //     setNumber(ctNumber);
  //   }
  // }, [contactId, ctName, ctNumber, setName, setNumber]);

  const state = { name, number };

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  // const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const formSubmitHandler = data => {
    const { name, number } = data;

    const contact = {
      name,
      number,
    };

    // if (contactId) {
    //   console.log(contact);
    //   dispatch(updateContact(contactId, contact));
    // } else {
    const contactName = contact.name.toLowerCase();
    if (contacts.find(contact => contact.name.toLowerCase() === contactName)) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    dispatch(addContact(contact));
    // }
  };

  const handleSubmit = event => {
    formSubmitHandler(state);
    reset();
    setOpenPopup(false);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Formik
      enableReinitialize
      initialValues={state}
      validationSchema={scheme}
      onSubmit={handleSubmit}
      isValid
    >
      {({ errors, isValid, touched, dirty }) => (
        <Form>
          <Stack spacing={1} sx={{ p: 2 }} useFlexGap>
            <Field
              type="text"
              name="name"
              as={TextField}
              fullWidth
              variant="outlined"
              color="primary"
              label="Name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={name}
              onChange={handleChange}
              id={nameInputId}
              error={Boolean(errors.name) && Boolean(touched.name)}
              helperText={Boolean(touched.name) && errors.name}
            />

            <ReactInputMask
              mask="999-999-9999"
              value={number}
              onChange={handleChange}
            >
              {() => (
                <Field
                  type="tel"
                  name="number"
                  as={TextField}
                  fullWidth
                  variant="outlined"
                  color="primary"
                  label="Phone"
                  title="The phone must have phones and look like a template 000-000-0000."
                  id={numberInputId}
                  error={Boolean(errors.number) && Boolean(touched.number)}
                  helperText={Boolean(touched.number) && errors.number}
                />
              )}
            </ReactInputMask>

            <Button
              variant="contained"
              type="submit"
              endIcon={<SendIcon />}
              size="large"
              fullWidth
              style={{
                maxHeight: '56px',
                minHeight: '56px',
              }}
              disabled={!isValid || dirty}
            >
              Send Contact
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}
