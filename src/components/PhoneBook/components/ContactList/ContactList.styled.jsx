import styled from '@emotion/styled';

export const ListItem = styled.li`
  text-align: center; ;
`;
export const Name = styled.span`
  font-size: 16px;
`;
export const Phone = styled.span`
  font-size: 20px;
  display: inline-block;
`;

export const Btn = styled.button`
  margin: 0;
  margin-left: 10px;
  padding: 0;
  width: 40px;
  font-size: 12px;
  background-color: transparent;
  border: 1px solid #c0b9b9;
  border-radius: 4px;
  &:active {
    background-color: rgb(53, 124, 211);
  }
`;
