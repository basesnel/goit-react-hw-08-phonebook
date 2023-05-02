import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';

const RegisterPaper = styled(Paper)`
  width: 384px;
  margin: 0 auto;
  padding: 24px;
`;

export default function Register() {
  return (
    <Box sx={{ p: 4 }}>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterPaper elevation={3}>
        <RegisterForm />
      </RegisterPaper>
    </Box>
  );
}
