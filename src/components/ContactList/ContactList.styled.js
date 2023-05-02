import styled from 'styled-components';

export const ContactListGetUp = styled.ul`
  .contact__item {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto 10px;
    padding: 10px 20px;
    border: 1px solid #d0d0d0;
    border-radius: 4px;
    background-color: #fff;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .contact__name {
    @media screen and (min-width: 480px) {
      width: 120px;
    }
    @media screen and (min-width: 768px) {
      width: 160px;
    }
  }
  .contact__button {
    cursor: pointer;
    padding: 4px 8px;
    border: 1px solid #d0d0d0;
    color: #f0f0f0;
    background-color: #f0f0f0;
    border-radius: 4px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      background-color: #f02020;
      color: #f0f0f0;
    }
    &:disabled {
      opacity: 0.62;
    }
  }
`;
