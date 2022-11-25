import { Container, Link } from './AuthNav.styled';
export const AuthNav = () => {
  return (
    <Container>
      <Link to="/register">Register </Link>
      <Link to="/login">Log In</Link>
    </Container>
  );
};
