import styled from '@emotion/styled';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  /* border: 1px solid #000; */
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const Label = styled.label`
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  margin-top: 5px;

  font-size: 12px;
  border: 1px solid #c0b9b9;
  &:focus,
  &:active,
  &:hover {
    box-shadow: 0px 0px 4px 1px rgba(74, 164, 186, 1);
    border-color: #6ca7b6;
    outline: none;
    background-color: transparent;
  }
`;
export const Button = styled.button`
  margin: 0;
  padding: 0;
  width: 80px;
  margin: 0 auto;
  font-size: 12px;
  background-color: transparent;
  border: 1px solid #c0b9b9;
  border-radius: 4px;
  &:active {
    background-color: rgb(53, 124, 211);
  }
`;
