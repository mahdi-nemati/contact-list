import { useEffect, useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import { Route, Routes } from "react-router-dom";
import ContactDeatails from "./components/ContactDetails";
import axios from "axios";
function App() {
  axios.defaults.baseURL = "http://localhost:3001";
  const [contacts, setContacts] = useState([]);
  const submitHandler = (contact) => {
    const newContact = {
      id: Math.floor(Math.random() * 1000),
      name: contact.name,
      email: contact.email,
    };
    try {
      setContacts([...contacts, newContact]);
      axios.post("/contacts", newContact);
    } catch (error) {}
  };

  const deleteContactHandler = (id) => {
    axios.delete(`/contacts/${id}`);
    const filteredContacts = contacts.filter((c) => c.id !== id);
    setContacts(filteredContacts);
  };

  useEffect(() => {
    // const prevData = JSON.parse(localStorage.getItem("contacts"));
    // if (prevData) setContacts(prevData);
    axios
      .get("/contacts")
      .then((r) => setContacts(r.data))
      .catch();
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <section>
      <Routes>
        <Route
          path="/"
          element={
            <ContactList
              contacts={contacts}
              deleteContactHandler={deleteContactHandler}
            />
          }
        />
        <Route
          path="/Add"
          element={<AddContact submitHandler={submitHandler} />}
        />
        <Route path="user/:id" element={<ContactDeatails />} />
      </Routes>
      {/* <AddContact submitHandler={submitHandler} />
      <ContactList
        contacts={contacts}
        deleteContactHandler={deleteContactHandler}
      /> */}
    </section>
  );
}

export default App;
