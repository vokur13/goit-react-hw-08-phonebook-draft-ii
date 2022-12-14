import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from 'GlobalStyle';
import { Toaster } from 'react-hot-toast';
import { HomeView } from 'views/HomeView';
import { RegisterView } from 'views/RegisterView';
import { LoginView } from 'views/LoginView';
import { ContactsView } from 'views/ContactsView';
import { Layout } from 'components/Layout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<HomeView />} />
          <Route path="/contacts" element={<ContactsView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
        </Route>
      </Routes>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
