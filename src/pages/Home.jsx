import { Container, Title, Link } from './Home.styled';
const Home = () => {
  return (
    <Container>
      <Title>Welcom to phonebook</Title>
      <Link to="/register">Go </Link>
    </Container>
  );
};
export default Home;
