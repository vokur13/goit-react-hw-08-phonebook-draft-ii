import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { Box } from 'components/Box';
// import { useLogInUserMutation } from 'redux/auth/auth-rtk-query';
// import { authSlice } from '../../redux/auth';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [logInUser] = useLogInUserMutation();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      // await logInUser({
      //   email,
      //   password,
      // });
      dispatch(authOperations.logIn({ email, password }));
      // dispatch(authSlice.isLoggedIn(true));
    } catch (error) {
    } finally {
      setEmail('');
      setPassword('');
    }
  }

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      // fontSize="72px"
      color="#010101"
      paddingTop={50}
    >
      <h1>Login page</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          e-Mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </Box>
  );
};
