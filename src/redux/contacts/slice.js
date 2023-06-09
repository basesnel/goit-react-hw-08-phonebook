import { createSlice } from '@reduxjs/toolkit';
import { logout } from 'redux/auth/operations';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        handlePending(state);
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(addContact.pending, state => {
        handlePending(state);
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(deleteContact.pending, state => {
        handlePending(state);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(updateContact.pending, state => {
        handlePending(state);
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.isLoading = false;
        const {
          arg: { id },
        } = action.meta;
        if (id) {
          state.items = state.items.map(item =>
            item._id === id ? action.payload : item
          );
        }
      })
      .addCase(updateContact.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(logout.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
        state.items = [];
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
