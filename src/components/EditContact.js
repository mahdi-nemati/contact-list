import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const EditContact = () => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  //////////////////
  const id = useParams().id;
  useEffect(() => {
    axios
      .get(`/contacts/${id}`)
      .then((r) => setContact({ name: r.data.name, email: r.data.email }))
      .catch();
  }, []);
  /////////////////////
  const navigate = useNavigate();
  const AddHandler = async (e) => {
    e.preventDefault();
    if (!contact.name || !contact.email) {
      alert("پرش کن خب");
      return;
    }
    try {
      await axios.put(`/contacts/${id}`, contact);
      await axios.get("/contacts");
      navigate("/");
    } catch (error) {}
  };
  ///////////////////
  const editContactHandler = async (contact, id) => {};
  return (
    <section>
      <form onSubmit={AddHandler}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={contact.name}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={contact.email}
          onChange={changeHandler}
        />
        <button type="submit">Update</button>
      </form>
    </section>
  );
};

export default EditContact;
