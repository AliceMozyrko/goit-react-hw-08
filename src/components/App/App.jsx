import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';
// import { selectError, selectLoading } from '../../redux/contacts/slice';
import { Route, Routes } from "react-router-dom";
// import { lazy, Suspense } from "react";
// import ContactForm from "../ContactForm/ContactForm"
// import SearchBox from "../SearchBox/SearchBox"
// import ContactList from "../ContactList/ContactList"
import HomePage from "../../pages/HomePage/HomePage"
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage"
import LoginPage from "../../pages/LoginPage/LoginPage"
import ContactsPage from "../../pages/ContactsPage/ContactsPage"
import Layout from '../Layout/Layout';
import css from "./App.module.css"


// const HomePage = lazy(() => import("../../pages/HomePage/HomePage"))
// const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage"))
// const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"))
// const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"))



export default function App() {

  const dispatch = useDispatch()
  // const loading = useSelector(selectLoading)
  // const error = useSelector(selectError)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <Layout>
       <div className={css.container}>
      {/* <Suspense fallback={<p>Page loading...</p>}> */}
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
        {/* </Suspense> */}
       </div>
    </Layout>
  )
}

  // <h1>Phonebook</h1>
  //     <ContactForm/>
  //       <SearchBox />
  //       <ContactList />


