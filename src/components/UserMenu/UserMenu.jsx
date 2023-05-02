import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { Toolbar, Typography, Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { styled } from '@mui/system';

const LogoutButton = styled(Button)`
  color: white;
  font-weight: 700;
  border: 1px solid white;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #1976d2;
    background-color: white;
    border: 1px solid white;
  }
  &.active {
    color: #1976d2;
    background-color: white;
    border: 1px solid white;
  }
`;

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Toolbar disableGutters component="div" sx={{ gap: 1 }}>
      <Typography
        variant="body1"
        component="p"
        sx={{ fontWeight: 'bold', m: 1 }}
      >
        Welcome, {user.name}
      </Typography>
      <LogoutButton
        variant="contained"
        disableElevation
        onClick={() => dispatch(logout())}
        endIcon={<LogoutIcon />}
      >
        Logout
      </LogoutButton>
    </Toolbar>
  );
};
