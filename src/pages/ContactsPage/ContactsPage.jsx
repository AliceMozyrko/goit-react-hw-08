import { useDispatch } from "react-redux"
import ContactList from "../../components/ContactList/ContactList"
import css from "./ContactsPage.module.css"
import { useEffect } from "react"
import { fetchContacts } from "../../redux/contacts/operations"

export default function ContactsPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  
  return (
    <div className={css.container}>
      <ContactList/>
    </div>
    
  )
}