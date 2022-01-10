import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";
const ContactList = ({ contacts, deleteContactHandler }) => {
  const [contactList, setContactList] = useState([]);
  useEffect(() => {
    setContactList(contacts);
  }, [contacts]);
  const deleteHandler = (id) => {
    deleteContactHandler(id);
  };
  return (
    <section>
      <div>
        <h3>Add new Contact</h3>
        <Link to="/Add">
          <button>Add</button>
        </Link>
      </div>
      <Contact contactList={contactList} deleteHandler={deleteHandler} />
    </section>
  );
};

export default ContactList;
