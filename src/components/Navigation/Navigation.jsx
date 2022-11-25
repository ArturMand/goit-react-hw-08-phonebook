import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelector/authSelector';
import { Container, Link } from './Navigation.styled';
export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Container>
      <Link to="/">Home</Link>{' '}
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </Container>
  );
};
