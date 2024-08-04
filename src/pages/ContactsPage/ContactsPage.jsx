import ContactList from "../../components/ContactList/ContactList"
import css from "./ContactsPage.module.css"

export default function ContactsPage() {
  return (
    <div className={css.container}>
      <ContactList/>
    </div>
    
  )
}