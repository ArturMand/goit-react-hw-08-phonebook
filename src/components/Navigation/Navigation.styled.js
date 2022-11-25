import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const Container = styled.div``;
export const Link = styled(NavLink)`
  padding: 3px 20px;
  font-family: system-ui;
  font-size: 18px;
  font-weight: 700;
  margin-right: 20px;
  color: black;
  border: 1px solid black;
  border-radius: 12px;
  text-decoration: none;
  :last-child {
    margin-right: 0;
  }
`;
