import { useEffect, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from 'GlobalStyle';
import { Toaster } from 'react-hot-toast';
import { HomeView } from 'views/HomeView';
import { Layout } from 'components/Layout';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import { PrivateRoute } from '../components/PrivateRoute';
import { RestrictedRoute } from '../components/RestrictedRoute';
import { useAuth } from 'hooks';

const ContactsView = lazy(() =>
  import('../views/ContactsView').then(module => ({
    ...module,
    default: module.ContactsView,
  }))
);

const RegisterView = lazy(() =>
  import('../views/RegisterView').then(module => ({
    ...module,
    default: module.RegisterView,
  }))
);

const LoginView = lazy(() =>
  import('../views/LoginView').then(module => ({
    ...module,
    default: module.LoginView,
  }))
);

// const UploadView = lazy(() =>
//   import('../views/UploadView').then(module => ({
//     ...module,
//     default: module.UploadView,
//   }))
// );

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <b>Refreshing user...</b>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeView />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsView />}
                />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterView />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginView />}
                />
              }
            />
            {/* <Route
              path="/upload"
              element={
                <PrivateRoute redirectTo="/login" component={<UploadView />} />
              }
            /> */}
          </Route>
        </Routes>
      )}
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
