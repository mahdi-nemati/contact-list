import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import axios from "axios";
import Contact from "./Contact";
const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [contactList, setContactList] = useState(null);
  const [search, setSearch] = useState();
  ///////////////////
  useEffect(() => {
    axios
      .get("/contacts")
      .then((r) => setContacts(r.data))
      .catch();
  }, []);
  /////////////
  useEffect(() => {
    setContactList(contacts);
  }, [contacts]);
  //////////////////
  const deleteHandler = (id) => {
    deleteContactHandler(id);
  };
  ///////////////////
  const deleteContactHandler = (id) => {
    axios.delete(`/contacts/${id}`);
    const filteredContacts = contacts.filter((c) => c.id !== id);
    setContacts(filteredContacts);
  };
  // \\\\\\\\\\\\\\\\\\\\\\\\\\\
  const changeHandler = (e) => {
    const searchItem = e.target.value;
    const filteredContacts = contacts.filter((c) => {
      return Object.values(c)
        .join(" ")
        .toLowerCase()
        .includes(searchItem.toLowerCase());
    });
    if (!searchItem == "") {
      setContactList(filteredContacts);
    } else {
      setContactList(contacts);
    }
  };
  return (
    <section>
      <div className="div">
        <MdSearch className="icon" />
        <input
          type="text"
          value={search}
          placeholder="search"
          onChange={changeHandler}
        />
        <Link to="/Add">
          <span>
            <FaUserPlus />
          </span>
        </Link>
      </div>

      <Contact contactList={contactList} deleteHandler={deleteHandler} />
    </section>
  );
};

export default ContactList;
