import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import * as yup from 'yup';
import ReactInputMask from 'react-input-mask';

import useLocalStorage from '../../hooks/useLocalStorage';

import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
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

export function ContactEditor() {
  const [name, setName] = useLocalStorage('name', '');
  const [number, setNumber] = useLocalStorage('number', '');

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

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const formSubmitHandler = data => {
    const { name, number } = data;

    // const contact = {
    //   id: nanoid(),
    //   name,
    //   phone,
    // };

    const contact = {
      name,
      number,
    };

    const contactName = contact.name.toLowerCase();
    if (contacts.find(contact => contact.name.toLowerCase() === contactName)) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(contact));
  };

  const handleSubmit = event => {
    console.log('submit contact');
    formSubmitHandler(state);
    reset();
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
          <Stack direction="row" spacing={1} useFlexGap>
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
              endIcon={<PersonAddAlt1Icon />}
              size="large"
              style={{
                maxWidth: '190px',
                maxHeight: '56px',
                minWidth: '190px',
                minHeight: '56px',
              }}
              disabled={!isValid || dirty}
            >
              Add contact
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}
