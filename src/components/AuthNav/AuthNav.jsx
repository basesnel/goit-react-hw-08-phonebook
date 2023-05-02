import { NavLink } from 'react-router-dom';
import { Toolbar } from '@mui/material';
import { styled } from '@mui/system';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';

const AuthButton = styled(NavLink)`
  display: flex;
  gap: 4px;
  padding: 6px 16px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  border: 1px solid white;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.75;
  letter-spacing: 0.0285;
  text-transform: uppercase;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #1976d2;
    background-color: white;
    border-bottom: 1px solid white;
  }
  &.active {
    color: #1976d2;
    background-color: white;
    border-bottom: 1px solid white;
  }
`;

export const AuthNav = () => {
  return (
    <Toolbar disableGutters component="div" sx={{ gap: 1 }}>
      <AuthButton to="/register">
        Register
        <HowToRegIcon />
      </AuthButton>
      <AuthButton to="/login">
        Log in
        <LoginIcon />
      </AuthButton>
    </Toolbar>
  );
};
