import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const Container = styled.div`
  display: flex;
`;
export const Link = styled(NavLink)`
  margin-right: 20px;
  padding: 3px 20px;
  font-family: system-ui;
  font-size: 18px;
  font-weight: 700;
  color: black;
  border: 1px solid black;
  border-radius: 12px;
  text-decoration: none;
  :last-child {
    margin-right: 0;
  }
`;
