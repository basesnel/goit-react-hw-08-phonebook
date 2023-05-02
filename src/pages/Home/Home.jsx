import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Helmet } from 'react-helmet';
import { styled } from '@mui/system';

const HomeBox = styled(Box)`
  margin: 0 auto;
  max-width: 750px;
  display: flex;
  flex-direction: column;
  padding: 8px;
  justify-content: center;
  height: 70vh;
  color: #1976d2;
`;

export default function Home() {
  return (
    <HomeBox>
      <Helmet>
        <title>Phone Book</title>
      </Helmet>
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        Phone Book
      </Typography>
      <Typography variant="body1" component="p" align="center" gutterBottom>
        Welcome to the Phonebook app. Here you can add or delete contacts in
        your personal phone book. For comfort, the program has a friendly
        interface.
      </Typography>
    </HomeBox>
  );
}
