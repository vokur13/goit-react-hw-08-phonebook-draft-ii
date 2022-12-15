import { authOperations, authSelectors } from '../../redux/auth';
import { useDispatch, useSelector } from 'react-redux';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUseremail);

  return (
    <div>
      <p>{email}</p>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </div>
  );
};
