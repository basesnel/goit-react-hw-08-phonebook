import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';
import { Toolbar } from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { styled } from '@mui/system';

const Link = styled(NavLink)`
  padding: 8px 2px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  border-bottom: 1px solid transparent;
  transition: border-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: white;
    border-bottom: 1px solid white;
  }
  &.active {
    color: white;
    border-bottom: 1px solid white;
  }
`;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Toolbar disableGutters component="nav" sx={{ gap: 2 }}>
      <ContactPhoneIcon fontSize="large" />
      <Link to="/">PhoneBook</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </Toolbar>
  );
};
