import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { UserMenu } from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/auth/authSelector/authSelector';
import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { Header, Nav } from './Layout.styled';
const Layout = () => {
  const isToken = useSelector(getToken);
  return (
    <>
      <Header>
        <Nav>
          <Navigation />
        </Nav>
        {isToken ? <UserMenu /> : <AuthNav />}
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
