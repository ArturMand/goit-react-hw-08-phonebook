import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
export const Container = styled.div`
  margin: 30px auto;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
`;
export const Title = styled.h1`
  text-transform: uppercase;
`;
export const Link = styled(NavLink)`
  display: block;
  margin-left: 10px;
  text-transform: uppercase;
  text-decoration: none;
  font-family: system-ui;
  font-size: 18px;
  font-weight: 700;
  color: black;
  border: 1px solid black;
  border-radius: 12px;
  padding: 3px 20px;
`;
