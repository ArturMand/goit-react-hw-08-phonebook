import styled from '@emotion/styled';
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
  margin-top: 10px;
  padding: 10px;
`;
export const Item = styled.li`
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
`;
export const Text = styled.p`
  margin: 0;
`;
export const Link = styled.a`
  text-decoration: none;
  margin-left: 5px;
`;
export const Button = styled.button`
  margin-left: 10px;
  padding: 7px 15px;
  border: none;
  border-radius: 5px;
  &:active {
    background-color: blue;
    color: white;
  }
`;
