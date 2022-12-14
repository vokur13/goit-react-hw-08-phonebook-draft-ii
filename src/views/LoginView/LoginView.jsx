import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { authOperations } from '../../redux/auth';
import { useLogInUserMutation } from 'redux/auth/auth-rtk-query';

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
  // const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logInUser, { isSuccess }] = useLogInUserMutation();

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
    // dispatch(authOperations.logIn({ email, password }));
    try {
      await logInUser({
        email,
        password,
      });
    } catch (error) {
    } finally {
      setEmail('');
      setPassword('');
    }
  }

  return (
    <div>
      <h1>Страница логина</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Войти</button>
      </form>
    </div>
  );
};
