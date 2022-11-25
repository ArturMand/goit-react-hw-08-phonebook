import styled from '@emotion/styled';
export const Container = styled.div`
  display: flex;
  align-items: center;
`;
export const Text = styled.p`
  margin: 0 10px 0 0;
  font-family: system-ui;
  font-size: 18px;
  font-weight: 700;
`;
export const Button = styled.button`
  padding: 5px 10px;
  color: #ffffff;
  font-family: system-ui;
  font-size: 18px;
  font-weight: 700;
  color: black;
  border: 1px solid black;
  border-radius: 12px;
  &:hover {
    border-color: black;
    background-color: rgba(102, 102, 102, 0.1);
  }
`;
