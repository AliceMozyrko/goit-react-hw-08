import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css"

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch()
  return (
    <div className={css.container}>
      <div className={css.info}>
        <p> <FaUser className={css.icon} size="16"/> {name}</p>
        <p> <FaPhoneAlt className={css.icon} size="16"/> {number}</p>
      </div>
      <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </div>
  )
}