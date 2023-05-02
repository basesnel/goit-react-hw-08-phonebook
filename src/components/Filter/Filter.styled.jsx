import styled from 'styled-components';

export const FilterLabel = styled.label`
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 10px;
  padding: 10px 20px;
  border: 1px solid #d0d0d0;
  border-radius: 4px;
  .filter__input {
    padding: 8px 16px;
    border: 1px solid #d0d0d0;
    border-radius: 2px;
    color: rgba(32, 32, 32, 0.8);
    @media screen and (min-width: 768px) {
      flex-grow: 1;
    }
  }
  .form__button {
    cursor: pointer;
    display: block;
    width: 160px;
    margin: 0 auto;
    padding: 4px 8px;
    border: 1px solid #d0d0d0;
    color: rgba(32, 32, 32, 0.8);
    background-color: #f0f0f0;
    border-radius: 4px;
    font-weight: 700;
    &:hover {
      background-color: #d0d0d0;
    }
  }
`;
