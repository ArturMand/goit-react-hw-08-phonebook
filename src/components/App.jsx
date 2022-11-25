import { lazy, useEffect } from 'react';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { getIsRefreshing } from 'redux/auth/authSelector/authSelector';
import { refreshUser } from 'redux/auth/authOperations/operations';
import Layout from './Layout/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const LogIn = lazy(() => import('./LogIn/LogIn'));
const Register = lazy(() => import('./Register/Register'));
const Contacts = lazy(() => import('pages/Contacts'));

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Register />}
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<LogIn />} />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
      ,
    </>
  );
}
