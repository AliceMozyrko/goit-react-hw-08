import { NavLink } from "react-router-dom";
import css from "./HomePage.module.css"


export default function HomePage() {

  return (
    <div className={css.container}>
      <h1>Welcome! This is your own web Phonebook ☎️</h1>
      <h2>Here you can add, delete and filter your contacts just in one click!</h2>
      <p className={css.txt}>Before starting using the app please<br/><NavLink to="/register" className={css.logTxt}>Register</NavLink> for new users or <br/><NavLink to="/login" className={css.logTxt}>Log in</NavLink> whether you have already got your account</p>
    </div>
    
  )
}