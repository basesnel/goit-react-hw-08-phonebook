import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';

const LoginPaper = styled(Paper)`
  width: 384px;
  margin: 0 auto;
  padding: 24px;
`;

export default function Login() {
  return (
    <Box sx={{ p: 4 }}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginPaper elevation={3}>
        <LoginForm />
      </LoginPaper>
    </Box>
  );
}
