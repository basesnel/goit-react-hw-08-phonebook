import styled from 'styled-components';
import { Form, Field } from 'formik';

export const ContactFormGetUp = styled(Form)`
  margin-bottom: 20px;
  .contactform__label {
    position: relative;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto 10px;
    padding: 10px 20px;
    border: 1px solid #d0d0d0;
    border-radius: 4px;
  }
  .contactform__error {
    z-index: 100;
    position: absolute;
    padding: 4px;
    border: 1px solid red;
    border-radius: 4px;
    top: 50px;
    right: 20px;
    background-color: #f02020;
    color: #f0f0f0;
  }
  .input__error {
    border: 1px solid red;
  }
  .contactform__button {
    cursor: pointer;
    padding: 4px 8px;
    border: 1px solid #d0d0d0;
    color: rgba(32, 32, 32, 0.8);
    background-color: #f0f0f0;
    border-radius: 4px;
    font-weight: 700;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      background-color: #2080f0;
      color: #f0f0f0;
    }
  }
`;

export const Input = styled(Field)`
  width: 220px;
  padding: 8px 16px;
  border: 1px solid #d0d0d0;
  border-radius: 2px;
  color: rgba(32, 32, 32, 0.8);
`;
