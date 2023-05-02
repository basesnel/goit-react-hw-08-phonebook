import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from 'redux/auth/operations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';

const Input = styled(TextField)`
  width: 320px;
`;

const initRegisterValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState(initRegisterValues);
  const [errors, setErrors] = useState({});

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('name' in fieldValues)
      temp.name = values.name ? '' : 'This field is required.';
    if ('email' in fieldValues)
      temp.email = /$^|.+@.+..+/.test(values.email)
        ? ''
        : 'Email is not valid.';
    if ('password' in fieldValues)
      temp.password = values.password ? '' : 'This field is required.';

    setErrors({ ...temp });

    if (fieldValues === values) return Object.values(temp).every(x => x === '');
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    validate({ [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    if (validate()) {
      dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      form.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12}>
          <Input
            variant="outlined"
            label="username"
            name="name"
            type="text"
            value={values.name}
            onChange={handleInputChange}
            {...(errors.name && { error: true, helperText: errors.name })}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            variant="outlined"
            label="email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            {...(errors.email && { error: true, helperText: errors.email })}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            variant="outlined"
            label="password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleInputChange}
            {...(errors.password && {
              error: true,
              helperText: errors.password,
            })}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit" sx={{ fontWeight: 700 }}>
            Register
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
