import { useSelector } from 'react-redux';
// import { logOut } from "../../redux/auth/operations"
import { selectUser } from "../../redux/auth/selectors"
import css from "./UserMenu.module.css"

export default function UserMenu() {
  const user = useSelector(selectUser);

  return (
    <div className={css.container}>
      <p>Welcome, {user.name}</p>
      <button type="button">Logout</button>
    </div>
  );
}