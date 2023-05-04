import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';

const ContactList = props => {
  const visibleContacts = useSelector(selectVisibleContacts);

  // const { setContactId, setOpenPopup } = props;

  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const buttonHandleDeleteContact = (event, contactId) => {
    handleDeleteContact(contactId);
    event.target.disabled = true;
    event.target.innerText = 'Deleting...';
  };

  // const handleEditContact = contactId => {
  //   setContactId(contactId);

  //   setOpenPopup(true);
  // };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.text.primary,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  return (
    <TableContainer component={Paper} sx={{ mx: 'auto', maxWidth: 960 }}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Phone number</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {visibleContacts.map(({ id, name, number }) => (
            <TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{name}</TableCell>
              <TableCell align="center">{number}</TableCell>
              <TableCell align="right">
                {/* <Button
                  variant="outlined"
                  onClick={() => handleEditContact(id)}
                  sx={{ mr: 1 }}
                >
                  <EditIcon />
                </Button> */}
                <Button
                  variant="outlined"
                  onClick={event => buttonHandleDeleteContact(event, id)}
                  color="error"
                >
                  <DeleteIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactList;
